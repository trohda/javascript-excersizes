import {textAreaRef,toDoListRef} from "./constants.js"


const addButtonListener = document.forms[0].addEventListener('submit', (event) =>{
    let newTask = document.createElement('li');
    newTask.innerText = textAreaRef.value;
    toDoListRef.append(newTask);
    textAreaRef.value = "";
    event.preventDefault();

})

export default addButtonListener;