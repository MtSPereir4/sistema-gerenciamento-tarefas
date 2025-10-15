//  Obtendo elementos do DOM
const taskInput = document.getElementById("task");
const buttonAddTasks = document.getElementById("btn-add-tasks");
const tasksToDo = document.getElementById("tasks-to-do");
const tasksDone = document.getElementById("tasks-done");
const tasksCanceled = document.getElementById("tasks-canceled");

//  estrutura inicial do local storage
// let tasks = JSON.parse(localStorage.getItem("tasks")) || {
//   toDo: [],
//   done: [],
//   canceled: [],
// };

//  Adicionando eventos
buttonAddTasks.addEventListener("click", addToDoTasks);

// //  Funções
// function saveTasks() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

function addToDoTasks() {
  const task = taskInput.value;
  //  Tratado caso para task vazia
  if (task === "") {
    alert("Por favor, insira uma tarefa.");
    return;
  } else {
    const li = document.createElement("li");
    li.className = "task-item-to-do";
    li.innerText = task;

    //  criando div com opções para cada tarefa
    const optionsDiv = document.createElement("div");
    optionsDiv.className = "task-options";

    //  criando botões de opções
    const btnDone = document.createElement("button");
    btnDone.className = "btn-done";
    btnDone.innerText = "Concluir";

    const btnCancel = document.createElement("button");
    btnCancel.className = "btn-cancel";
    btnCancel.innerText = "Cancelar";

    const btnRemove = document.createElement("button");
    btnRemove.className = "btn-remove";
    btnRemove.innerText = "Remover";

    //  adicionando botões na div de opções
    optionsDiv.appendChild(btnDone);
    optionsDiv.appendChild(btnCancel);
    optionsDiv.appendChild(btnRemove);

    //  adicionando div de opções no li
    li.appendChild(optionsDiv);

    // adicionando eventos aos botões
    btnDone.addEventListener("click", () => moveTask(li, tasksDone));
    btnCancel.addEventListener("click", () => moveTask(li, tasksCanceled));
    btnRemove.addEventListener("click", () => li.remove());

    tasksToDo.appendChild(li);
    taskInput.value = "";
  }
}

function moveTask(taskItem, list) {
  list.appendChild(taskItem);
  taskItem.className =
    list === tasksDone ? "task-item-done" : "task-item-canceled";
}
