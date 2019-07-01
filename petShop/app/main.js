import Storage from './storage.js';

document.addEventListener('DOMContentLoaded', Storage.init);

document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
  const elems = document.querySelectorAll('.modal');
  const instance = M.Modal.init(elems);
});