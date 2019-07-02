export default class ViewStart {

  showPic(controller) {
    
    let section = document.querySelector('.for_views');

    section.innerHTML = `<img src="./img/pets.png" alt="">`;

    document.querySelector('.input-field').classList.add('hide');
    document.querySelector('.shopping_basket.modal-trigger').classList.add('hide');
    let button = document.createElement('a');

    button.classList.add('right', 'btn', 'white', 'black-text','sign_in');
    button.innerText = 'Sign in';
    button.addEventListener('click', controller.signIn.bind(controller));
    document.querySelector('.nav-wrapper.white').appendChild(button);
  }
}