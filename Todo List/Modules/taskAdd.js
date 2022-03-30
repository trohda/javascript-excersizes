import {textAreaRef,toDoListRef} from "./constants.js"

// Listener on "add new task button" with function which add new task do Todo list section and add them chescboxes
const addButtonListener = document.forms[0].addEventListener('submit', (event) =>{
    const newTask = document.createElement('li');
    const newCheckBox = document.createElement('input');
    const newParagraphInLi = document.createElement('p');
    newCheckBox.setAttribute('type', 'checkbox'); 
    
    // check if user typed anything in input field
    if(textAreaRef.value == ''){
        alert("You can`t add empty task.");
    }else{
        newParagraphInLi.innerText = '- '+textAreaRef.value;
        newTask.append(newParagraphInLi, newCheckBox);
        toDoListRef.append(newTask);
        textAreaRef.value = "";
    }
    event.preventDefault(); 
})

export default addButtonListener;