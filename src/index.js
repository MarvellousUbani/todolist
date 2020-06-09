import './style.scss';

// DOM manipulation
let addNewList = document.getElementById("addNewList");
let addNewTodo = document.getElementById("addNewTodo");
let newListSaveBtn = document.getElementById("newListSaveBtn");
let listGroup = document.getElementById("listName");
let linkList = document.getElementById("link-list");
let btns = [addNewList, addNewTodo];

addNewList.addEventListener('click', e => {
    document.getElementsByClassName('new-list')[0].style.display = "block";
})

addNewTodo.addEventListener('click', e => {
    document.getElementsByClassName('new-todo')[0].style.display = 'block';
})


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

const addTodo = (projectId, title, description, dueDate, priority) => {
    const id = generateId();
    groups[projectId].todos[id] = { title, description, dueDate, priority };
}

const displayTodos = (projectId) => {
    const todos = groups[projectId].todos;
    const todoBox = document.getElementById("todo-box");
    for (let todo in todos) {
        const { title, description, priority, dueDate } = todos[todo];

        const todoDisplay = document.createElement("div");
        todoDisplay.classList.add("todo-display");

        const inputHolder = document.createElement("div");
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        const todoTitle = document.createElement("span");
        todoTitle.classList.add("todoTitle");
        const moreButton = document.createElement("button");
        moreButton.textContent = "More...";

        inputHolder.appendChild(checkbox);
        inputHolder.appendChild(todoTitle);
        inputHolder.appendChild(moreButton);

        const moreInfo = document.createElement("div");
        const infoTitle = document.createElement("p");
        infoTitle.textContent = `${title}`;
        const infoDescription = document.createElement("p");
        infoDescription.textContent = `${description}`;
        const duedate = document.createElement("p");
        duedate.textContent = `${dueDate}`;
        const priorityLevel = document.createElement("p");
        priorityLevel.textContent = `${priority}`;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
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
};

const displayGroups = () => {
    let items = JSON.parse(localStorage.getItem("groups"));
    for (let group in items) {
        let newDiv = document.createElement("a");
        newDiv.setAttribute("class", "list-tag");
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
    groups = JSON.parse(localStorage.getItem("groups"));
    group(listTitle, listDescription);
    localStorage.setItem("groups", JSON.stringify(groups));
    linkList.textContent = "";
    displayGroups();
    document.getElementsByClassName('new-list')[0].style.display = "none";
    newListForm.reset();
}
displayGroups();