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
