class Book {
  books = [];

  constructor(title, author) {
    const randomId = Math.floor(Math.random() * 100000);
    this.id = randomId;
    this.title = title;
    this.author = author;
  }

  storeBookLocally = (bookArray) => {     // eslint-disable-line
    window.localStorage.setItem('bookArray', JSON.stringify(bookArray));
  }

  displayItems = () => {
    const items = document.querySelector('.book-item-wrapper');
    const h1 = document.createElement('h1');
    h1.textContent = 'All awesome books';
    items.replaceChildren(h1);

    const storedData = JSON.parse(localStorage.getItem('bookArray'));
    if (storedData) {
      this.books = storedData;
      this.books.forEach((item) => {
        const articleContainer = document.createElement('article');
        articleContainer.classList.add('book-item');
        const div = document.createElement('div');
        div.classList.add('item-container');
        const span = document.createElement('span');
        span.textContent = 'by';
        const titleParagraph = document.createElement('p');
        titleParagraph.textContent = `"${item.title}"`;
        const authorParagraph = document.createElement('p');
        authorParagraph.textContent = item.author;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = 'Remove';

        removeBtn.addEventListener('click', () => {
          this.removeBook(item.id);
        });

        div.appendChild(titleParagraph);
        div.appendChild(span);
        div.appendChild(authorParagraph);
        articleContainer.appendChild(div);
        articleContainer.appendChild(removeBtn);

        items.appendChild(articleContainer);
      });
    }
  }

  addBook = () => {
    const storedBooks = JSON.parse(localStorage.getItem('bookArray')) || [];
    this.books = [
      ...storedBooks,
      { id: this.id, title: this.title, author: this.author },
    ];
    this.storeBookLocally(this.books);
    this.displayItems();
  }

  removeBook = (id) => {
    this.books = this.books.filter((book) => book.id !== id);
    this.storeBookLocally(this.books);
    this.displayItems();
  }
}

export default Book;
