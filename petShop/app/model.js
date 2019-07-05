export default class ModelAnimal {

  loadJSON(controller) {
    // let data = JSON.parse(localStorage.getItem('data'));
    // fetch('./data/petBase.json')
    // .then( response => {
    //   if(response.ok) {
    //     return response.json();
    //   }
    //   throw new Error('Request failed');
    // })
    // .then(jsonResponse => {
    //   localStorage.setItem('data', JSON.stringify(jsonResponse));
    //   localStorage.setItem('shoppingBasket', JSON.stringify({})); // ???
    //   controller.showView(jsonResponse);
    // });
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
        localStorage.setItem('data', JSON.stringify(jsonResponse));
        localStorage.setItem('shoppingBasket', JSON.stringify({})); // ???
        controller.showView(jsonResponse);
      });
    } else {
      controller.showView(data);
    }
    
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

  handleData() {
    const data = JSON.parse(localStorage.getItem('data'));
    const shoppingBasket = JSON.parse(localStorage.getItem('shoppingBasket'));

    for (const key in shoppingBasket) {
      if (shoppingBasket.hasOwnProperty(key)) {
        let index = data.findIndex(element => element.id == key);
        data[index].number -= shoppingBasket[key].count;
        delete shoppingBasket[key];
      }
    }
    console.log(shoppingBasket);
    console.log(data);
     localStorage.setItem('shoppingBasket', JSON.stringify(shoppingBasket));
     localStorage.setItem('data', JSON.stringify(data));
  }
}


