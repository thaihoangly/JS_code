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

const objectFilters = function () {
    searchText: ''
}

const renderNotes = function (MyArray, filters) {
    const filteredNotes = MyArray.filter(function (note) {
        return note.Task.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.Task
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(MyArray, objectFilters)

document.querySelector('#first-button').addEventListener('click', function (e) {
    console.log('yay it works')
    console.log(e.target)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    objectFilters.searchText = e.target.value
    renderNotes(MyArray, objectFilters)
})
