// Book Class: Represents a Book
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

let bookOne = new Book();
// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method
console.log(bookOne);

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
             title: "Book One",
             author: "John Doe",
             pages: "304"
            },
            {
             title: "Book Two",
             author: "John Doe",
             pages: "303"
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
        // method adds book to list
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        // creates table rows
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);