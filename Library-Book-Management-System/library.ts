interface Book {
    id: number;
    title: string;
    author: string;
    isBorrowed: boolean;
  }
  
  class Library {
    private books: Book[] = [];
  
    constructor() {
      // Sample books
      this.books = [
        { id: 1, title: "The Alchemist", author: "Paulo Coelho", isBorrowed: false },
        { id: 2, title: "1984", author: "George Orwell", isBorrowed: false },
        { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", isBorrowed: false }
      ];
    }
  
    borrowBook(id: number): string {
      for (let b of this.books) {
        if (b.id === id) {
          if (!b.isBorrowed) {
            b.isBorrowed = true;
            return `✅ You borrowed "${b.title}"`;
          } else {
            return `❌ "${b.title}" is already borrowed`;
          }
        }
      }
      return "❌ Book not found";
    }
  
    returnBook(id: number): string {
      for (let b of this.books) {
        if (b.id === id) {
          if (b.isBorrowed) {
            b.isBorrowed = false;
            return `✅ You returned "${b.title}"`;
          } else {
            return `❌ "${b.title}" was not borrowed`;
          }
        }
      }
      return "❌ Book not found";
    }
  
    getAvailableBooks(): Book[] {
      return this.books.filter(b => !b.isBorrowed);
    }
  
    getBorrowedBooks(): Book[] {
      return this.books.filter(b => b.isBorrowed);
    }
  }
  
  // UI Logic
  const library = new Library();
  
  function displayBooks() {
    const availableList = document.getElementById("availableBooks")!;
    const borrowedList = document.getElementById("borrowedBooks")!;
    availableList.innerHTML = "";
    borrowedList.innerHTML = "";
  
    for (let b of library.getAvailableBooks()) {
      const li = document.createElement("li");
      li.textContent = `#${b.id}: ${b.title} by ${b.author}`;
      availableList.appendChild(li);
    }
  
    for (let b of library.getBorrowedBooks()) {
      const li = document.createElement("li");
      li.textContent = `#${b.id}: ${b.title} by ${b.author}`;
      borrowedList.appendChild(li);
    }
  }
  
  function borrowBookFromInput() {
    const input = document.getElementById("borrowId") as HTMLInputElement;
    const result = document.getElementById("borrowResult")!;
    const id = parseInt(input.value);
    result.textContent = library.borrowBook(id);
    displayBooks();
  }
  
  function returnBookFromInput() {
    const input = document.getElementById("returnId") as HTMLInputElement;
    const result = document.getElementById("returnResult")!;
    const id = parseInt(input.value);
    result.textContent = library.returnBook(id);
    displayBooks();
  }
  
  window.onload = displayBooks;
  