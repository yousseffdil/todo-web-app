const dataObj = new Date()

const dayitem = document.querySelector('.day');
const mothitem = document.querySelector('.month');
const yearitem = document.querySelector('.year');
const list = document.querySelector('.list');
const add = document.getElementById('addtask');
const button = document.getElementById("finished")

const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const diaActual = dataObj.getDay();


const day = dataObj.getDate()
const month = dataObj.getMonth() + 1
const year = dataObj.getFullYear()
const nombreDiaActual = diasSemana[diaActual];


dayitem.innerHTML = day
mothitem.innerHTML = month
yearitem.innerHTML = year

// Declarar el array fuera de las funciones existentes
const tareasEliminadas = [];
const limiteTareas = 13; // Límite de tareas

function addTask() {
    if (list.childElementCount >= limiteTareas) {
        alert("Se ha alcanzado el límite de tareas.");
        return;
    }

    const nametask = prompt("Ingrese el nombre de la tarea");
    if (!nametask) return; // Si no se ingresa ningún nombre, no crear la tarea

    const task = document.createElement("div");
    task.classList.add("task");

    const taskName = document.createElement("h4");
    taskName.classList.add("task-name");
    taskName.textContent = nametask;

    const button = document.createElement("button");
    const content = document.createElement("span")
    content.classList.add("material-symbols-outlined")
    content.textContent = "done"
    /*
        <span class="material-symbols-outlined">
            done
        </span>
    */
    button.appendChild(content);

    const uniqueId = "finished-" + Date.now(); // Generar un id único
    button.id = uniqueId;

    task.appendChild(taskName);
    task.appendChild(button);

    list.appendChild(task);
}

function handleButton(event) {
    const button = event.target;
    const taskName = button.previousElementSibling;
    taskName.classList.add("task-eliminate");
    taskName.classList.add("animate__animated");
    taskName.classList.add("animate__fadeOut");

    // Guardar el nombre de la tarea eliminada en el array
    const nombreTareaEliminada = taskName.textContent;
    tareasEliminadas.push(nombreTareaEliminada);
    addtaskEliminate(nombreTareaEliminada);

    setTimeout(function () {
        taskName.parentNode.remove(); // Eliminar el nodo después de un tiempo
    }, 500); // Esperar 1 segundo antes de eliminar el nodo
}

function addtaskEliminate(nombreTareaEliminada) {
    const taskEliminate = document.createElement("div");
    taskEliminate.classList.add("Eliminado");
    taskEliminate.classList.add("task-eliminate");
    taskEliminate.textContent = nombreTareaEliminada;

    // Agregar el elemento taskEliminate al DOM, por ejemplo:
    const eliminatedTasksContainer = document.getElementById("nontask");
    setTimeout(function () {
        taskEliminate.classList.add("animate__animated")
        taskEliminate.classList.add("animate__fadeIn")
        eliminatedTasksContainer.appendChild(taskEliminate);
    }, 1000);
}

add.addEventListener("click", addTask);
list.addEventListener("click", function (event) {
    if (event.target.id.startsWith("finished-")) {
        handleButton(event);
    }
});

