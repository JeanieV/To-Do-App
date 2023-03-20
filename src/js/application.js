//Get Element by class and id
let inputTask = document.getElementById("task");
let submitTask = document.getElementById("addTask1");
let tasksDiv = document.getElementById("tasks")
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
    populateUserList(taskArray);
}


function viewTask(index){

    let task1 = 
    `
    <div class="taskLine" data-index="${index}">
                <input type="text" placeholder="Enter your Task.." name="task" id="${inputTask}">
                <button type="submit" id="${submitTask}"><img class="addTask" src="/src/images/add-file.gif" alt="Add Task" title="Add Task"
                        attribution="https://www.flaticon.com/free-animated-icons/add-file"></button>
                <button type="submit" id="${editTask}"><img class="editTask" src="/src/images/edit.gif" alt="Edit Task" title="Edit Task"
                        attribution="https://www.flaticon.com/free-animated-icons/paper"></button>
                <button type="submit" id="${sortTask}"><img class="sortTask" src="/src/images/sort.gif" alt="Sort Task" title="Sort Task"
                        attribution="https://www.flaticon.com/free-animated-icons/arrows"></button>
                <button type="submit" id="${deleteTask}"><img class="deleteTask" src="/src/images/bin.gif" alt="Delete Task" title="Delete Task"
                        attribution="https://www.flaticon.com/free-animated-icons/document"></button>
            </div>
    `
return task1;
}


function populateUserList(usersparam) {
    let listElements = document.getElementsByClassName("taskLine");
    
    Array.from(listElements).forEach((el) => {
        el.remove();
    })

    for (let i = 0; i < taskArray.length; i++) {
        
        let user1 = viewTask(usersparam[i], i);
        
        document.getElementById("tasks").innerHTML += user1;
        console.log(user1);
    }

    // Update data-index attributes
    listElements = document.getElementsByClassName("taskLine");

    Array.from(listElements).forEach((el, index) => {
        el.setAttribute("data-index", index);
        
        deleteTask.addEventListener("click", (event) => {
            removeUser(event, index);
        });
    });
}


function removeUser(event, index) {
    const entry = event.target.parentNode;
    taskArray.splice(index, 1);
    entry.parentNode.removeChild(entry);
    populateUserList(taskArray);

    console.log(taskArray);
}