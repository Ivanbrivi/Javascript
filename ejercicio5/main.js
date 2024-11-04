let counter = 6;

document.getElementById('addButton').addEventListener('click', function() {
    const newListItem = document.createElement('li');
    
    newListItem.textContent = `Elemento ${counter}`;
    
    newListItem.classList.add('list-group-item');
    
    document.getElementById('lista').appendChild(newListItem);
    
    counter++;
});