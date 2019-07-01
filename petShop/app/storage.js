import ControllerAnimal from './controller.js';

export default class Storage {

  static init(){
    this.lang = 'en';
    this.vocabulary = [];
    this.controller = new ControllerAnimal();

  }

}