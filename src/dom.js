export const domVariables = () => {
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
    let newListForm = document.getElementById("newListForm");

}

export const domListeners = () => {
       
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
        updateTodoStatus(currentGroupId, e.target.parentNode.parentNode.childNodes[1].id);
        displayTodos(currentGroupId);
    }

})

addNewList.addEventListener('click', e => {
    document.getElementsByClassName('new-list')[0].style.display = "block";
})

addNewTodo.addEventListener('click', e => {
    newToDo.style.display = 'block';
})


for (let btn of cancelBtn) {
    btn.addEventListener('click', () => {
        document.getElementsByClassName('new-list')[0].style.display = "none";
        newToDo.style.display = 'none';
    })
}


newListForm.addEventListener("submit", addToTheDom);
}

