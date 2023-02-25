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
const submitBtn = document.getElementById('submit-btn');

let libraryArr = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.addBook = function () {
  libraryArr.push(this);
};

Book.prototype.removeBook = function () {
  libraryArr.splice(libraryArr.indexOf(this), 1);
};

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
  formTitle.value = '';
  formAuthor.value = '';
  formPages.value = '';
  formCheckbox.checked = false;
}

function addBook(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  book.addBook();
}

function updateLibrary() {
  while (library.firstChild) {
    library.removeChild(library.lastChild);
  }
  for (let i = 0; i < libraryArr.length; i += 1) {
    const bookCard = document.createElement('div');
    bookCard.setAttribute('class', 'book-card');
    const bookInfo = document.createElement('div');
    bookInfo.setAttribute('class', 'book-info');

    const bookTitle = document.createElement('p');
    bookTitle.textContent = libraryArr[i].title;
    const bookAuthor = document.createElement('h2');
    bookAuthor.textContent = libraryArr[i].author;
    const bookPages = document.createElement('h2');
    bookPages.textContent = libraryArr[i].pages;

    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);
    bookInfo.appendChild(bookPages);

    const bookButtons = document.createElement('div');
    bookButtons.setAttribute('class', 'book-buttons');

    const buttonRead = document.createElement('button');
    buttonRead.setAttribute('id', 'btn-read');
    buttonRead.textContent = 'Read';

    if (libraryArr[i].read === true) {
      buttonRead.classList.add('read-btn');
    } else if (libraryArr[i].read === false) {
      buttonRead.classList.add('read-btn');
      buttonRead.classList.add('no');
    }

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete-btn');
    buttonDelete.textContent = 'Delete';

    bookButtons.appendChild(buttonRead);
    bookButtons.appendChild(buttonDelete);

    bookCard.appendChild(bookInfo);
    bookCard.appendChild(bookButtons);
    library.appendChild(bookCard);
  }
}

function removeAll() {
  libraryArr = [];
  updateLibrary();
}

function validateForm(event) {
  event.preventDefault();
  const title = formTitle.value;
  const author = formAuthor.value;
  const pages = formPages.value;
  if (formCheckbox.checked) {
    addBook(title, author, pages, true);
  } else {
    addBook(title, author, pages, false);
  }
  resetForm();
  updateLibrary();
}

addBtn.addEventListener('click', openForm);
cancelBtn.addEventListener('click', closeForm);
removeAllBtn.addEventListener('click', removeAll);
submitBtn.addEventListener('click', validateForm);
