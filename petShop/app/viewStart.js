export default class ViewStart {

  showPic(controller) {

    document.body.classList.add('start_img');

    document.querySelector('.input-field').classList.add('hide');
    document.querySelector('.shopping_basket').classList.add('hide');
    document.querySelector('.history').classList.add('hide');

    let button = document.createElement('a');

    button.classList.add('right', 'btn', 'white', 'black-text','sign_in');
    button.innerText = 'Sign in';
    button.addEventListener('click', controller.signIn.bind(controller));
    document.querySelector('.nav-wrapper.white').appendChild(button);
  }
}