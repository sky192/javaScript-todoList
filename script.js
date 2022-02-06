const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const trashButton = document.querySelector(".trash-btn");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCompletedTodo);

// functinality for adding todo list
function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;

    saveLocalTodo(todoInput.value);

    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";

    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
}

function deleteCompletedTodo(event) {
    console.log(event.target.classList[0]);
    const item = event.target;
    if (item.classList[0] === "trash-btn") {
        item.parentElement.remove();
        console.log(item.parentElement);
    }
    if (item.classList[0] === "complete-btn") {
        item.parentElement.classList.toggle("completed");
    }
}

// function for saving local storage

function saveLocalTodo(todo) {
    let todos; // value in localstorage
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
