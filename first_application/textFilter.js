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

// const p = document.querySelector('p')
// p.remove()

// Add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'this is a new element from JS'
// document.querySelector('body').appendChild(newParagraph)

const ArrayTrueLength = MyArray.filter(task => task.Completed === false)

// Adding the length of the TODO
const TodoLength = document.createElement('h3')
TodoLength.textContent = `you have ${ArrayTrueLength.length} task left`
document.querySelector('body').appendChild(TodoLength)

// Adding TODO that are not completed
// document.querySelector('body').appendChild(ArrayTrueLength.Task)
ArrayTrueLength.forEach(function (p) {
    const PContent = document.createElement('p')
    PContent.textContent = p.Task
    document.querySelector('body').appendChild(PContent)
})