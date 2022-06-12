// var modal = document.getElementsByTagName('div')[0];
const modal = document.getElementById('modal');
// var button = document.getElementsByTagName('button')[0];
const modalButton = document.getElementById('modalButton');

var open = function () {
  modal.style.visibility = 'visible';
  modal.style.marginTop = '50px';
  modal.style.opacity = '1';

  //   modalButton.style.opacity = '0';
};

modalButton.addEventListener('click', open, false);

var close = function () {
  modal.style.visibility = 'hidden';
  modal.style.marginTop = '-50px';
  modal.style.opacity = '0';
  modalButton.style.opacity = '1';
};

modal.addEventListener('click', close, false);
