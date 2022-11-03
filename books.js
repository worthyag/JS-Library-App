// Empty library
let myLibrary = [];

// Book Constructor
function Book(Title, Author, Pages, Read) {
    // Properties
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;

    // Methods
    // this.readMsg = function() {
    //     return (this.Read) ? "read" : "not read yet";
    // }

    // this.info = function() {
    //     return `${this.Title} by ${this.Author}, ${this.Pages} pages, ${this.readMsg()}.`;
    // }
}


// Add book to Library function
function addBookToLibrary(Title, Author, Pages, Read) {
    const book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
    toggleDisplayBooks();
    // displayBooks();
}


// Display books in the library array
const books = document.querySelector(".books");
books.classList.add("hidden");

function displayBooks() {
    // Clear card container first
    const clearBooks = document.querySelectorAll(".card");
    for (card of clearBooks) {
        card.remove();
    }

    // Checks whether the array is empty
    if (myLibrary.length === 0) {
        console.log("Library empty.");

        const emptyMsg = document.createElement('div');
        emptyMsg.textContent = "You currently have no books in Library. 🧐";
        emptyMsg.classList.add('error');

        books.appendChild(emptyMsg);
        return;
    }
        
    else {
        // Loop throught the library array + display the cards
        myLibrary.forEach(myLibrary => {
            // Creating the cards
            const card = document.createElement("div");
            card.classList.add("card");

            // Loop through each object in the array
            for (let key in myLibrary) {
                console.log(`${key}: ${myLibrary[key]}`);

                // alternative
                // const p = document.createElement('p');
                // p.textContent = `${key}: ${myLibrary[key]}`;
                // card.appendChild(p);

                const keyGroup = document.createElement("div");
                const h4 = document.createElement("h4");
                const p = document.createElement("p");

                h4.textContent = `${key}`;
                p.textContent = `${myLibrary[key]}`;
                keyGroup.appendChild(h4); keyGroup.appendChild(p);
                keyGroup.classList.add("keyGroup");
                card.appendChild(keyGroup);
            }

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "DELETE";
            deleteBtn.classList.add('btn', 'delete')
            card.appendChild(deleteBtn);

            books.appendChild(card);
        })
    }
}


// Calling functions / Adding manually until the form is complete
addBookToLibrary("Harry Potter", "JK", 1099, true);
addBookToLibrary("The Twits", "Roald Dahl", 256, false);
addBookToLibrary("The Alchemist", "Paulo Coelho", 208, true);
addBookToLibrary("Harry Potter", "JK", 1099, true);
addBookToLibrary("The Twits", "Roald Dahl", 256, false);
addBookToLibrary("The Alchemist", "Paulo Coelho", 208, true);

console.log("My Library", myLibrary);

// displayBooks();


// Display Books Function
const viewBooks = document.querySelector("#view-books-btn");

viewBooks.addEventListener('click', toggleDisplayBooks);


// Display Form Function
const addBookBtn = document.querySelector("#add-book-btn");
const formContainer = document.querySelector("#form-container");

addBookBtn.addEventListener('click', () => {
    // form.classList.toggle("show-form");
    formContainer.classList.toggle("active");
});


// Process Data When Form Submits
const form = document.querySelector("#add-book-form");
form.addEventListener('submit', processFormData);

function processFormData(e) {
    console.log("e", e);
    const formData = new FormData(e.target);

    userData = [];

    formData.forEach((formData, key) => {
        if (key === "length")
            formData = parseInt(formData)
        else if (key === "read")
            formData = Boolean(formData)
        userData.push(formData);
        // console.log(userData); // for testing
    })

    addBookToLibrary(userData[0], userData[1], userData[2], userData[3]);
    console.log(myLibrary);

    form.reset(); // temp
    toggleForm(); // hides form

    e.preventDefault();
}


// Remove book from library functionality
const deleteBtns = document.querySelectorAll(".btn.delete");

for (btn of deleteBtns) {
    btn.addEventListener('click', () => {
        console.log("Button clicked!");
    })
}


// Helper functions
// toggle form
function toggleForm() {
    formContainer.classList.toggle("active");
}

function toggleDisplayBooks() {
    books.classList.toggle("hidden");

    if (!books.classList.contains("hidden"))
        displayBooks();
}

// // Temp styling
// const container = document.querySelector(".container");
// container.classList.add("show-books");


// Old function
// Display Books
// function displayBooksOnPage() {
//     for (let book of tempLibrary) {
//         const div = document.createElement("div");

//         for (let prop in book) {
//             const group = document.createElement("div");
//             const h4 = document.createElement("h4");
//             const p = document.createElement("p");

//             h4.textContent = `${String(prop)}`;
//             p.textContent = `${String(book[prop])}`;
//             group.appendChild(h4);
//             group.appendChild(p);
//             group.classList.add("group");
//             div.appendChild(group);
//         }

//         div.classList.add("book-box");

//         const btn = document.createElement("button");
//         btn.textContent = "DELETE";
//         btn.classList.add('btn', 'delete')
//         div.appendChild(btn);

//         container.appendChild(div);
//     }
// }

// const deleteBtn = document.querySelector("delete");
// if (deleteBtn) {
//     deleteBtn.addEventListener('click', () => {
//         console.log("Clicked the delete btn.");
//     })
// }

// displayBooksOnPage();

// Display books
// const viewBooks = document.querySelector("#view-books");

// viewBooks.addEventListener('click', () => {
//     container.classList.toggle("show-books");
// });


// Display form
// const newBook = document.querySelector("#add-book");

// newBook.addEventListener('click', () => {
//     const form = document.querySelector("#form-container");
//     // form.classList.toggle("show-form");
//     form.classList.toggle("active");
// });




// function showForm() {
//     const form = document.querySelector(".add-book-form");
//     form.classList.toggle("show-form");
// }



// // Add books to library
// function addBookToLibrary() {
//     const title = window.prompt("What is the title of the book?", "unknown");
//     const author = window.prompt("Who is the author of the book?", "unknown");
//     const pages = window.prompt("How many pages is the book?", "0");
//     let read = window.prompt("Have you read the book?", "no");

//     read = (read === "yes") ? true : false;

//     const book = new Book(title, author, parseInt(pages), read);
//     myLibrary.push(book);
// }