import ModelAnimal from './model.js';
import ViewAnimal from './view.js';
import ViewBasket from './viewBasket.js';

export default class ControllerAnimal {
  constructor() {
    this.model = new ModelAnimal();
    this.view = new ViewAnimal();
    this.viewBasket = new ViewBasket();
    this.init();
  }

  init() {
    this.model.loadJSON(this);
    this.view.init(this);
    this.viewBasket.init(this);
  }

  showView(data){
    this.view.render(data, this);
  }

  openBasket() {
    this.viewBasket.renderItems(this);
  }

  addToBasket(id) {

    let idWarning = this.model.handleShoppingBasket(id, 1);
    this.viewBasket.renderItems(this, idWarning);
  }

  removeFromBasket(id) {
    this.model.handleShoppingBasket(id, -1);
    this.viewBasket.renderItems(this);
  }

  checkout() {
    this.model.handleData();
    this.viewBasket.clearCountTotal();
    let data = JSON.parse(localStorage.getItem('data'));
    this.view.render(data, this);
    
  }

}