let MyArray = [{
    Task: 'Learn JS',
    Completed: false
}, {
    Task: 'Get Promoted',
    Completed: true
}, {
    Task: 'Get money',
    Completed: true
}, {
    Task: 'Rule the world',
    Completed: false
}]

// Append each task to a div

const AppendTask = function (tasks) {
    tasks.forEach(function (task) {
        const taskName = document.createElement('p')
        taskName.textContent = task.Task
        document.querySelector('#tasks').appendChild(taskName)
    })
}

AppendTask(MyArray)

const FilteredText = function (tasks) {
    
}