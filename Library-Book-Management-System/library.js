var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        // Sample books
        this.books = [
            { id: 1, title: "The Alchemist", author: "Paulo Coelho", isBorrowed: false },
            { id: 2, title: "1984", author: "George Orwell", isBorrowed: false },
            { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", isBorrowed: false }
        ];
    }
    Library.prototype.borrowBook = function (id) {
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var b = _a[_i];
            if (b.id === id) {
                if (!b.isBorrowed) {
                    b.isBorrowed = true;
                    return "\u2705 You borrowed \"".concat(b.title, "\"");
                }
                else {
                    return "\u274C \"".concat(b.title, "\" is already borrowed");
                }
            }
        }
        return "❌ Book not found";
    };
    Library.prototype.returnBook = function (id) {
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var b = _a[_i];
            if (b.id === id) {
                if (b.isBorrowed) {
                    b.isBorrowed = false;
                    return "\u2705 You returned \"".concat(b.title, "\"");
                }
                else {
                    return "\u274C \"".concat(b.title, "\" was not borrowed");
                }
            }
        }
        return "❌ Book not found";
    };
    Library.prototype.getAvailableBooks = function () {
        return this.books.filter(function (b) { return !b.isBorrowed; });
    };
    Library.prototype.getBorrowedBooks = function () {
        return this.books.filter(function (b) { return b.isBorrowed; });
    };
    return Library;
}());
// UI Logic
var library = new Library();
function displayBooks() {
    var availableList = document.getElementById("availableBooks");
    var borrowedList = document.getElementById("borrowedBooks");
    availableList.innerHTML = "";
    borrowedList.innerHTML = "";
    for (var _i = 0, _a = library.getAvailableBooks(); _i < _a.length; _i++) {
        var b = _a[_i];
        var li = document.createElement("li");
        li.textContent = "#".concat(b.id, ": ").concat(b.title, " by ").concat(b.author);
        availableList.appendChild(li);
    }
    for (var _b = 0, _c = library.getBorrowedBooks(); _b < _c.length; _b++) {
        var b = _c[_b];
        var li = document.createElement("li");
        li.textContent = "#".concat(b.id, ": ").concat(b.title, " by ").concat(b.author);
        borrowedList.appendChild(li);
    }
}
function borrowBookFromInput() {
    var input = document.getElementById("borrowId");
    var result = document.getElementById("borrowResult");
    var id = parseInt(input.value);
    result.textContent = library.borrowBook(id);
    displayBooks();
}
function returnBookFromInput() {
    var input = document.getElementById("returnId");
    var result = document.getElementById("returnResult");
    var id = parseInt(input.value);
    result.textContent = library.returnBook(id);
    displayBooks();
}
window.onload = displayBooks;
