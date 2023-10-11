const todoForm = document.querySelector('form');
const todoList = document.querySelector('#todoList');

todoForm.addEventListener('submit', function(event){
    event.preventDefault();
    savedList = [];
    newEntry = document.querySelector('input').value;
    savedList.push(newEntry);
    if (localStorage.getItem('todoList')){
        let existingEntries = JSON.parse(localStorage.getItem('todoList'));
        existingEntries.push(newEntry);
        localStorage.setItem('todoList', JSON.stringify(existingEntries));
    }
    else {
        localStorage.setItem('todoList', JSON.stringify(savedList));
    }
    todoForm.reset();
    todoList.innerHTML = "";
    displayList()

})

function displayList(){
    let existingEntries = JSON.parse(localStorage.getItem('todoList'));
    let id = 0;
    for ( let entry of existingEntries){
        const todoItem = document.createElement('li');
        const removeBtn = document.createElement('button');
        const completeBtn = document.createElement('button');
        removeBtn.innerText = "Remove";
        completeBtn.innerText= "Complete";
        todoItem.innerText = entry;
        todoItem.id = id;
        todoItem.append(completeBtn);
        todoItem.append(removeBtn);
        todoList.append(todoItem);
        id++;
    }
}


todoList.addEventListener('click', function(event){
    console.log(event);
    if (event.target.innerText === 'Remove') {
        event.target.parentElement.remove();
        let currentItem = event.target.parentElement.id;
        console.log(currentItem)
        let existingEntries = JSON.parse(localStorage.getItem('todoList'));
        existingEntries.splice(currentItem, 1);
        localStorage.setItem('todoList', JSON.stringify(existingEntries));
        todoList.innerHTML = "";
        displayList()
    }

    // else {
    //     event.target.parentElement.className = "completed";
    //     event.target.remove();
    // }

     });

displayList()