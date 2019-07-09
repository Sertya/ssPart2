export default class ViewBasket {

  render(controller, idWarning) {
    let data = JSON.parse(localStorage.getItem('shoppingBasket')),
        counter = 0,
        totalCost = 0,
        totalCount = 0;

    document.querySelector('.modal').innerHTML = `<div class="modal-content">
       <i class="small material-icons right modal-close">close</i>
       <h4 class="center">Shopping Basket</h4>
       <div class="shopping_basket_container">
         <div class="shopping_basket_items">
         </div>
       </div>
     </div>
     <div class="row second">
       <div class="col s12 shopping_basket_item_total">
         <!-- сюда отрендерится общая стоимость заказа -->
       </div>
     </div>
     <div class="center modal-close shopping_basket_continue modal-trigger" href="#modal1">
       <a href="#!" class=" waves-effect waves-light btn " >continue to checkout</a>
     </div>
     <div class="center shopping_basket_close">
       <a href="#!" class="modal-close waves-effect waves-light btn-flat">close and continue shopping</a>
     </div>`;

    document.querySelector('.shopping_basket_continue').addEventListener('click', controller.showOrderForm.bind(controller));

    for (const key in data) {
      let flag = false;

      if(key == idWarning) {
        flag = true;
      }

      if(data[key].count > 0) {
        this.buildItem(data, key, flag, controller);
        totalCost += (data[key].price * data[key].count);
        totalCount += data[key].count;
        counter++;
      }
    }

    const items = document.querySelector('.shopping_basket_items');

    if(!items.children.length) {
      let div = document.createElement('div');
  
      div.classList.add('is_empty');
      div.innerHTML = `<p>your basket is empty</p>`;
      items.appendChild(div);
      document.querySelector('.shopping_basket_continue').classList.add('hide');
    }
 
    if(totalCount == 1) {
      document.querySelector('.reduce').classList.add('modal-close');
    }

    if(counter == 1) {
      document.querySelector('.remove_from_basket').classList.add('modal-close');
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
                  <i class="material-icons reduce">remove</i>
              </a>
                <span class="shopping_basket_item_count">${data[key].count}</span>
              <a class="btn-flat increase" href="#!">
                  <i class="material-icons">add</i>
              </a>
              <a class="btn-flat remove_from_basket" href="#!">
                  <i class="material-icons">delete</i>
              </a>
            </div>
            <span class="warning hide">only ${data[key].left} left in store!</span>
         </div>
      </div>
    </div>`;

    if(flag === true) {
      div.querySelector('.warning').classList.remove('hide');
    }

    div.querySelector('.reduce')
       .addEventListener('click', controller.reduceInBasket.bind(controller, key));

    div.querySelector('.increase')
       .addEventListener('click', controller.addToBasket.bind(controller, key));
    
    div.querySelector('.remove_from_basket')
       .addEventListener('click', controller.removeFromBasket.bind(controller, key));

    parentDiv.appendChild(div);

  }

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
}