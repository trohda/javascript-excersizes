import {START_TODO_LIST} from "./constants.js";

const startListItemTags = START_TODO_LIST.map(element => {
    const newListItem = document.createElement('li');
    newListItem.innerText = element.task;
    return newListItem;
})

export default startListItemTags;