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
