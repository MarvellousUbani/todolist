import './style.scss';

// DOM manipulation
let addNewList = document.getElementById("addNewList");
let addNewTodo = document.getElementById("addNewTodo");
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
  1 : {
    id: 1,
    title: "My Travel List",
    description: "Thing I need to buy",
    todos: { 12: {title:"swim", description:"Buy Swimsuit", dueDate:"Tomorrow", priority:"High"}, 
    13: {title:"run", description:"Buy Swimsuit", dueDate:"Tomorrow", priority:"High"},
   }
  }
}

const generateId = () => {
    const generatedNumber = Math.floor(Math.random() * 100);
    if(groups.hasOwnProperty(generatedNumber)){
        return generatedNumber + 1;
    }
    return generatedNumber;
}

const group = (title, description, todos= {}) => {
    const id = generateId();
    Groups[id] = {
        id,
         title,
          description,
          todos,
  }
}

const addTodo = (projectId, title, description, dueDate, priority) => {
    const id = generateId();
    Groups[projectId].todos[id] = {title, description, dueDate, priority};
}

const displayTodos = (projectId) => {
    for(let todo of Groups[projectId].todos){
        // Add todo stuff to the Dom
        console.log(todo);
    }
}

