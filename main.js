// All query selectors required
let container = document.querySelector('.container');
let addBook = document.querySelector('#addBook');
let form = document.querySelector('.bookForm');
let submitBtn = document.querySelector('#bSubmit');
let bookCards = document.querySelector('.bookCards');
let bookName;
let bookAuthor;
let bookPages;
let bookRead;
let bookCard;
let deleteCard;
let pExitBtn;
let pPara;
let popup;

form.style.display = "none";

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

// Handles all logic for adding new book
function addBookToLibrary() {
  popup = document.createElement('div');
  // check for if all details have been filled out
  if(bookName == "" || bookAuthor == "" || bookPages == ""){
    console.log("enter all details");
    popup.classList.add('warning');
    pPara = document.createElement('p')
    pPara.textContent = "Enter all details";
    pExitBtn = document.createElement('button');
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
    myLibrary.push(newBook); // pushes the new book into array
    bookCards.innerHTML=""; // clears the card div
    render();
    form.reset(); // Clears the form after everything is executed
  }
}

function render() {
  // Better way to do this might be to only print the last element of the array each time
    for(let i = 0; i < myLibrary.length; i++){
      console.log(myLibrary[i]);

      bookCard = document.createElement('div');
      bookCard.classList.add('bookCard');
      let p1 = document.createElement('p');
      p1.textContent = myLibrary[i].title;
      let p2 = document.createElement('p');
      p2.textContent = myLibrary[i].author;
      let p3 = document.createElement('p');
      p3.textContent = myLibrary[i].pages;
      deleteCard = document.createElement('button');
      deleteCard.textContent = "Delete!";
      bookCard.appendChild(p1);
      bookCard.appendChild(p2);
      bookCard.appendChild(p3);
      bookCards.appendChild(bookCard);
      bookCards.appendChild(deleteCard);

      // Card deleting function
      deleteCard.addEventListener('click', () => {
        console.log("Working");
        // let position = myLibrary.findIndex(obj => obj.title == title);
        let pos = myLibrary.findIndex(i);
        myLibrary.splice(pos, 1);
      });
    }
}

// Draws the new book details to the screen
function card(t, a, p)
{
  this.t = t;
  this.a = a;
  this.p = p;
}

// Submit button
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
  form.style.display = "block";
});

testBook = new book("dune", "herbert", 185, true);
myLibrary.push(testBook);
testBook2 = new book("The Shining", "King", 900, true);
myLibrary.push(testBook2);
render();