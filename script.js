const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "read" : "not read yet"
    }`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const books = document.querySelector(".books");
  books.innerHTML = "";
  myLibrary.forEach((book) => {
    books.innerHTML += `<div class="book">
    <p class="author">${book.author}</p>
    <h2 class="title">${book.title}</h2>
    <p class="pages">${book.pages} pages</p>
    <p class="read">${book.read ? "Read" : "Not read"}</p>
    </div>`;
  });
}

function seedLibrary() {
  const books = [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      pages: 295,
      read: false,
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      pages: 1178,
      read: false,
    },
    {
      title: "The Silmarillion",
      author: "J.R.R. Tolkien",
      pages: 365,
      read: false,
    },
    {
      title: "Discworld",
      author: "Terry Pratchett",
      pages: 320,
      read: false,
    },
    {
      title: "The Colour of Magic",
      author: "Terry Pratchett",
      pages: 256,
      read: false,
    },
    {
      title: "Do Androids Dream of Electric Sheep? ",
      author: "Philip K. Dick",
      pages: 272,
      read: false,
    },
    {
      title: "The Man in the High Castle",
      author: "Philip K. Dick",
      pages: 304,
      read: false,
    },
    {
      title: "The Three-Body Problem",
      author: "Liu Cixin",
      pages: 416,
      read: false,
    },
  ];

  books.forEach((book) => {
    addBookToLibrary(new Book(book.title, book.author, book.pages, book.read));
  });
}

seedLibrary();
displayBooks();
