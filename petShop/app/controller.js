import {Cat, Dog, Fish, Bird} from './model.js';
import BuildCard from './view.js';

export default class Base {
  constructor(data) {}

  static pushingData(data) {
    const base = [];

    data.forEach(el => {
      switch (el.type) {
        case 'dog':
          base.push(new Dog(el));
          break;
        case 'cat':
          base.push(new Cat(el));
          break;
        case 'fish':
          base.push(new Fish(el));
          break;
        case 'bird':
          base.push(new Bird(el));
          break;
        default:
          throw {
            name: 'Error',
            message: `${el.type} doesn’t exist`
          };
      }
      BuildCard.buildElement(el);
    });

    return base;
  }
}