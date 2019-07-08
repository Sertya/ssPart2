import Storage from './storage.js';

document.addEventListener('DOMContentLoaded', function() {
  Storage.init();
  M.AutoInit();
  const elems = document.querySelectorAll('.modal');
  const instances = M.Modal.init(elems);
});