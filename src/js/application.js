//Get Element by class and id
let task;
const inputTask = document.getElementById("task");
const submitTask = document.getElementById("addTaskButton");
const inputDate = document.getElementById("date");


//Where the tasklist should go
let newTasks = document.getElementById("tasks");


// //Empty Task Array to store input
let taskArray = JSON.parse(localStorage.getItem('tasks')) || [];


//Where the user input will be stored (Local Storage)
function saveTasks(taskArray) {
    localStorage.setItem('taskArray', JSON.stringify(taskArray));
}



//Step 1:
//This Class will be pushed into the empty array
class TaskFunction {

    _time;
    get time() {
        return this._time;
    }
    set time(inputDate) {
        this._time = inputDate.value;
    }
    _title;
    get title() {
        return this._title;
    }
    set title(inputTask) {
        this._title = inputTask.value;
    }
    _completed;
    get completed() {
        return this._completed;
    }
    set completed(value) {
        this._completed = value;
    }


    constructor(time, title, completed = false) {
        this._time = time;
        this._title = title;
        this._completed = completed;
    }

    toggleCompleted = () => {
        this._completed = !this._completed;
    }

}




//This is a function for all the new tasks the users will enter on the app

function createTask() {
    const task = new TaskFunction(inputDate.value, inputTask.value, false);
    taskArray.push(task);
}



//Step 2:
//Function for what happens when user clicks on Add Task
function submitFunc() {


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
        //This is where the task is created, appended, sorted, deleted, edited and completed all on one page.
        
        createTask(taskArray);
        appendTask(taskArray);
        sortArrayTasks(taskArray);
        taskDeleteButton(taskArray);
        taskEditButton(taskArray);
        taskCompletedButton(taskArray);
        saveTasks(taskArray);


        // Clear the form inputs
        document.getElementById("task").value = '';
        document.getElementById("date").value = '';

        saveTasks(taskArray);

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
           
                <button type="submit" class="checkTask2" ><img class="checkTask" src="/src/images/check.gif" alt="Completed" title="Completed"
                    attribution="https://www.flaticon.com/free-animated-icons/miscellaneous"></button>

                <p class="span1"> ${task._title} </p>

                <p class="span2"> ${task._time} </p>

                <button type="submit" class="editTask2"><img class="editTask" src="/src/images/edit.gif" alt="Edit Task" title="Edit Task"
                        attribution="https://www.flaticon.com/free-animated-icons/paper"></button>
                
                <button type="submit" class="deleteTask2"><img class="deleteTask" src="/src/images/bin.gif"
                        alt="Delete Task" title="Delete Task"
                        attribution="https://www.flaticon.com/free-animated-icons/document"></button>

            </div>
            </div>
            `
    document.getElementById("tasks").innerHTML += task1;

    saveTasks(taskArray);
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
    saveTasks(taskArray);
}



//Step5:
// Delete Button
function taskDeleteButton(usersparam) {
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
    saveTasks(taskArray);
};

function removeUser(event, index) {
    const entry = event.target.parentNode.parentNode;
    taskArray.splice(index, 1);
    entry.remove();
}


//Step 6:
//Edit the task
function taskEditButton() {

    let taskElements = document.getElementsByClassName("editTask2");

    Array.from(taskElements).forEach((el, index) => {
        el.addEventListener('click', () => {
            finalEdit(index);

        });
    });
    saveTasks(taskArray);
};

//Prompts and validation. Old tasks will be deleted if clicked on the edit button
function finalEdit(index) {

    let firstCheck = false;
    let secondCheck = false;

    while (firstCheck == false) {

        const newTaskName = prompt('Enter your New Task:');

        if (newTaskName !== "") {

            taskArray[index]._title = newTaskName;

            for (let i = 0; i < taskArray.length; i++) {

                let user1 = appendTask(taskArray[index]);

                document.getElementById("tasks").innerHTML + user1;
            }
            //This part will make sure that the other buttons work after the task has been edited
            taskDeleteButton(taskArray);
            taskCompletedButton(taskArray);
            firstCheck = true;
            saveTasks(taskArray);
        }
        else if (newTaskName == "") {
            alert("Enter your new Task");
        }

    }

    while (secondCheck == false) {

        const newDate = prompt('Enter a New Date in the following format:\nExample 2023-04-12');

        if (newDate !== "" && parseInt(newDate)) {

            taskArray[index]._time = newDate;

            for (let i = 0; i < taskArray.length; i++) {

                let user1 = appendTask(taskArray[index]);

                document.getElementById("tasks").innerHTML + user1;
            }
            //This part will make sure that the other buttons work after the task has been edited
            taskDeleteButton(taskArray);
            taskCompletedButton(taskArray);
            secondCheck = true;
            saveTasks(taskArray);
        }
        else if (isNaN(newDate)) {
            alert("Enter a date in the correct format: \nExample 2023-04-12");
        }

    }

}


//Step 7
//Completed button

function taskCompletedButton() {

    let taskCompleted = document.getElementsByClassName("checkTask2");

    Array.from(taskCompleted).forEach((el, index) => {
        el.addEventListener('click', () => {
            finalCompleted(index);
        });
    });

};

//A line will go through the title and time if the 'checkTask2' button is clicked.
function finalCompleted(index) {

    let taskElements = document.getElementsByClassName("spanLine");
    let taskElement = taskElements[index];

    if (taskElement.classList.contains('completed')) {
        //Here if you click on the checkTask2 button again, the line will be removed
        taskElement.classList.remove('completed');
        taskElement.style.textDecoration = 'none';
        alert("Keep going! \nYou're on your way to complete the task");


    }
    else {
        //Here the checkTask2 button will add a line through the title and time if completed
        taskElement.classList.add('completed');
        taskElement.style.textDecoration = 'line-through';
        alert(`Well done! \nYou have completed the task`);

    }
}
