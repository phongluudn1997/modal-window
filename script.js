'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnShow = document.querySelectorAll('.show-modal');
const ESC_KEY_CODE = 27;

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function closeModalOnEsc(e) {
  if (e.keyCode === ESC_KEY_CODE && !modal.classList.contains('hidden'))
    closeModal();
}

btnShow.forEach(btn => {
  btn.addEventListener('click', showModal);
});

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModalOnEsc);
