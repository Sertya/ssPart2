import {Dog, Cat, Fish, Bird} from './pets.js';

export default class ModelAnimal {

  loadJSON(controller) {
    let data = JSON.parse(localStorage.getItem('data'));
    if(!data) {
      fetch('./data/petBase.json')
      .then( response => {
        if(response.ok) {
          return response.json();
        }
        throw new Error('Request failed');
      })
      .then(jsonResponse => {
        let pets = this.pushToData(jsonResponse);
        localStorage.setItem('data', JSON.stringify(pets));
        localStorage.setItem('shoppingBasket', JSON.stringify({})); // ???
        localStorage.setItem('history', JSON.stringify([])); // to store order history
        controller.showView(jsonResponse);
      });
    } else {
      controller.showView(data);
    }
    
  }

  pushToData(data) {
    const result = [];

    data.forEach(el => {
      switch (el.type) {
        case 'dog':
          result.push(new Dog(el));
          break;
        case 'cat':
          result.push(new Cat(el));
          break;
        case 'fish':
          result.push(new Fish(el));
          break;
        case 'bird':
          result.push(new Bird(el));
          break;
        default:
          throw {
            name: 'Error',
            message: `${el.type} doesn’t exist`
          };
      }
    });

    return result;
  }

  handleShoppingBasket(id, point) {
    const data = JSON.parse(localStorage.getItem('data'));
    const shoppingBasket = JSON.parse(localStorage.getItem('shoppingBasket'));
    let result;
    
    data.forEach(element => {
       if(element.id == id) {
         if(id in shoppingBasket) {
          if(point == 1 && shoppingBasket[id].count < element.number ||
             point == -1 && shoppingBasket[id].count > 0) {
              shoppingBasket[id].count += point;
             } else if(point == 0){
              shoppingBasket[id].count = 0;
             } else {
              result = id;
             }
         } else {
          shoppingBasket[id] = {};
          shoppingBasket[id].pic = element.pic;
          shoppingBasket[id].name = element.name;
          shoppingBasket[id].price = element.price;
          shoppingBasket[id].count = 1;
          shoppingBasket[id].left = element.number;
         }
         
         localStorage.setItem('shoppingBasket', JSON.stringify(shoppingBasket));
       }
    });
    
    return result;
  }

  handleData(controller) {
    const data = JSON.parse(localStorage.getItem('data')),
          shoppingBasket = JSON.parse(localStorage.getItem('shoppingBasket')),
          history = JSON.parse(localStorage.getItem('history')),
          order = {},
          date = new Date();

    order.date = date.toLocaleDateString();
    order.name = document.querySelector('.first_name').value;
    order.lastName = document.querySelector('.last_name').value;
    order.email = document.querySelector('.email').value;
    order.items = [];

    for (const key in shoppingBasket) {
      if (shoppingBasket.hasOwnProperty(key)) {
        order.items.push({
          pic: shoppingBasket[key].pic, 
          name: shoppingBasket[key].name, 
          price: shoppingBasket[key].price * shoppingBasket[key].count, 
          count: shoppingBasket[key].count});

        let index = data.findIndex(element => element.id == key);
        data[index].number -= shoppingBasket[key].count;
        delete shoppingBasket[key];
      }
    }
    history.push(order);

    history.forEach(item => {
      console.log(item.date);
    });
      
    localStorage.setItem('history', JSON.stringify(history));
    controller.showView(data);
    localStorage.setItem('shoppingBasket', JSON.stringify(shoppingBasket));
    localStorage.setItem('data', JSON.stringify(data));
    
  }

  filterFromSearch(controller) {
    const data = JSON.parse(localStorage.getItem('data'));
    let searchValue = document.querySelector('#search').value,
        regexp = new RegExp(searchValue, 'gi');

    let foundPets = data.filter(item => {
      return item.name.match(regexp) !== null;
    });

    controller.showView(foundPets);
  }

  filterPets(controller, event) {
    const data = JSON.parse(localStorage.getItem('data')),
          type = event.target.innerText;
          
    let searchValue, foundPets;

    switch (type) {
      case 'DOGS':
        searchValue = 'dog'
        break;
      case 'CATS':
        searchValue = 'cat'
        break;
      case 'FISH':
        searchValue = 'fish'
        break;
      case 'BIRDS':
        searchValue = 'bird'
        break;
    }
    
    if(searchValue !== undefined) {
      foundPets = data.filter(item => {
        return item.type == searchValue;
      });
    } else {
      foundPets = data;
    }

    controller.showView(foundPets);
  }

}


