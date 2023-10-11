const todoForm = document.querySelector('form');
const todoList = document.querySelector('#todoList');

todoForm.addEventListener('submit', function(event){
    event.preventDefault();
    const todoItem = document.createElement('li');
    const removeBtn = document.createElement('button');
    const completeBtn = document.createElement('button');
    removeBtn.innerText = "Remove";
    completeBtn.innerText= "Complete";
    todoItem.innerText = document.querySelector('input').value;
    todoItem.append(completeBtn);
    todoItem.append(removeBtn);
    todoList.append(todoItem);
    todoForm.reset();

})

todoList.addEventListener('click', function(event){
    console.log(event);
    if (event.target.innerText === 'Remove') {
        event.target.parentElement.remove();
    }
    else {
        event.target.parentElement.className = "completed";
        event.target.remove();
    }

    });