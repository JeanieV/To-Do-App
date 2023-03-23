//Get Element by class and id
const inputTask = document.getElementById("task");
const submitTask = document.getElementById("addTask1");
const sortTask = document.getElementById("sortTask1");
const inputDate = document.getElementById("date");

//Where the tasklist should go
let newTasks = document.getElementById("tasks");


// //Empty Task Array to store input
let taskArray = [];


//Function for what happens when user clicks on Add Task
function submitFunc(event) {
    event.preventDefault();

    //Input fields
    let toDo = inputTask.value;
    toDo = toDo.trim();

    let toDate = inputDate.value;
    toDate = toDate.trim();

    //Form Validation
    if (toDo == "") {
        alert("Kindly enter a new task!");
    }
    else if (toDate == "") {
        alert("Kindly enter a new due date!")

    }
    else {
        console.log(taskArray);
        newTaskArray(inputTask.value);

        appendTask(taskArray);
        taskOperations(taskArray);

        // Clear the form inputs
        document.getElementById("task").value = '';
        document.getElementById("date").value = '';


    }
}
submitTask.addEventListener("click", submitFunc);


//This will append to form when the user enters task and due date
function appendTask(task) {

    let task1 =
        `
            <div class="spanLine">
                <p class="span1"> ${task.title} </p>

                <p class="span2"> ${task.time} </p>
        
                <button type="submit" class="checkTask2"><img class="checkTask" src="/src/images/check.gif" alt="Completed" title="Completed"
                        attribution="href="https://www.flaticon.com/free-animated-icons/miscellaneous"></button>

                <button type="submit" class="editTask2"><img class="editTask" src="/src/images/edit.gif" alt="Edit Task" title="Edit Task"
                        attribution="https://www.flaticon.com/free-animated-icons/paper"></button>
                
                <button type="submit" class="deleteTask2"><img class="deleteTask" src="/src/images/bin.gif"
                        alt="Delete Task" title="Delete Task"
                        attribution="https://www.flaticon.com/free-animated-icons/document"></button>
            </div>
            `
    document.getElementById("tasks").innerHTML += task1;
}



//This function will be added to the empty array
function newTaskArray(taskText) {

    //Object created
    const task = {
        time: inputDate.value,
        title: taskText,
        completed: false,
    };

    //Push the user input into empty array
    taskArray.push(task);

    return task;
}




// Delete Button
function taskOperations(usersparam) {
    let taskElements = document.getElementsByClassName("spanLine");

    Array.from(taskElements).forEach((event) => {
        event.remove();
    })

    for (let i = 0; i < usersparam.length; i++) {

        let user1 = appendTask(usersparam[i]);

        document.getElementById("tasks").innerHTML + user1;
    }

    taskElements = document.getElementsByClassName("deleteTask2");

    Array.from(taskElements).forEach((el) => {
        el.addEventListener('click', (event) => {
            removeUser(event);
        });
    });
};

function removeUser(event, index) {

    const entry = event.target.parentNode.parentNode;
    taskArray.splice(index, 1);
    entry.remove();
}



//Sort Button

// function sortArrayTasks() {
//     taskArray.sort((a, b) => {
//         let titleA = a.title.toLowerCase();
//         let titleB = b.title.toLowerCase();

//         if (titleA < titleB) {
//             return -1;
//         }
//         if (titleA > titleB) {
//             return 1;
//         }
//         return 0;
//     })
// }

// sortTask.addEventListener('click', () => {
//     sortArrayTasks();
//     console.log(taskArray);
// }); 

