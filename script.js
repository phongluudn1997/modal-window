'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnShow = document.querySelectorAll('.show-modal');

function showModal() {
  console.log('click');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnShow.forEach(btn => {
  btn.addEventListener('click', showModal);
});

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
