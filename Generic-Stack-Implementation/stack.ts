class Stack<T> {
    private items: T[] = [];
  
    push(item: T): void {
      this.items.push(item);
    }
  
    pop(): T | undefined {
      return this.items.pop();
    }
  
    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }
  
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    getItems(): T[] {
      return [...this.items];
    }
  }
  
  // Examples
  const numberStack = new Stack<number>();
  numberStack.push(10);
  numberStack.push(20);
  numberStack.push(30);
  
  const stringStack = new Stack<string>();
  stringStack.push("apple");
  stringStack.push("banana");
  
  interface Person {
    name: string;
    age: number;
  }
  
  const objectStack = new Stack<Person>();
  objectStack.push({ name: "Alice", age: 25 });
  objectStack.push({ name: "Bob", age: 30 });
  
  // UI
  function displayStack<T>(stack: Stack<T>, elementId: string) {
    const container = document.getElementById(elementId)!;
    container.innerHTML = "";
    for (const item of stack.getItems()) {
      const li = document.createElement("li");
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
    const input = document.getElementById("numInput") as HTMLInputElement;
    numberStack.push(Number(input.value));
    input.value = "";
    showAllStacks();
  }
  
  function popNumber() {
    numberStack.pop();
    showAllStacks();
  }
  
  function pushString() {
    const input = document.getElementById("strInput") as HTMLInputElement;
    stringStack.push(input.value);
    input.value = "";
    showAllStacks();
  }
  
  function popString() {
    stringStack.pop();
    showAllStacks();
  }
  
  function pushObject() {
    const name = (document.getElementById("nameInput") as HTMLInputElement).value;
    const age = Number((document.getElementById("ageInput") as HTMLInputElement).value);
    objectStack.push({ name, age });
    (document.getElementById("nameInput") as HTMLInputElement).value = "";
    (document.getElementById("ageInput") as HTMLInputElement).value = "";
    showAllStacks();
  }
  
  function popObject() {
    objectStack.pop();
    showAllStacks();
  }
  
  window.onload = showAllStacks;
  