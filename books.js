function Books(title, author, pages, read) {
    // Properties
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read

    // Methods
    this.readMsg = () => {
        return (this.read) ? "read" : "not read yet"
    }

    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readMsg()}.`;
    }
}

const narnia = new Books("Narnia", "Miss Never", 278, false);
console.log(narnia.info());