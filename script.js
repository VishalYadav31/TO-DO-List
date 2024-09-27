// JavaScript code to store the input values
let Tasklist = [];

// Function to save the task
function SaveTask() {
    // Getting input values from the user
    const Taskname = document.querySelector('#inputval').value;
    console.log(Taskname);

    if (Taskname.trim() !== '') {
        const TaskData = {
            taskId: Tasklist.length + 1,
            taskname: Taskname
        };

        // Pushing all the data into the empty array
        Tasklist.push(TaskData);

        // Empty the input values
        document.getElementById('inputval').value = '';

        // Calling the function to render the UI
        RenderUi();
    }
}

// Function to render the UI
function RenderUi() {
    document.getElementById('list').innerHTML = '';

    for (let i = 0; i < Tasklist.length; i++) {
        const ListItem = document.createElement('li');
        ListItem.style.display="flex"
        ListItem.style.justifyContent="space-around";
        ListItem.style.margin="10PX"
        ListItem.style.paddingTop = "10px";

        

        ListItem.classList.add('crud');

        const paraele = document.createElement('p');
        paraele.innerText = Tasklist[i].taskname;

        ListItem.appendChild(paraele);

        document.getElementById('list').appendChild(ListItem);

        const Divele = document.createElement('div');
        Divele.classList.add('task');
       

        const EditIcon = document.createElement('i');
        EditIcon.classList.add('bi');
        EditIcon.classList.add('bi-pen');
        EditIcon.addEventListener('click', EditTask);
        EditIcon.taskId = Tasklist[i].taskId;
        EditIcon.style.marginRight = "10px";
       
        

        const DeleteIcon = document.createElement('i');
        DeleteIcon.classList.add('bi');
        DeleteIcon.classList.add('bi-trash');
        DeleteIcon.addEventListener('click', DeleteTask);
        DeleteIcon.taskId = Tasklist[i].taskId;

        Divele.appendChild(EditIcon);
        Divele.appendChild(DeleteIcon);

        ListItem.appendChild(Divele);
    }
}

// Function to edit the task
function EditTask(e) {
    const val = Tasklist.find((ele) => ele.taskId == e.target.taskId);
    document.querySelector('#inputval').value = val.taskname;
}

// Function to delete the task
function DeleteTask(e) {
    const index = Tasklist.findIndex((ele) => ele.taskId == e.target.taskId);
    Tasklist.splice(index, 1);
    RenderUi();
}

// Function to remove all the tasks
function Removeall() {
    Tasklist.splice(0);
    RenderUi();
}


