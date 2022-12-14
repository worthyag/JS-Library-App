let myLibrary = [
    {
        title: "Harry Potter",
        author: "JK",
        pages: 1099,
        read: true
    }, 
    {
        title: "The Twits",
        author: "Roald Dahl",
        pages: 256,
        read: false
    }, 
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        pages: 208,
        read: true
    },
    {
        title: "Harry Potter",
        author: "JK",
        pages: 1099,
        read: true
    }, 
    {
        title: "The Twits",
        author: "Roald Dahl",
        pages: 256,
        read: false
    }, 
    {
        title: "Harry Potter",
        author: "JK",
        pages: 1099,
        read: true
    }, 
    {
        title: "The Twits",
        author: "Roald Dahl",
        pages: 256,
        read: false
    }, 
    {
        title: "Harry Potter",
        author: "JK",
        pages: 1099,
        read: true
    }, 
    {
        title: "The Twits",
        author: "Roald Dahl",
        pages: 256,
        read: false
    }, 
    {
        title: "Harry Potter",
        author: "JK",
        pages: 1099,
        read: true
    }, 
    {
        title: "The Twits",
        author: "Roald Dahl",
        pages: 256,
        read: false
    },
    {
        title: "Harry Potter",
        author: "JK",
        pages: 1099,
        read: true
    }, 
    {
        title: "The Twits",
        author: "Roald Dahl",
        pages: 256,
        read: false
    }, 
    {
        title: "Harry Potter",
        author: "JK",
        pages: 1099,
        read: true
    }, 
    {
        title: "The Twits",
        author: "Roald Dahl",
        pages: 256,
        read: false
    }, 
    {
        title: "Harry Potter",
        author: "JK",
        pages: 1099,
        read: true
    }, 
    {
        title: "The Twits",
        author: "Roald Dahl",
        pages: 256,
        read: false
    }, 
    {
        title: "Harry Potter",
        author: "JK",
        pages: 1099,
        read: true
    }, 
    {
        title: "The Twits",
        author: "Roald Dahl",
        pages: 256,
        read: false
    }, 
    {
        title: "Harry Potter",
        author: "JK",
        pages: 1099,
        read: true
    }, 
    {
        title: "The Twits",
        author: "Roald Dahl",
        pages: 256,
        read: false
    }, 
    {
        title: "Harry Potter",
        author: "JK",
        pages: 1099,
        read: true
    }, 
    {
        title: "The Twits",
        author: "Roald Dahl",
        pages: 256,
        read: false
    }, 
    {
        title: "Harry Potter",
        author: "JK",
        pages: 1099,
        read: true
    }, 
    {
        title: "The Twits",
        author: "Roald Dahl",
        pages: 256,
        read: false
    }, 
];

// Book Constructor
function Book(title, author, pages, read) {
    // Properties
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // Methods
    this.readMsg = function() {
        return (this.read) ? "read" : "not read yet";
    }

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readMsg()}.`;
    }
}

// Add books to library
function addBookToLibrary() {
    const title = window.prompt("What is the title of the book?", "unknown");
    const author = window.prompt("Who is the author of the book?", "unknown");
    const pages = window.prompt("How many pages is the book?", "0");
    let read = window.prompt("Have you read the book?", "no");

    read = (read === "yes") ? true : false;

    const book = new Book(title, author, parseInt(pages), read);
    myLibrary.push(book);
}

// Temp styling
const container = document.querySelector(".container");
container.classList.add("show-books");

// Display Books
function displayBooks() {
    for (let book of myLibrary) {
        let types = ["title", "author", "pages", "read"];

        i = 0;
        const div = document.createElement("div");

        for (let prop in book) {
            const group = document.createElement("div");
            const h4 = document.createElement("h4");
            const p = document.createElement("p");

            h4.textContent = `${String(prop)[0].toUpperCase() + String(prop).substring(1)}`;
            p.textContent = `${String(book[types[i]])}`;
            group.appendChild(h4);
            group.appendChild(p);
            group.classList.add("group");
            div.appendChild(group);
            i++;
        }

        div.classList.add("book-box");

        const btn = document.createElement("button");
        btn.textContent = "DELETE";
        btn.classList.add('btn', 'delete')
        div.appendChild(btn);

        container.appendChild(div);
    }
}

const deleteBtn = document.querySelector("delete");
if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
        console.log("Clicked the delete btn.");
    })
}

displayBooks();

// Display books
const viewBooks = document.querySelector("#view-books");

viewBooks.addEventListener('click', () => {
    container.classList.toggle("show-books");
});


// Display form
const newBook = document.querySelector("#add-book");

newBook.addEventListener('click', () => {
    const form = document.querySelector("#form-container");
    // form.classList.toggle("show-form");
    form.classList.toggle("active");
});




// function showForm() {
//     const form = document.querySelector(".book-form");
//     form.classList.toggle("show-form");
// }



// addBookToLibrary("Harry Potter", "JK", 1090, true);
// console.log(myLibrary);
// console.log(myLibrary[0].info());

// addBookToLibrary();
console.log(myLibrary);
// console.log(myLibrary[0].info());