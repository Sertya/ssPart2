export default class ViewAnimal {

  init(controller) {
    document.querySelector('.shopping_basket')
            .addEventListener('click', controller.openBasket.bind(controller));
  }

  render(data, controller){
    this.deleteItems();
    data.forEach((element)=>{
        this.buildCard(element, controller);
    }); 
  }

  buildCard(element, controller) {
    const rowCards = document.querySelector('.to_show_animals');
    let parentDiv = document.createElement('div'),
        res = '';

    for (const key in element) {
      if(key == 'id' || key == 'name' ||
         key == 'type' || key == 'pic' ||
         key == 'number') {
           continue;
         }

      res += `<p>${key}: ${element[key]}</p>`;
    }

    parentDiv.classList.add('col', 's12', 'm3');
    parentDiv.innerHTML = `<div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="${element.pic}">
          <i class="small material-icons favorite">favorite_border</i>
        </div>
        <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${element.name}</span>
          <p>Price: $${element.price}</p>
          <a class="waves-effect waves-light btn shopping_basket modal-trigger" href="#modal1"><i class="material-icons ">shopping_basket</i></a>
          
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            <i class="material-icons right">close</i>${element.name}
          </span>
          ${res}
        </div>
    </div>`;

    if(element.number == 0) {
      parentDiv.classList.add('hide');
    }

     parentDiv.querySelector('.shopping_basket')
              .addEventListener('click', controller.addToBasket.bind(controller, element.id));

    rowCards.appendChild(parentDiv);
  }

  deleteItems() {
    const items = document.querySelector('.to_show_animals');
    while(items.hasChildNodes()){
      items.removeChild(items.firstChild);
    }
  }
}



//<i class="small material-icons shopping_basket">shopping_basket</i>

//<a class="waves-effect waves-teal btn-flat>button</a>