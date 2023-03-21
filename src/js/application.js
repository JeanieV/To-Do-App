//Get Element by class and id
const inputTask = document.getElementById("task");
const submitTask = document.getElementById("addTask1");
const deleteTask = document.getElementById("deleteTask1");
const sortTask = document.getElementById("sortTask1");
const editTask = document.getElementById("editTask1");
const inputDate = document.getElementById("date")

//Where the list should go
let newTasks = document.getElementById("tasks");

// //Empty Task Array to store input
let taskArray = [];


//Function for what happens when user clicks on Add Task
function submitFunc(event) {
    event.preventDefault();
    

    let toDo = inputTask.value;
    toDo = toDo.trim();

    let toDate = inputDate.value;
    toDate = toDate.trim();

    if (toDo == "") {
        alert("Kindly enter a new task!");
    }
    else if (toDate == "") {
        alert("Kindly enter a new due date!")
        
    }
    else {
        console.log(taskArray);
        newTaskArray(inputTask.value);

        //This will append to form when the user enters task and due date
        let task1 = 
             `
            <div class="spanLine">
                <p class="span1"> ${inputTask.value} </p>

                <p class="span2"> ${inputDate.value} </p>
        
                <button type="submit" id="editTask2"><img class="editTask" src="/src/images/edit.gif" alt="Edit Task" title="Edit Task"
                        attribution="https://www.flaticon.com/free-animated-icons/paper"></button>

                <button type="submit" id="deleteTask2"><img class="deleteTask" src="/src/images/bin.gif"
                        alt="Delete Task" title="Delete Task"
                        attribution="https://www.flaticon.com/free-animated-icons/document"></button>
            </div>
            `
        document.getElementById("tasks").innerHTML += task1
    }
    
}
submitTask.addEventListener("click", submitFunc);


// //This function will be added to the empty array
function newTaskArray(taskText) {

    //Object created
    const task = {
        time: inputDate.value,
        title: taskText,
    };

    //Push the user input into empty array
    taskArray.push(task);
    // console.log(taskArray);
}
























//Delete task from array
// function deleteTaskArray() {

//     let x = inputTask.value
    
//     taskArray.splice(x,1)
//     console.log(taskArray);
// }
// deleteTask.addEventListener('click',deleteTaskArray);


