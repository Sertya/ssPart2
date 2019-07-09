export default class ViewAnimal {

  init(controller) {
    
    document.querySelector('.input-field')
            .addEventListener('input', controller.searchPets.bind(controller));

    let section = document.querySelector('.for_views');

    section.innerHTML = `<div class="row">
        <div class="col s2">
          <ul class="categories">
            <li class="category">ALL</li>
            <li class="category">DOGS</li>
            <li class="category">CATS</li>
            <li class="category">FISH</li>
            <li class="category">BIRDS</li>
          </ul>
        </div>
        <div class="col s10 to_show_animals">
          <!-- Teal page content  -->
        </div> 
      </div>`;
     
    document.body.classList.remove('start_img')
    document.querySelector('.input-field').classList.remove('hide');
    document.querySelector('.shopping_basket').classList.remove('hide');
    document.querySelector('.history').classList.remove('hide');
    document.querySelector('.sign_in').classList.add('hide');
    
    document.querySelector('.categories').addEventListener('click', controller.selectPets.bind(controller));
    document.querySelector('.shopping_basket').addEventListener('click', controller.openBasket.bind(controller));
    document.querySelector('.history').addEventListener('click', controller.openHistory.bind(controller));

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

  showFilter(element, type) {
    // TO DO
  }
}
