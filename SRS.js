const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

let students = [];

form.addEventListener("submit", function(e){

    e.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        roll: document.getElementById("roll").value,
        course: document.getElementById("course").value,
        marks: document.getElementById("marks").value
    };

    students.push(student);

    displayStudents();

    form.reset();

});

function displayStudents(){

    table.innerHTML="";

    students.forEach((student,index)=>{

        table.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.course}</td>
            <td>${student.marks}</td>
            <td>
                <button class="delete" onclick="deleteStudent(${index})">
                Delete
                </button>
            </td>
        </tr>
        `;

    });

}

function deleteStudent(index){

    students.splice(index,1);

    displayStudents();

}