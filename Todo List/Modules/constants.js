//All global constants

export const START_TODO_LIST = [                      //keys isDone and id are for future changes
    {task: "Make breakfast", isDone: false, id: 1},      
    {task: "Take dog for a walk", isDone: false, id: 2},
    {task: "Clean house", isDone: false, id: 3},
    {task: "Buy a new couch", isDone: false, id: 4},
    {task: "Spend time to make another step in big frontend project", isDone: false, id: 5}
];


//references to HTML objects
export const toDoListRef = document.querySelector('.toDoList');
export const addButtonRef = document.querySelector('.addButton');
export const textAreaRef = document.querySelector('textarea');