const formWrap = document.getElementById('form-wrap');
const addBtn = document.getElementById('addb');
const cancelBtn = document.getElementById('cancel');
const library = document.querySelector('.library');
const navbar = document.querySelector('.navbar');

function openForm() {
  formWrap.style.display = 'flex';
  library.style.opacity = '0.4';
  navbar.style.opacity = '0.4';
}

function closeForm() {
  formWrap.style.display = 'none';
  library.style.opacity = '1';
  navbar.style.opacity = '1';
}

addBtn.addEventListener('click', openForm);
cancelBtn.addEventListener('click', closeForm);
