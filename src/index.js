import './style.scss';

// DOM manipulation
let addNewList = document.getElementById("addNewList");
let addNewTodo = document.getElementById("addNewTodo");
let newListSaveBtn = document.getElementById("newListSaveBtn");
let listGroup = document.getElementById("listName");
let linkList = document.getElementById("link-list");
let btns = [addNewList, addNewTodo];
let currentGroupId = "";
let currentTodoId = null;
const saveBtn = document.querySelector(".save-btn");
const cancelBtn = document.querySelectorAll(".cancel-btn");
const todoForm = document.getElementById("todo-form");
const newToDo = document.getElementsByClassName('new-todo')[0];
const todoBox = document.getElementById("todo-box");

addNewList.addEventListener('click', e => {
    document.getElementsByClassName('new-list')[0].style.display = "block";
})

addNewTodo.addEventListener('click', e => {
    newToDo.style.display = 'block';
})

// cancelBtn.addEventListener('click', (e) => {
//     document.getElementsByClassName('new-list')[0].style.display = "none";
//     newToDo.style.display = 'none';
//     // console.log(e.target.class)
// });
for (let btn of cancelBtn) {
    btn.addEventListener('click', () => {
        document.getElementsByClassName('new-list')[0].style.display = "none";
        newToDo.style.display = 'none';
    })
}




// Creating Groups and Group Logic

let groups = {

}

const generateId = () => {
    const generatedNumber = Math.floor(Math.random() * 100);
    if (groups.hasOwnProperty(generatedNumber)) {
        return generatedNumber + 1;
    }
    return generatedNumber;
}

const group = (title, description, todos = {}) => {
    const id = generateId();
    groups[id] = {
        id,
        title,
        description,
        todos,
    }
}

const addTodo = (projectId, todoId) => {
    const id = todoId || generateId();
    const title = document.getElementById("title").value;
    const dueDate = document.getElementById("dateDue").value;
    const priority = document.getElementById("priority").value;
    const description = document.getElementById("description").value;
    groups[projectId].todos[id] = { id, title, description, dueDate, priority, completed: false };
    localStorage.setItem("groups", JSON.stringify(groups));
}

function updateTodoStatus(groupId, todoId) {
    var checkbox = document.getElementsByClassName("todo-checked");
    // localStorage.setItem(JSON.parse(groups[projectId].todos[id]), checkbox.checked);
    groups[groupId].todos[todoId][completed] = true;
    localStorage.setItem("groups", JSON.stringify(groups));
    // "groups", JSON.stringify(groups)
}





// groups = JSON.parse(localStorage.getItem("groups")) || {};
// console.log(groups[50].todos[51]);

const editTodo = (groupId, todoId) => {
    // Popup the todo form, set projectId to current, set todoId to the one that was clicked
    // Saving should groups -> projectid.todos-> id -> overwrite
    groups = JSON.parse(localStorage.getItem("groups")) || {};
    const { title, dueDate, priority, description } = groups[groupId].todos[todoId];
    document.getElementById("title").value = `${title}`;
    document.getElementById("dateDue").value = `${dueDate}`;
    document.getElementById("priority").value = `${priority}`;
    document.getElementById("description").value = `${description}`
    console.log("Working...?")
}

// const deleteTodo = (todoId) => {
//     localStorage.removeItem(todoId);
// }
const deleteTodo = (groupId, todoId) => {
    groups = JSON.parse(localStorage.getItem("groups")) || {};
    delete groups[groupId].todos[todoId];
    localStorage.setItem("groups", JSON.stringify(groups));
}



