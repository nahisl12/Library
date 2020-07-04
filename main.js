let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.info = function() {
        return this.title + " " + this.author + " " + this.pages + " " + this.read
    };
}

function addBookToLibrary() {

}