let addNewList = document.getElementById("addNewList");
let addNewTodo = document.getElementById("addNewTodo");
let newListSaveBtn = document.getElementById("newListSaveBtn");
let listGroup = document.getElementById("listName");
let linkList = document.getElementById("link-list");
let btns = [addNewList, addNewTodo];
const saveBtn = document.querySelector(".save-btn");
const cancelBtn = document.querySelectorAll(".cancel-btn");
const todoForm = document.getElementById("todo-form");
const newToDo = document.getElementsByClassName('new-todo')[0];
const todoBox = document.getElementById("todo-box");

export {
    addNewList,
    addNewTodo,
    newListSaveBtn,
    listGroup,
    linkList,
    btns,
    saveBtn,
    cancelBtn,
    todoForm,
    newToDo,
    todoBox
}