export default class BuildCard {
  constructor() {
  }

  static buildElement(positionOfGoods) {
    const rowCards = document.querySelector('.col.s10');
    let parentDiv = document.createElement('div'),
        res = '';

    for (const key in positionOfGoods) {
        res += `<p>${key}: ${positionOfGoods[key]}</p>`;
    }

    positionOfGoods.link = parentDiv;

    parentDiv.classList.add('col', 's12', 'm4');
    parentDiv.innerHTML = `  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${positionOfGoods.pic}">
    </div>
    <div class="card-content">
  <span class="card-title activator grey-text text-darken-4">${positionOfGoods.name}<i class="material-icons right">more_vert</i></span>
      <p>$${positionOfGoods.price}</p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      ${res}
    </div>
  </div>`;

    rowCards.appendChild(parentDiv);
  }
}