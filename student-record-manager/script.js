var students = [];
function addStudent() {
    var id = parseInt(document.getElementById("id").value);
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);
    var course = document.getElementById("course").value;
    var student = { id: id, name: name, age: age, course: course };
    students.push(student);
    alert("✅ Student added!");
}
function listStudents() {
    var list = document.getElementById("studentList");
    list.innerHTML = "";
    students.forEach(function (s) {
        var item = document.createElement("li");
        item.textContent = "ID: ".concat(s.id, ", Name: ").concat(s.name, ", Age: ").concat(s.age, ", Course: ").concat(s.course);
        list.appendChild(item);
    });
}
