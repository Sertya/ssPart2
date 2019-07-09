export default class History {

  render(controller) {
    const history = JSON.parse(localStorage.getItem('history'));

    document.querySelector('.modal').innerHTML = `<div class="modal-content">
       <i class="small material-icons right modal-close">close</i>
       <h4 class="center">History</h4>
       <div class="history_list">
       </div>
       </div>
       <div class="center history_close">
         <a href="#!" class="modal-close waves-effect waves-light btn">close</a>
       </div>`;

    history.forEach(element => {
      this.buildItem(element);
    });
  }

  buildItem(order) {
    const parentDiv = document.querySelector('.history_list'),
          divDate = document.createElement('div');

    divDate.classList.add('col', 's12');

    divDate.innerHTML = `
      <div class="date">
        <span class="grey-text text-darken-4">${order.date}</span>
        <span class="grey-text text-darken-4">${order.name} ${order.lastName}</span>
        <span class="grey-text text-darken-4">${order.email}</span>
      </div>`;

    parentDiv.appendChild(divDate);

    order.items.forEach(item => {

      if(item.count !== 0) {
        
        let divChild = document.createElement('div');

        divChild.innerHTML = `
          <div class="card horizontal order_items">
          
             <div class="card-image">
               <img src="${item.pic}">
             </div>
             <div class="card-stacked">
               <div class="card-content">
                <div class="row">
                  <div class="col s12 m4">
                      <span class="card-title grey-text text-darken-4">${item.name}</span>
                  </div>
                  <div class="col s12 m2">
                      <span class="grey-text text-darken-4 history_count">${item.count}</span>
                  </div>
                  <div class="col s12 m2 right">
                      <span class="grey-text text-darken-4 history_price">$${item.price * item.count}</span>
                  </div>
                </div>
               </div>
             </div>
            </div>`;
    
        document.querySelector('.history_list').appendChild(divChild);
      }
    });
  }
}






