// All query selectors required
let container = document.querySelector('.container');
let addBook = document.querySelector('#addBook');
let form = document.querySelector('.bookForm');
let submitBtn = document.querySelector('#bSubmit');
let bookCards = document.querySelector('.bookCards');

// Variables for creating html elements & holding dom values 
let bookName;
let bookAuthor;
let bookPages;
let bookRead;
let bookCard;
let deleteCard;
let changeStatus;
let pExitBtn;
let pPara;
let popup;
let itemId = []; // Holds the index of each and every book made in this for deleting

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

    book.prototype.hasRead = function(read) {
      if(this.read == "read") {
        this.read = "Read";
      } else if(this.read == "notRead") {
        this.read = "Not Read";
      }
    };
}

// Handles all logic for adding new book
function addBookToLibrary() {
  popup = document.createElement('div');
  // check for if all details have been filled out
  if(bookName == "" || bookAuthor == "" || bookPages == ""){
    popup.classList.add('warning');
    pPara = document.createElement('p');
    pPara.textContent = "Enter all details";
    pPara.classList.add('warningBox');
    pExitBtn = document.createElement('button');
    pExitBtn.textContent = "X";
    pExitBtn.classList.add('exitBtn');
    popup.appendChild(pExitBtn);
    popup.appendChild(pPara);
    container.appendChild(popup);
    //event listener to make warning disappear
    pExitBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  } else {
    newBook = new book(bookName, bookAuthor, bookPages, bookRead);
    newBook.hasRead();
    itemId.push(myLibrary.push(newBook)-1); // pushes the new book into the library array and also the index to the itemId array
    clearArea(); // clears the card div
    render();
    form.reset(); // Clears the form after everything is executed
  }
}

function render() {
  // Better way to do this might be to only print the last element of the array each time
    for(let i = 0; i < myLibrary.length; i++){
      // Logic for creating the card
      bookCard = document.createElement('div');
      bookCard.classList.add('bookCard');
      let newL = document.createElement('p');
      newL.textContent = "Title:";
      newL.classList.add('bookDesc');
      let p1 = document.createElement('p');
      p1.textContent = myLibrary[i].title;
      let newL2 = document.createElement('p');
      newL2.textContent = "Author:";
      newL2.classList.add('bookDesc');
      let p2 = document.createElement('p');
      p2.textContent = myLibrary[i].author;
      let newL3 = document.createElement('p');
      newL3.textContent = "Pages:";
      newL3.classList.add('bookDesc');
      let p3 = document.createElement('p');
      p3.textContent = myLibrary[i].pages;
      let newL4 = document.createElement('p');
      newL4.textContent = "Status:";
      newL4.classList.add('bookDesc');
      let p4 = document.createElement('p');
      p4.textContent = myLibrary[i].read;
      deleteCard = document.createElement('button');
      deleteCard.textContent = "Delete!";
      changeStatus = document.createElement('button');
      changeStatus.textContent = "Status";
      bookCard.appendChild(newL);
      bookCard.appendChild(p1);
      bookCard.appendChild(newL2);
      bookCard.appendChild(p2);
      bookCard.appendChild(newL3);
      bookCard.appendChild(p3);
      bookCard.appendChild(newL4);
      bookCard.appendChild(p4);
      bookCard.appendChild(changeStatus);
      bookCard.appendChild(deleteCard);
      bookCards.appendChild(bookCard);

      // Card deleting function
      deleteCard.addEventListener('click', () => {
        let index = itemId[i];  // Sets the index to the position of whatever btn is pressed in the array
        myLibrary.splice(index, 1); // Removes element from array
        clearArea();
        render();
      });

      // Toggles read status on press
      changeStatus.addEventListener('click', () => {
        if(myLibrary[i].read == "Read") {
          myLibrary[i].read = "Not Read";
          clearArea();
          render();
        } else {
          myLibrary[i].read = "Read";
          clearArea();
          render();
        }

      });
    }
}

// Submit button - Takes all the values in the form and calls the createbook function with them
submitBtn.addEventListener('click', () => {
  bookName = document.getElementById("bName").value;
  bookAuthor = document.getElementById("aName").value;
  bookPages = document.getElementById("bPages").value;
  bookRead = document.getElementById("bRead").value;
  addBookToLibrary(); 
  form.style.display = "none";
});

// Pops up the form when pressed
addBook.addEventListener('click', () => {
  form.style.display = "flex";
  form.style.position = "absolute";
});

function clearArea() {
  bookCards.innerHTML="";
}

testBook = new book("Dune", "herbert", 185, "read");
testBook.hasRead();
itemId.push(myLibrary.push(testBook) -1);
testBook2 = new book("The Shining", "Stephen King", 900, "notRead");
testBook2.hasRead();
itemId.push(myLibrary.push(testBook2) -1);
render();