export default class ViewAnimal {

  render(data){
    data.forEach((el)=>{
        this.buildCard(el);
    });
  }

  buildCard(positionOfGoods) {
    const rowCards = document.querySelector('.col.s10');
    let parentDiv = document.createElement('div'),
        res = '';

    for (const key in positionOfGoods) {
      if(key != 'id' && key != 'name' &&
         key != 'type' && key != 'pic')
        res += `<p>${key}: ${positionOfGoods[key]}</p>`;
    }

    positionOfGoods.link = parentDiv;

    parentDiv.classList.add('col', 's12', 'm3');
    parentDiv.innerHTML = `  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${positionOfGoods.pic}">
    </div>
    <div class="card-content">
  <span class="card-title activator grey-text text-darken-4">${positionOfGoods.name}</span>
      <p>Price: $${positionOfGoods.price}</p>
      <i class="small material-icons favorite">favorite_border</i>
      <i class="small material-icons">shopping_basket</i>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i>${positionOfGoods.name}</span>
      ${res}
    </div>
  </div>`;

    rowCards.appendChild(parentDiv);
  }
}
