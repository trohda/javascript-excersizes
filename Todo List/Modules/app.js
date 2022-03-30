import startListItemTags from "./displayStartList.js"
import {toDoListRef} from "./constants.js"
import addButtonListener from "./taskAdd.js"

// Injecting start task from TODO_START_LIST_ Todo list section using displayStartList module
toDoListRef.append(...startListItemTags);

// Listener on add new task button with function which add new task do Todo list section
addButtonListener;
