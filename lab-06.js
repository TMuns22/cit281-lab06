class Book {
  constructor(given_title, author, pubDate, isbn) {
    this.title = given_title;
    this.author = author;
    this.pubDate = pubDate;
    this.isbn = isbn;
  }
}

class Library {
  constructor(name) {
    this._name = name;
    this._books = [];
  }
  get books() {
    // Return copy of books
    return JSON.parse(JSON.stringify(this._books));
  }
  get count() {
    return this._books.length;
  }
  addBook(book = {}) {
    const { title = "", author = "", pubDate = "", isbn = "" } = book;
    if (title.length > 0 && author.length > 0) {
      const newBook = { title, author, pubDate, isbn};
      this._books.push(newBook);
    }
  }
  listBooks() {
    for (const book of this._books) {
      const { title, author, pubDate, isbn } = book;
      console.log(
        `Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`
      );
    }
  }

  deleteBook(isbn) {
      let index = 0;
      let indexToSplice = null;
    for (const book of this._books) {
      if (isbn === book.isbn) {
          console.log("Found Book", book, "Index in _books:", index);
        indexToSplice = index;
        break;
      }
      index += 1;
    }
    this._books.splice(indexToSplice)
  }
}

const uoLibrary = new Library("Knight");

const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "1234526");
const book2 = new Book("The joy of programming", "Unknown", "2020", "7545636");
const book3 = new Book("The joy of the Stanky Leg", "Troy Munson", "2021", "0987654321");

uoLibrary.addBook(atomicHabits);
uoLibrary.addBook(book2);
uoLibrary.addBook(book3);

uoLibrary.listBooks();
uoLibrary.deleteBook("0987654321");
console.log("DELETED A BOOK! All books now in library are:");
uoLibrary.listBooks();
