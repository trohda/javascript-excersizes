// Function which takes list of tasks defined on start, put tasks in Todo list section and add them checkboxes
import {START_TODO_LIST} from "./constants.js";

const startListItemTags = START_TODO_LIST.map(element => {
    const newListItem = document.createElement('li');
    const newCheckBox = document.createElement('input');
    const newPInLi = document.createElement('p');
    newCheckBox.setAttribute('type', 'checkbox');
    newPInLi.innerText = '- '+element.task;
    newListItem.append(newPInLi, newCheckBox);
    
    return newListItem;
})

export default startListItemTags;