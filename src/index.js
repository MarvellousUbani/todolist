import './style.scss';

// DOM manipulation
let addNewList = document.getElementById("addNewList");
let addNewTodo = document.getElementById("addNewTodo");
let newListSaveBtn = document.getElementById("newListSaveBtn");
let listGroup = document.getElementById("listName");
let btns = [addNewList, addNewTodo];

addNewList.addEventListener('click', e => {
    // document.querySelector('new-list')[0].style.visibility = 'visible';
    document.getElementsByClassName('new-list')[0].style.display = "block";
})

addNewTodo.addEventListener('click', e => {
    document.getElementsByClassName('new-todo')[0].style.display = 'block';
})

// function displayForm(e) {
//   console.log(e.target.className);
// }
// addNewTodo.addEventListener('click', displayForm);

// Creating Groups and Group Logic

const groups = {
    1: {
        id: 1,
        title: "My Travel List",
        description: "Thing I need to buy",
        todos: {
            12: { title: "swim", description: "Buy Swimsuit", dueDate: "Tomorrow", priority: "High" },
            13: { title: "run", description: "Buy Swimsuit", dueDate: "Tomorrow", priority: "High" },
        }
    }
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
  
  displayTodos(1);

const displayGroups = () => {
    for (let group in groups) {
        let newDiv = document.createElement("a");
        newDiv.textContent = groups[group].title;
        newDiv.href = "#";
        document.getElementsByClassName("list-info")[0].appendChild(newDiv);
        // console.log("test");
    }
}
let newListForm = document.getElementById("newListForm");
newListForm.addEventListener("submit", addToTheDom);

function addToTheDom(e) {
    e.preventDefault();
    let listTitle = document.getElementById("new-list-title").value;
    let listDescription = document.getElementById("list-description").value;
    group(listTitle, listDescription);
    // listGroup.appendChild = displayGroups();
    displayGroups();
    document.getElementsByClassName('new-list')[0].style.display = "none";
    newListForm.reset();
}