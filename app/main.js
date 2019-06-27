import ControllerAnimal from './controller.js';

export default class Storage {

  static lang = 'en';
  static stock = [];
  static vocabulary = [];

  static init(){
      let initial = new ControllerAnimal();

  }

}

document.addEventListener('DOMContentLoaded', Storage.init);
