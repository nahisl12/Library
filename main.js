// All query selectors required
let container = document.querySelector('.container');
let addBook = document.querySelector('#addBook');
let form = document.querySelector('.bookForm');
let submitBtn = document.querySelector('#bSubmit');
let bookName;
let bookAuthor;
let bookPages;
let bookRead;
// form.style.display = "none";

// Logic for adding/creating/deleting book etc
let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    book.prototype.sayName = function() {
        return this.title;
    };  
}

function addBookToLibrary() {
  const popup = document.createElement('div');
  if(bookName == "" || bookAuthor == "" || bookPages == ""){
    console.log("enter all details");
    popup.classList.add('warning');
    popup.textContent = "Enter all details";
    container.appendChild(popup);
  } else {
    newBook = new book(bookName, bookAuthor, bookPages, bookRead);
    myLibrary.push(newBook);;
  }
}

function render() {
    for(let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i]);
        const bookCard = document.createElement('div');
        bookCard.classList.add('bookCard');
        p1 = document.createElement('p');
        p1.textContent = myLibrary[i].title;
        p2 = document.createElement('p');
        p2.textContent = myLibrary[i].author;
        p3 = document.createElement('p');
        p3.textContent = myLibrary[i].pages;
        bookCard.appendChild(p1);
        bookCard.appendChild(p2);
        bookCard.appendChild(p3);
        container.appendChild(bookCard);
    }
}

// Submit button
submitBtn.addEventListener('click', () => {
    bookName = document.getElementById("bName").value;
    bookAuthor = document.getElementById("aName").value;
    bookPages = document.getElementById("bPages").value;
    bookRead = document.getElementById("bRead").value;
    addBookToLibrary(); 
});

testBook = new book("dune", "herbert", 185, true);
myLibrary.push(testBook);
render();