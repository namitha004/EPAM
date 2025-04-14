
interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
}

let students: Student[] = [];

function addStudent(): void {
  const id = parseInt((document.getElementById("id") as HTMLInputElement).value);
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const age = parseInt((document.getElementById("age") as HTMLInputElement).value);
  const course = (document.getElementById("course") as HTMLInputElement).value;

  const student: Student = { id, name, age, course };
  students.push(student);
  alert("✅ Student added!");
}

function listStudents(): void {
  const list = document.getElementById("studentList") as HTMLUListElement;
  list.innerHTML = "";
  students.forEach(s => {
    const item = document.createElement("li");
    item.textContent = `ID: ${s.id}, Name: ${s.name}, Age: ${s.age}, Course: ${s.course}`;
    list.appendChild(item);
  });
}
