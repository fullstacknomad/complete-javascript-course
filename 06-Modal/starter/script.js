'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
function closePopUp() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
for (let eachModal of btnOpenModal) {
  eachModal.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  btnCloseModal.addEventListener('click', closePopUp);
  overlay.addEventListener('click', closePopUp);
}
document.addEventListener('keydown', function (event) {
  /* it works//
  if (event.key == 'Escape') {
    closePopUp();
  } */
  if (event.key == 'Escape' && !modal.classList.contains('hidden')) {
    closePopUp();
  }
});
