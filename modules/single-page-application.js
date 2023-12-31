const loadContent = (id) => {
  const bookList = document.querySelector('.book-item-wrapper');
  const bookCreation = document.querySelector('.addbook-section');
  const contact = document.querySelector('.contact-section');

  const listMenu = document.getElementById('list-menu');
  const addMenu = document.getElementById('add-menu');
  const contactMenu = document.getElementById('contact-menu');

  if (id === 'list-menu') {
    bookList.style.display = 'block';
    bookCreation.style.display = 'none';
    contact.style.display = 'none';
    listMenu.classList.toggle('active');
    addMenu.classList.remove('active');
    contactMenu.classList.remove('active');
  } else if (id === 'add-menu') {
    bookList.style.display = 'none';
    bookCreation.style.display = 'block';
    contact.style.display = 'none';
    listMenu.classList.remove('active');
    addMenu.classList.toggle('active');
    contactMenu.classList.remove('active');
  } else if (id === 'contact-menu') {
    bookList.style.display = 'none';
    bookCreation.style.display = 'none';
    contact.style.display = 'block';
    listMenu.classList.remove('active');
    addMenu.classList.remove('active');
    contactMenu.classList.toggle('active');
  }
};

const listMenu = document.getElementById('list-menu');
const addMenu = document.getElementById('add-menu');
const contactMenu = document.getElementById('contact-menu');

listMenu.addEventListener('click', () => {
  loadContent('list-menu');
});

addMenu.addEventListener('click', () => {
  loadContent('add-menu');
});

contactMenu.addEventListener('click', () => {
  loadContent('contact-menu');
});