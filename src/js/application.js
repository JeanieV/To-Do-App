//Get Element by class and id
let inputTask = document.getElementById("task");
let submitTask = document.getElementById("addTask1");
let tasksDiv = document.getElementsByClassName("tasks");
let deleteTask = document.getElementById("deleteTask1");
let sortTask = document.getElementById("sortTask1");
let editTask = document.getElementById("editTask1");

//Empty Task Array to store input
let taskArray = [];


function submitFunc(event) {
    event.preventDefault();

    if (inputTask.value !== "") {
        newTaskArray(inputTask.value);
        inputTask.value = "";
    }
    else {
        console.log("It did not work!")
    }
}

submitTask.addEventListener("click", submitFunc);


function newTaskArray(taskText) {

    //Object created
    const task = {
        time: Date(),
        title: taskText,
        completed: false,
    };

    //Push the user input into empty array
    taskArray.push(task);
    console.log(taskArray);

}

function listOfTasks(){

    let task1 = 
    `
    
    `

    return task1
}
