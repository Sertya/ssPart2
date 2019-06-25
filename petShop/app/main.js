import Base from './controller.js';

class Start {
  constructor() {

  }

  static getData() {
    fetch('../data/petBase.json')
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error('Request failed');
    })
    .then(jsonResponse => {
      Base.pushingData(jsonResponse);
    });
  }
}

Start.getData();