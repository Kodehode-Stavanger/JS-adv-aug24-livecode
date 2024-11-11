const taskForm = document.querySelector("#task-form")
const taskInput = document.querySelector("#user-input")
const listContainer = document.querySelector("#list-container")

let tasks = []

// Load data from localStorage
const storedTasks = localStorage.getItem("tasks")
if (storedTasks) {
    tasks = JSON.parse(storedTasks)
    renderList(tasks)
}

taskForm.addEventListener("submit", (e) => {
    e.preventDefault() // hindre refresh
    const formData = new FormData(taskForm) //lagre form data
    tasks.push({
        timeStamp: new Date().toLocaleString("en-UK"),
        description: formData.get("user-input"),
        completed: false
    }) //lager nytt task object og pusher til tasks variabel.
    renderList(tasks)
    saveStateToLocalStorage()
})

function renderList(taskArr) {
    // Empty list
    while (listContainer.firstChild) {
        listContainer.firstChild.remove()
    }
    // ILLEGAL listContainer.innerHTML = ""
    taskArr.forEach((task, i) => {
        // Make the task container
        const taskContainer = document.createElement("div")
        taskContainer.classList.add("task-container")
        // Make the timestamp
        const timeStampElem = document.createElement("p")
        timeStampElem.classList.add("timestamp")
        timeStampElem.textContent = task.timeStamp
        // Make the task description
        const descriptionElem = document.createElement("input")
        descriptionElem.classList.add("description")
        descriptionElem.value = task.description
        descriptionElem.readOnly = true
        // Add task-completed checkbox
        const completedElem = document.createElement("input")
        completedElem.type = "checkbox"
        completedElem.checked = task.completed
        // Add edit-button
        const editButton = document.createElement("button")
        editButton.textContent = "Edit"
        editButton.classList.add("edit-button")
        editButton.addEventListener("click", () => {
            tasks[i].description = descriptionElem.value
            saveStateToLocalStorage()
            descriptionElem.readOnly = !descriptionElem.readOnly
            editButton.textContent = descriptionElem.readOnly ? "Edit" : "Save"
            if (!descriptionElem.readOnly) descriptionElem.focus()
        })
        // Add delete-button
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        deleteButton.classList.add("delete-button")
        // Appends
        taskContainer.append(timeStampElem, descriptionElem, completedElem, editButton, deleteButton)
        listContainer.prepend(taskContainer)
    })
}

function saveStateToLocalStorage() {
    // 
    localStorage.setItem("tasks", JSON.stringify(tasks))
}