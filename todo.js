const todoForm = document.querySelector('form');
const todoList = document.querySelector('#todoList');

// add new entry to localStorage
todoForm.addEventListener('submit', function(event){
    event.preventDefault();
    savedList = JSON.parse(localStorage.getItem('todoList')) || [];
    newEntry = document.querySelector('input').value;
    savedList.push({task: newEntry, completed: false});
    localStorage.setItem('todoList', JSON.stringify(savedList));
    todoForm.reset();

    //reset list and fetch the entries
    todoList.innerHTML = "";
    displayList()

})
// display to-do list from localStorage
function displayList(){
    let existingEntries = JSON.parse(localStorage.getItem('todoList'));
    let id = 0;
    for ( let entry of existingEntries){
        const todoItem = document.createElement('li');
        const removeBtn = document.createElement('button');
        const completeBtn = document.createElement('button');
        removeBtn.innerText = "Remove";
        completeBtn.innerText= "Complete";
        todoItem.innerText = entry.task;
        todoItem.id = id;
        if (existingEntries[id].completed === true){
            todoItem.className = "completed";
        }
        else {
            todoItem.append(completeBtn);
        }
        
        todoItem.append(removeBtn);
        todoList.append(todoItem);
        id++;
    }
}

// remove or complete task
todoList.addEventListener('click', function(event){
    let currentItem = event.target.parentElement.id;
    let existingEntries = JSON.parse(localStorage.getItem('todoList'));
    if (event.target.tagName === 'BUTTON'){
        if (event.target.innerText === 'Remove') {
            event.target.parentElement.remove();
            existingEntries.splice(currentItem, 1);
            localStorage.setItem('todoList', JSON.stringify(existingEntries));
            todoList.innerHTML = "";
            displayList()
        }  
        else {
            event.target.parentElement.className = "completed";
            event.target.remove();
            existingEntries[currentItem].completed = true;
            localStorage.setItem('todoList', JSON.stringify(existingEntries));
        }
    }
     });
// display list on page load
displayList()