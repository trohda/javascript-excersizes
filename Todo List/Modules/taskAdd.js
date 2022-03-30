import {textAreaRef,toDoListRef} from "./constants.js"


const addButtonListener = document.forms[0].addEventListener('submit', (event) =>{
    const newTask = document.createElement('li');
    const newCheckBox = document.createElement('input');
    const newPInLi = document.createElement('p');
    newCheckBox.setAttribute('type', 'checkbox');
        
    if(textAreaRef.value == ''){
        alert("You can`t add empty task.");
    }else{
        newPInLi.innerText = textAreaRef.value;
        newTask.append(newPInLi, newCheckBox);
        toDoListRef.append(newTask);
        textAreaRef.value = "";
    }
    event.preventDefault();
})

export default addButtonListener;