// Book Constructor Function
//Part 1

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.available = true; // Default: available
}

// Adding methods to Book prototype
Book.prototype.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
};

Book.prototype.toggleAvailability = function() {
    this.available = !this.available;
};




// Part 2

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
        } else {
            throw new Error("Book not found in the library.");
        }
    }

    listBooks() {
        return this.books.map(book => book.getSummary());
    }
}





//Part 3

function SpecialEditionBook(title, author, year, edition) {
    Book.call(this, title, author, year);
    this.edition = edition;
}

// Inherit from Book prototype
SpecialEditionBook.prototype = Object.create(Book.prototype);
SpecialEditionBook.prototype.constructor = SpecialEditionBook;

// Add a method to SpecialEditionBook
SpecialEditionBook.prototype.getEdition = function() {
    return `${this.title} - ${this.edition} Edition`;
};





//Part 4

const library = new Library();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new SpecialEditionBook("1984", "George Orwell", 1949, "Deluxe");

library.addBook(book1);
library.addBook(book2);

console.log(library.listBooks());

book1.toggleAvailability(); 
console.log(book1.available);







//Part 5

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
        } else {
            throw new Error("Book not found in the library.");
        }
    }

    listBooks() {
        return this.books.map(book => book.getSummary());
    }

    // 1. Check out a book (mark as unavailable)
    checkOutBook(title) {
        const book = this.books.find(book => book.title === title);
        if (book) {
            if (!book.available) {
                throw new Error("Book is already checked out.");
            }
            book.toggleAvailability();
        } else {
            throw new Error("Book not found.");
        }
    }

    // 2. Return a book (mark as available)
    returnBook(title) {
        const book = this.books.find(book => book.title === title);
        if (book) {
            if (book.available) {
                throw new Error("Book is already available.");
            }
            book.toggleAvailability();
        } else {
            throw new Error("Book not found.");
        }
    }

    // 3. Get all books by a specific author
    getBooksByAuthor(author) {
        return this.books.filter(book => book.author === author).map(book => book.getSummary());
    }
}

// 4. Implement an `ElectronicBook` subclass
function ElectronicBook(title, author, year, fileSize, format) {
    Book.call(this, title, author, year);
    this.fileSize = fileSize;
    this.format = format;
}

// Inherit from Book prototype
ElectronicBook.prototype = Object.create(Book.prototype);
ElectronicBook.prototype.constructor = ElectronicBook;

// Add a method for ElectronicBook
ElectronicBook.prototype.getFileDetails = function() {
    return `${this.title} - ${this.format} format, ${this.fileSize}MB`;
};

// Example Usage
const library2 = new Library();
const ebook = new ElectronicBook("Digital Fortress", "Dan Brown", 1998, 5, "PDF");

library2.addBook(ebook);
console.log(library2.listBooks());
console.log(ebook.getFileDetails());

library2.checkOutBook("Digital Fortress");
console.log(ebook.available);
