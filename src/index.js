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