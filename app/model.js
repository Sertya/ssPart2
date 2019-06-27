export class ModelAnimal {
  loadJSON(controller){
    let xhr = new XMLHttpRequest();
    const url = "../data/petBase.json";

    xhr.addEventListener('load', function(controller, ev){
        controller.showView(JSON.parse(this.responseText));
        controller.pushToStock(JSON.parse(this.responseText));
    }.bind(xhr, controller));

    xhr.open('GET', url);
    xhr.send(); 
  }
  // loadJSON() {
  //   fetch('./data/petBase.json')
  //   .then(response => {
  //     if(response.ok) {
  //       return response.json();
  //     }
  //     throw new Error('Request failed');
  //   })
  //   .then(jsonResponse => {
  //     Base.pushingData(jsonResponse);
  //   });
  // }
}
class Pet {
  constructor(element) {
    this.id = element.id;
    this.type = element.type;
    this.name = element.name;
    this.price = element.price;
    this.number = element.number;
    this.age = element.age;
    this.weight = element.weight;
    this.color = element.color;
    this.gender = element.gender;
    this.pic = element.pic;
  }
}

export class Dog extends Pet {
  constructor(element) {
    super(element);
    this.fur = element.fur;
    this.pedigree = element.pedigree;
    this.docking = element.docking;
    this.classification = element.classification;
  }
}

export class Cat extends Pet {
  constructor(element) {
    super(element);
    this.fur = element.fur;
    this.pedigree = element.pedigree;
  }
}

export class Fish extends Pet {
  constructor(element) {
    super(element);
    this.water = element.water;
    this.family = element.family;
  }
}

export class Bird extends Pet {
  constructor(element) {
    super(element);
    this.speaking = element.speaking;
    this.singing = element.singing;
  }
}

