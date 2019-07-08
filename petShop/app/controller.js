import ModelAnimal from './model.js';
import ViewStart from './viewStart.js';
import ViewAnimal from './view.js';
import ViewBasket from './viewBasket.js';

export default class ControllerAnimal {
  constructor() {
    this.model = new ModelAnimal();
    this.viewStart = new ViewStart();
    this.view = new ViewAnimal();
    this.viewBasket = new ViewBasket(this);
    this.init();
  }

  init() {
    this.viewStart.showPic(this);
  }
  signIn() {
    this.view.init(this);
    this.model.loadJSON(this);
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

  reduceInBasket(id) {
    this.model.handleShoppingBasket(id, -1);
    this.viewBasket.renderItems(this);
  }

  removeFromBasket(id) {
    this.model.handleShoppingBasket(id, 0);
    this.viewBasket.renderItems(this);
  }

  checkout() {
    this.model.handleData(this);
    this.viewBasket.clearCountTotal();
  }

  searchPets() {
    this.model.filterFromSearch(this);
  }
}