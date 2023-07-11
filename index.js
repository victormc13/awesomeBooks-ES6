import Book from './modules/book.js';

const addBtn = document.getElementById('add-btn');
const titleField = document.getElementById('title');
const authorField = document.getElementById('author');

addBtn.addEventListener('click', () => {
  const title = titleField.value;
  const author = authorField.value;
  if (title && author) {
    const newBook = new Book(title, author);
    newBook.addBook();
    titleField.value = '';
    authorField.value = '';
  }
});

window.addEventListener('load', () => {
  new Book().displayItems();
});