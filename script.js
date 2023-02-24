const formWrap = document.getElementById('form-wrap');
const addBtn = document.getElementById('addb');
const cancelBtn = document.getElementById('cancel');
const removeAllBtn = document.getElementById('remove-all');
const library = document.querySelector('.library');
const navbar = document.querySelector('.navbar');
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const formPages = document.getElementById('pages');
const formCheckbox = document.getElementById('checkbox');
const shownBooks = document.querySelectorAll('.book-card');

let libraryArr = [];

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

function resetForm() {
  formTitle.textContent = '';
  formAuthor.textContent = '';
  formPages.textContent = '';
  formCheckbox.checked = false;
}

function removeAll() {
  shownBooks.forEach((elem) => elem.remove());
  libraryArr = [];
}

addBtn.addEventListener('click', openForm);
cancelBtn.addEventListener('click', closeForm);
removeAllBtn.addEventListener('click', removeAll);
