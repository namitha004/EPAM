var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.getItems = function () {
        return __spreadArray([], this.items, true);
    };
    return Stack;
}());
// Examples
var numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
var stringStack = new Stack();
stringStack.push("apple");
stringStack.push("banana");
var objectStack = new Stack();
objectStack.push({ name: "Alice", age: 25 });
objectStack.push({ name: "Bob", age: 30 });
// UI
function displayStack(stack, elementId) {
    var container = document.getElementById(elementId);
    container.innerHTML = "";
    for (var _i = 0, _a = stack.getItems(); _i < _a.length; _i++) {
        var item = _a[_i];
        var li = document.createElement("li");
        li.textContent = typeof item === "object" ? JSON.stringify(item) : String(item);
        container.appendChild(li);
    }
}
function showAllStacks() {
    displayStack(numberStack, "numberStackList");
    displayStack(stringStack, "stringStackList");
    displayStack(objectStack, "objectStackList");
}
function pushNumber() {
    var input = document.getElementById("numInput");
    numberStack.push(Number(input.value));
    input.value = "";
    showAllStacks();
}
function popNumber() {
    numberStack.pop();
    showAllStacks();
}
function pushString() {
    var input = document.getElementById("strInput");
    stringStack.push(input.value);
    input.value = "";
    showAllStacks();
}
function popString() {
    stringStack.pop();
    showAllStacks();
}
function pushObject() {
    var name = document.getElementById("nameInput").value;
    var age = Number(document.getElementById("ageInput").value);
    objectStack.push({ name: name, age: age });
    document.getElementById("nameInput").value = "";
    document.getElementById("ageInput").value = "";
    showAllStacks();
}
function popObject() {
    objectStack.pop();
    showAllStacks();
}
window.onload = showAllStacks;
