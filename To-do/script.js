// Task list arrays
let pendingTasks = [];
let completedTasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const task = {
            text: taskText,
            dateAdded: new Date(),
            completed: false,
        };

        pendingTasks.push(task);
        updateLists();
        taskInput.value = "";
    }
}

// Function to mark a task as complete
function markAsComplete(index) {
    pendingTasks[index].completed = true;
    completedTasks.push(pendingTasks[index]);
    pendingTasks.splice(index, 1);
    updateLists();
}

// Function to delete a task
function deleteTask(list, index) {
    list.splice(index, 1);
    updateLists();
}

// Function to update the task lists
function updateLists() {
    const pendingTasksList = document.getElementById("pending-tasks");
    const completedTasksList = document.getElementById("completed-tasks");

    // Clear current lists
    pendingTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";

    // Populate pending tasks list
    pendingTasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task.text}</span>
            <button onclick="markAsComplete(${index})">Complete</button>
            <button onclick="deleteTask(pendingTasks, ${index})">Delete</button>
        `;
        pendingTasksList.appendChild(li);
    });

    // Populate completed tasks list
    completedTasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="completed">${task.text}</span>
            <span>${task.dateAdded.toLocaleString()}</span>
            <button onclick="deleteTask(completedTasks, ${index})">Delete</button>
        `;
        completedTasksList.appendChild(li);
    });
}

// Initial update of task lists
updateLists();
