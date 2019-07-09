import ModelAnimal from './model.js';
import ViewStart from './viewStart.js';
import ViewAnimal from './view.js';
import ViewBasket from './viewBasket.js';
import ViewOrderForm from './viewOrderForm.js';
import ViewHistory from './viewHistory.js';

export default class ControllerAnimal {
  constructor() {
    this.model = new ModelAnimal();
    this.viewStart = new ViewStart();
    this.view = new ViewAnimal();
    this.viewBasket = new ViewBasket();
    this.ViewOrderForm = new ViewOrderForm();
    this.ViewHistory = new ViewHistory();
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
    this.viewBasket.render(this);
  }

  openHistory() {
    this.ViewHistory.render(this);
  }

  addToBasket(id) {
    let idWarning = this.model.handleShoppingBasket(id, 1);
    this.viewBasket.render(this, idWarning);
  }

  reduceInBasket(id) {
    this.model.handleShoppingBasket(id, -1);
    this.viewBasket.render(this);
  }

  removeFromBasket(id) {
    this.model.handleShoppingBasket(id, 0);
    this.viewBasket.render(this);
  }

  showOrderForm() {
    this.ViewOrderForm.render(this);
  }

  checkout() {
    
    this.model.handleData(this);
    this.viewBasket.clearCountTotal();
  }

  searchPets() {
    this.model.filterFromSearch(this);
  }

  selectPets() {
    this.model.filterPets(this, event);
  }
}