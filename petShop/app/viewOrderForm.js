export default class ViewOrderForm {
  render(controller) {
    document.querySelector('.modal').innerHTML = `<div class="modal-content">
       <i class="small material-icons right modal-close">close</i>
       <h4 class="center">Checkout</h4>
       <form class="col s12 order_form">
         <div class="input-field s12">
           <input id="first_name" type="text" class="validate first_name" placeholder="First Name" recuired>
         </div>
         <div class="input-field s12">
           <input id="last_name" type="text" class="validate last_name" placeholder="Last Name">
         </div>
         <div class="input-field col s12">
           <input id="email" type="email" class="validate email" placeholder="Email">
         </div>
       </form>
       </div>
       <div class="center modal-close checkout">
         <a href="#!" class=" waves-effect waves-light btn">submit</a>
       </div>
       <div class="center checkout_close">
         <a href="#!" class="modal-close waves-effect waves-light btn-flat">close and continue shopping</a>
       </div>`;

    document.querySelector('.checkout').addEventListener('click', controller.checkout.bind(controller));
  }
}
