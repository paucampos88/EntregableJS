const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');

function createTaskElement(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;
  li.innerHTML += '<button onclick="markAsCompleted(this)">Completada</button>';
  li.innerHTML += '<button onclick="removeTask(this)">Eliminar</button>';
  return li;
}

function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText !== '') {
    const li = createTaskElement(taskText);
    taskList.appendChild(li);
    newTaskInput.value = '';
  }
}

function markAsCompleted(button) {
  const li = button.parentElement;
  li.classList.toggle('completed');
}

function removeTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}
 