// Task list array
var tasks = [];
// Generate unique task ID
function generateId() {
    return tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1;
}
// Add a new task
function addTask(title, description) {
    var newTask = {
        id: generateId(),
        title: title,
        description: description,
        status: 'pending'
    };
    tasks.push(newTask);
}
// Mark a task as completed
function markTaskCompleted(id) {
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].status = 'completed';
            break;
        }
    }
}
// Delete a task
function deleteTask(id) {
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks.splice(i, 1);
            break;
        }
    }
}
// List all tasks (prints to console — for debugging)
function listTasks() {
    console.log("All Tasks:");
    for (var i = 0; i < tasks.length; i++) {
        console.log("ID: ".concat(tasks[i].id, ", Title: ").concat(tasks[i].title, ", Status: ").concat(tasks[i].status));
    }
}
// Functions for front-end (exposed to HTML)
// Add task from input fields
function addTaskFromInput() {
    var titleInput = document.getElementById("title");
    var descInput = document.getElementById("description");
    if (titleInput.value.trim() !== "") {
        addTask(titleInput.value, descInput.value);
        titleInput.value = "";
        descInput.value = "";
        updateTaskList();
    }
}
// Mark task as completed from input
function markTaskCompletedFromInput() {
    var idInput = document.getElementById("taskId");
    var id = parseInt(idInput.value);
    if (!isNaN(id)) {
        markTaskCompleted(id);
        idInput.value = "";
        updateTaskList();
    }
}
// Delete task from input
function deleteTaskFromInput() {
    var idInput = document.getElementById("deleteId");
    var id = parseInt(idInput.value);
    if (!isNaN(id)) {
        deleteTask(id);
        idInput.value = "";
        updateTaskList();
    }
}
// Update task list on the page
function updateTaskList() {
    var ul = document.getElementById("taskList");
    ul.innerHTML = "";
    for (var i = 0; i < tasks.length; i++) {
        var li = document.createElement("li");
        li.textContent = "ID: ".concat(tasks[i].id, ", Title: ").concat(tasks[i].title, ", Status: ").concat(tasks[i].status);
        ul.appendChild(li);
    }
}
// Expose functions to global scope (so HTML buttons can call them)
window.addTaskFromInput = addTaskFromInput;
window.markTaskCompletedFromInput = markTaskCompletedFromInput;
window.deleteTaskFromInput = deleteTaskFromInput;
