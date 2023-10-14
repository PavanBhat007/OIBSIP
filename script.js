let pendingTodosWrapper = document.querySelector(".pending-todos .todo-list");
let completedTodosWrapper = document.querySelector(".completed-todos .todo-list");
let todoTitleEle = document.querySelector(".todo-item-title");
let todoDescEle = document.querySelector(".todo-item-desc");
let alertEle = document.querySelector(".alert");
let noPendingToDo = document.querySelectorAll(".hidden")[0];
let noCompletedToDo = document.querySelectorAll(".hidden")[1];

let pendingTodos = [];
let completedTodos = [];
updateVisibility();

function createTodo(title, desc) {
    let todoItem = document.createElement('div');
    todoItem.classList.add("todo-item");

    let todoTitle = document.createElement('div');
    todoTitle.classList.add('todo-title');
    let todoTitleH3 = document.createElement('h3');
    todoTitleH3.innerText = title;
    todoTitle.appendChild(todoTitleH3);

    let todoDesc = document.createElement('div');
    todoDesc.classList.add('todo-desc');
    let todoDescP = document.createElement('p');
    todoDescP.innerText = desc;
    todoDesc.appendChild(todoDescP);

    let todoMark = document.createElement('input');
    todoMark.setAttribute('type', 'checkbox');
    todoMark.classList.add('mark-as-complete');

    todoItem.appendChild(todoMark);
    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoDesc);

    return todoItem;
}

function handleInput() {
    let todoInpTitle = todoTitleEle.value;
    let todoInpDesc = todoDescEle.value;
    alertEle.style.visibility = "hidden";

    if (todoInpTitle == "") {
        alertEle.textContent = "TITLE FIELD CANNOT BE EMPTY";
        alertEle.style.visibility = "visible";
        return;
    }

    let todoListItem = createTodo(todoInpTitle, todoInpDesc);
    pendingTodos.push(todoListItem);
    todoTitleEle.value = "";
    todoDescEle.value = "";

    updateVisibility();
    displayTodos();
}

function displayTodos() {
    pendingTodosWrapper.innerHTML = "";
    completedTodosWrapper.innerHTML = "";

    pendingTodos.forEach(todo => {
        pendingTodosWrapper.appendChild(todo);
    });

    completedTodos.forEach(todo => {
        completedTodosWrapper.appendChild(todo);
    });

    updateVisibility();
}

function updateVisibility() {
    noPendingToDo.style.visibility = pendingTodos.length === 0 ? "visible" : "hidden";
    noCompletedToDo.style.visibility = completedTodos.length === 0 ? "visible" : "hidden";
}

document.querySelector(".btn-submit").addEventListener('click', (event) => {
    event.preventDefault();
    handleInput();
});

document.addEventListener('change', function(event) {
    if (event.target && event.target.classList.contains('mark-as-complete')) {
        let checkbox = event.target;
        if (checkbox.checked) {
            let todo = checkbox.parentElement;
            pendingTodos = pendingTodos.filter(item => item !== todo);
            completedTodos.push(todo);

            // Replace the checkbox with a tick mark
            const tickMark = document.createElement('div');
            tickMark.classList.add('tick-mark');
            tickMark.innerText = '✔️';

            todo.replaceChild(tickMark, checkbox);
            updateVisibility();

            displayTodos();
        }
    }
});
