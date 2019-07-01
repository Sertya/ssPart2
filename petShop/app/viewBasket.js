export default class ViewBasket {

  init(controller) {
    let checkout = document.querySelector('.shopping_basket_checkout');
    checkout.addEventListener('click', controller.checkout.bind(controller));
  }

  renderItems(controller, idWarning) {
    let data = JSON.parse(localStorage.getItem('shoppingBasket')),
        checkout = document.querySelector('.shopping_basket_checkout'),
        totalCost = 0,
        totalCount = 0;

    this.deleteItem();

    for (const key in data) {
      let flag = false;

      if(key == idWarning) {
        flag = true;
      }
      this.buildItem(data, key, flag, controller);
      totalCost += (data[key].price * data[key].count);
      totalCount += data[key].count;
    }

    this.countTotal(totalCost, totalCount);

  }

  buildItem(data, key, flag, controller) {
    let parentDiv = document.querySelector('.shopping_basket_items'),
        div = document.createElement('div');

    div.classList.add('col', 's12', 'shopping_basket_item');
    div.innerHTML = `<div class="card horizontal">
      <div class="card-image">
         <img src="${data[key].pic}">
      </div>
      <div class="card-stacked">
         <div class="card-content">
            <div class="row">
              <div class="col s12 m4">
                  <span class="card-title grey-text text-darken-4">${data[key].name}</span>
              </div>
              <div class="col s12 m2 right">
                  <span class="grey-text text-darken-4 shopping_basket_item_price">$${data[key].price * data[key].count}</span>
              </div>
            </div>
            <div class="count">
              <a class="btn-flat" href="#!">
                  <i class="material-icons remove_from_basket">remove</i>
              </a>
                <span class="shopping_basket_item_count">${data[key].count}</span>
              <a class="btn-flat add_to_basket" href="#!">
                  <i class="material-icons">add</i>
              </a>
              <span class="warning hide">only ${data[key].left} left in store!</span>
            </div>
         </div>
      </div>
    </div>`;

    if(flag === true) {
      div.querySelector('.warning').classList.remove('hide');
    }
    
    div.querySelector('.add_to_basket')
       .addEventListener('click', controller.addToBasket.bind(controller, key));
    
    div.querySelector('.remove_from_basket')
       .addEventListener('click', controller.removeFromBasket.bind(controller, key));

    parentDiv.appendChild(div);

  }

  // showWarning(id) {
  //   document.querySelector('.warning').innerText = `!!!!!`;
  // }

  countTotal(totalCost, totalCount) {
    let totalCostDiv = document.querySelector('.shopping_basket_item_total'),
        totalCountSpan = document.querySelector('.shopping_basket_count');

    totalCostDiv.innerHTML = `<span class="right grey-text text-darken-4">Total: $${totalCost}</span>`;
    totalCountSpan.innerText = `(${totalCount})`;
  }

  clearCountTotal() {
    let totalCountSpan = document.querySelector('.shopping_basket_count');
    totalCountSpan.innerText = `(0)`;
  }

  deleteItem() {
    const items = document.querySelector('.shopping_basket_items');
    while(items.hasChildNodes()){
      items.removeChild(items.firstChild);
    }
  }


}