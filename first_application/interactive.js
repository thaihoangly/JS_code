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

// Button that allow user to interact with program

document.querySelector('#first-button').addEventListener('click', function (e) {
    console.log('yay it works')
    console.log(e.target)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})
