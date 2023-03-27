//Get Element by class and id
const inputTask = document.getElementById("task");
const submitTask = document.getElementById("addTaskButton");
const inputDate = document.getElementById("date");

//Where the tasklist should go
let newTasks = document.getElementById("tasks");




// //Empty Task Array to store input
let taskArray = [];

// function saveTasks() {
//     localStorage.setItem('taskArray', JSON.stringify(taskArray));
// }


//Step 1:
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


//Step 2:
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
        sortArrayTasks(taskArray);
        taskOperations(taskArray);


        // Clear the form inputs
        document.getElementById("task").value = '';
        document.getElementById("date").value = '';
    }
}
submitTask.addEventListener("click", submitFunc);


//Step 3:
//This will append to form when the user enters task and due date
function appendTask(task) {

    let task1 =
        `
        <div class="slide">
            <div class="spanLine">
           
                <button type="checkbox" class="checkTask2" ><img class="checkTask" src="/src/images/check.gif" alt="Completed" title="Completed"
                    attribution="https://www.flaticon.com/free-animated-icons/miscellaneous"></button>

                <p class="span1"> ${task.title} </p>

                <p class="span2"> ${task.time} </p>

                <button type="submit" class="editTask2"><img class="editTask" src="/src/images/edit.gif" alt="Edit Task" title="Edit Task"
                        attribution="https://www.flaticon.com/free-animated-icons/paper"></button>
                
                <button type="submit" class="deleteTask2"><img class="deleteTask" src="/src/images/bin.gif"
                        alt="Delete Task" title="Delete Task"
                        attribution="https://www.flaticon.com/free-animated-icons/document"></button>

            </div>
            </div>
            `
    document.getElementById("tasks").innerHTML += task1;

}


//Step4:
//Sort Function
function sortArrayTasks() {
    taskArray.sort((a, b) => {
        let titleA = a.title.toLowerCase();
        let titleB = b.title.toLowerCase();

        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    })
}



//Step5:
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



//Step 6:
//Edit the task

// function editTasks() {

//     let editElements = document.getElementsByClassName('spanLine');

//     Array.from(editElements).forEach((el) => {
//         el.addEventListener('click', (event) => {
//             taskEdit(event);
//         });
//     });
// }

// function taskEdit() {
//     const editButton = document.getElementsByClassName('editTask2');
//     editButton.textContent = 'Edit';

//     editButton.addEventListener('click', () => {
//       const newTaskName = prompt('Enter the new task name:', inputTask.value);
//       if (newTaskName) {
//         inputTask.value = newTaskName;
//       }
//     });
// }





//Step 7
//Completed button

// function myFunction() {
//     let checkBox = document.getElementsByClassName("check")
//     console.log(checkBox)

//     // If the checkbox is checked, display the output text
//     if (checkBox.checked == true) {
//         task.title.style.textDecoration = "line-through";
//     } 
//     else {
//         task.title.style.textDecoration = "none";
//     }
// }


