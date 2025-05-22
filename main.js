let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

// Adds a clickable sound
let clickSound = new Audio('click-sound.mp3');

addToDoButton.addEventListener('click', function () {
  clickSound.play();

  let taskText = inputField.value.trim();
  if (taskText !== '') {
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    // Creates circular checkbox for deletion
    let circle = document.createElement('input');
    circle.type = 'checkbox';
    circle.classList.add('circle-checkbox');

    // Create task text to add more tasks
    
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = taskText;

    // ✔ button used for completion of taks
    let checkButton = document.createElement('button');
    checkButton.innerText = '✔';
    checkButton.classList.add('check-btn');

    checkButton.addEventListener('click', function () {
      paragraph.classList.toggle('completed');
    });

    taskDiv.appendChild(circle);
    taskDiv.appendChild(paragraph);
    taskDiv.appendChild(checkButton);
    toDoContainer.appendChild(taskDiv);

    inputField.value = '';
  } else {
    alert('Please enter a task!');
  }
});

// Delete the selected tasks when trash emojiclicked

document.getElementById('deleteSelected').addEventListener('click', function () {
  const allTasks = document.querySelectorAll('.task');
  allTasks.forEach(task => {
    const checkbox = task.querySelector('.circle-checkbox');
    if (checkbox && checkbox.checked) {
      task.remove();
    }
  });
});