const displayTodos = (projectId) => {
    todoBox.innerHTML = "";
    groups = JSON.parse(localStorage.getItem("groups")) || {};
    const todos = groups[projectId].todos;
    if (Object.values(todos).length > 0) {
        for (let todo in todos) {
            const { id, title, description, priority, dueDate } = todos[todo];

            const todoDisplay = document.createElement("div");
            todoDisplay.classList.add("todo-display");
            // todoDisplay.classList.add("todo-checked");

            const inputHolder = document.createElement("div");
            inputHolder.classList.add("test");
            const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("class", "todo-checkbox");
            const todoTitle = document.createElement("span");
            todoTitle.classList.add("todoTitle");
            todoTitle.textContent = `${title}`;

            const moreButton = document.createElement("button");
            moreButton.classList.add("more-btn");
            moreButton.textContent = "More...";

            const infoTitle = document.createElement("p");

            inputHolder.appendChild(infoTitle);
            inputHolder.appendChild(checkbox);
            inputHolder.appendChild(todoTitle);
            inputHolder.appendChild(moreButton);

            const moreInfo = document.createElement("div");
            moreInfo.classList.add("more-info");
            moreInfo.setAttribute("id", `${id}`);


            infoTitle.textContent = `${title}`;
            const infoDescription = document.createElement("p");
            infoDescription.textContent = `${description}`;
            const duedate = document.createElement("p");
            duedate.textContent = `${dueDate}`;
            const priorityLevel = document.createElement("p");
            priorityLevel.textContent = `${priority}`;

            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.classList.add("updateButton");
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";

            moreInfo.appendChild(infoTitle);
            moreInfo.appendChild(infoDescription);
            moreInfo.appendChild(duedate);
            moreInfo.appendChild(priorityLevel);
            moreInfo.appendChild(editButton);
            moreInfo.appendChild(deleteButton);
            todoDisplay.appendChild(inputHolder);
            todoDisplay.appendChild(moreInfo);
            todoBox.appendChild(todoDisplay);
        }
    } else {
        todoBox.innerHTML = "No Todos Yet";
    }
};


todoBox.addEventListener("click", (e) => {
    if (e.target.textContent === "More...") {
        e.target.parentNode.parentNode.childNodes[1].style.display = "block";
        e.target.textContent = "Less..."
    } else if (e.target.textContent === "Less...") {
        e.target.parentNode.parentNode.childNodes[1].style.display = "none";
        e.target.textContent = "More..."
    }

    if (e.target.textContent === "Edit") {
        newToDo.style.display = 'block';
        currentTodoId = e.target.parentNode.id
        editTodo(currentGroupId, currentTodoId)
    }
    if (e.target.textContent === "Delete") {
        currentTodoId = e.target.parentNode.id;
        deleteTodo(currentGroupId, currentTodoId);
        displayTodos(currentGroupId);
    }
    if (e.target.type === "checkbox") {
        docum
    }

})

const displayGroups = () => {
    let items = JSON.parse(localStorage.getItem("groups"));
    for (let group in items) {
        let newDiv = document.createElement("a");
        newDiv.setAttribute("class", "list-tag");
        newDiv.setAttribute("id", `${items[group].id}`)
        newDiv.textContent = items[group].title;
        newDiv.href = "#";
        linkList.appendChild(newDiv);
        document.getElementsByClassName("list-info")[0].appendChild(linkList);
    }
}
let newListForm = document.getElementById("newListForm");
newListForm.addEventListener("submit", addToTheDom);

function addToTheDom(e) {
    e.preventDefault();
    let listTitle = document.getElementById("new-list-title").value;
    let listDescription = document.getElementById("list-description").value;
    groups = JSON.parse(localStorage.getItem("groups")) || {};
    group(listTitle, listDescription);
    localStorage.setItem("groups", JSON.stringify(groups));
    linkList.textContent = "";
    displayGroups();
    document.getElementsByClassName('new-list')[0].style.display = "none";
    newListForm.reset();
}

displayGroups();

linkList.addEventListener("click", e => {
    displayTodos(e.target.id);
    currentGroupId = e.target.id;
})

saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTodo(currentGroupId, currentTodoId);
    todoForm.reset();
    newToDo.style.display = 'none';
    displayTodos(currentGroupId);
});