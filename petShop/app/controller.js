import {ModelAnimal, Cat, Dog, Fish, Bird} from './model.js';
import ViewAnimal from './view.js';
import Storage from './main.js';

export default class ControllerAnimal {
  constructor() {
    this.model = new ModelAnimal();
    this.view = new ViewAnimal();
    this.init();
  }

  init() {
    this.model.loadJSON(this);
  }

  showView(data){
    this.view.render(data);
  }

  pushToStock(data) {

    data.forEach(el => {
      switch (el.type) {
        case 'dog':
          Storage.stock.push(new Dog(el));
          break;
        case 'cat':
          Storage.stock.push(new Cat(el));
          break;
        case 'fish':
          Storage.stock.push(new Fish(el));
          break;
        case 'bird':
          Storage.stock.push(new Bird(el));
          break;
        default:
          throw {
            name: 'Error',
            message: `${el.type} doesn’t exist`
          };
      }
    });
  }
}