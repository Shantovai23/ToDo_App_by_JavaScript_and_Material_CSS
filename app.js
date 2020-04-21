const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const taskInput = document.querySelector("#task");
const clear = document.querySelector("#clear");
const filter = document.querySelector("#filter");

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clear.addEventListener('click', removeAll);
    filter.addEventListener('keyup', filterTask);
}

function addTask(e) {
    if (taskInput.value === "") {
        alert('Provide a Task');
        return false;
    }

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"><i>';
    li.appendChild(link);
    taskList.appendChild(li);
    taskInput.value = ""

    e.preventDefault()
}

function removeTask(e) {
    //console.log(e.target);

    if (e.target.parentElement.classList.contains('delete-item'));
    e.target.parentElement.parentElement.remove();
}

function removeAll(e) {
    taskList.innerHTML = ""
    e.preventDefault();
}

function filterTask(e) {
    text = e.target.value.toLowerCase();
    document.querySelectorAll(".collection-item").forEach(function (task) {
        const item = task.firstChild.textContent;
        //console.log(item);
        if (item.toLocaleLowerCase().indexOf(text) != -1) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}

