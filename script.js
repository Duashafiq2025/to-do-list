const todoList = [];
function addTask() {
  const todoInput = document.querySelector("#task-input");
  const task = todoInput.value;

  if (task === "") {
    alert("Add task first !");
    return;
  }
  todoList.push(task);
  todoInput.value = "";
  showlist();
}

function showlist() {
  const ul = document.querySelector("#list-container");
  let finalHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    finalHTML =
      finalHTML +
      `
        <p>
        🌿 ${todoList[i]}
        <span class = "icons">
        <i class="fa-solid fa-pen" id="edit-btn" onclick="editTask(${i})"></i>
        <i class="fa-solid fa-trash delete-icon" id="delete-btn" onclick="deleteTask(${i})"></i> 
        </span>
        </p>`;
  }
  ul.innerHTML = finalHTML;
}

function deleteTask(index) {
  todoList.splice(index, 1);
  showlist();
}

function editTask(index) {
  let updateTask = prompt("Update your task", todoList[index]);
  if (updateTask !== "" && updateTask !== null) {
    todoList[index] = updateTask;
    showlist();
  }
}

function clearAllTasks() {
  todoList.length = 0;
  showlist();
}
