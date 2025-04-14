// Task interface
interface Task {
    id: number;
    title: string;
    description: string;
    status: 'pending' | 'completed';
  }
  
  // Task list array
  let tasks: Task[] = [];
  
  // Generate unique task ID
  function generateId(): number {
    return tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1;
  }
  
  // Add a new task
  function addTask(title: string, description: string): void {
    const newTask: Task = {
      id: generateId(),
      title,
      description,
      status: 'pending'
    };
    tasks.push(newTask);
  }
  
  // Mark a task as completed
  function markTaskCompleted(id: number): void {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        tasks[i].status = 'completed';
        break;
      }
    }
  }
  
  // Delete a task
  function deleteTask(id: number): void {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        tasks.splice(i, 1);
        break;
      }
    }
  }
  
  // List all tasks (prints to console — for debugging)
  function listTasks(): void {
    console.log("All Tasks:");
    for (let i = 0; i < tasks.length; i++) {
      console.log(`ID: ${tasks[i].id}, Title: ${tasks[i].title}, Status: ${tasks[i].status}`);
    }
  }
  
  // Functions for front-end (exposed to HTML)
  
  // Add task from input fields
  function addTaskFromInput(): void {
    const titleInput = document.getElementById("title") as HTMLInputElement;
    const descInput = document.getElementById("description") as HTMLTextAreaElement;
    if (titleInput.value.trim() !== "") {
      addTask(titleInput.value, descInput.value);
      titleInput.value = "";
      descInput.value = "";
      updateTaskList();
    }
  }
  
  // Mark task as completed from input
  function markTaskCompletedFromInput(): void {
    const idInput = document.getElementById("taskId") as HTMLInputElement;
    const id = parseInt(idInput.value);
    if (!isNaN(id)) {
      markTaskCompleted(id);
      idInput.value = "";
      updateTaskList();
    }
  }
  
  // Delete task from input
  function deleteTaskFromInput(): void {
    const idInput = document.getElementById("deleteId") as HTMLInputElement;
    const id = parseInt(idInput.value);
    if (!isNaN(id)) {
      deleteTask(id);
      idInput.value = "";
      updateTaskList();
    }
  }
  
  // Update task list on the page
  function updateTaskList(): void {
    const ul = document.getElementById("taskList") as HTMLUListElement;
    ul.innerHTML = "";
  
    for (let i = 0; i < tasks.length; i++) {
      const li = document.createElement("li");
      li.textContent = `ID: ${tasks[i].id}, Title: ${tasks[i].title}, Status: ${tasks[i].status}`;
      ul.appendChild(li);
    }
  }
  
  // Expose functions to global scope (so HTML buttons can call them)
  (window as any).addTaskFromInput = addTaskFromInput;
  (window as any).markTaskCompletedFromInput = markTaskCompletedFromInput;
  (window as any).deleteTaskFromInput = deleteTaskFromInput;
  