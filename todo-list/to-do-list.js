const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add Todo Item
function addTodo() {
  const task = todoInput.value.trim();
  if(task === '') return;

  const li = document.createElement('li');
  li.className = 'todo-item';
  li.innerHTML = `${task} <button class="delete-btn"><i class="fas fa-trash"></i></button>`;

  // Complete task on click
  li.addEventListener('click', (e) => {
    if(!e.target.classList.contains('delete-btn')) {
      li.classList.toggle('completed');
    }
  });

  // Delete button
  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });

  // Animate item
  li.style.opacity = 0;
  li.style.transform = 'translateY(-20px)';
  todoList.appendChild(li);
  setTimeout(() => {
    li.style.opacity = 1;
    li.style.transform = 'translateY(0)';
    li.style.transition = 'all 0.4s ease';
  }, 50);

  todoInput.value = '';
}

// Event Listeners
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') addTodo();
});
