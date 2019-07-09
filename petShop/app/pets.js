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
