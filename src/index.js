import './style.css';

const todos = [
  {
    description: 'Finish all the projects',
    completed: false,
    index: 0,
  },
  {
    description: 'Workout!',
    completed: false,
    index: 1,
  },
  {
    description: 'Sleep!',
    completed: false,
    index: 2,
  },
];

const todo = document.getElementById('to-do');

window.addEventListener('load', () => {
  for (let i = 0; i < todos.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    const inp = document.createElement('input');
    inp.setAttribute('type', 'checkbox');
    inp.classList.add('check');
    inp.id = 'check';

    const lbl = document.createElement('label');
    lbl.textContent = `${todos[i].description}`;
    lbl.classList.add('description');
    lbl.setAttribute('for', 'check');

    const update = document.createElement('button');
    update.classList.add('update-btn');
    update.innerHTML = '<i class="fa fa-edit"></i>';

    listItem.appendChild(inp);
    listItem.appendChild(lbl);
    listItem.appendChild(update);
    todo.appendChild(listItem);
  }
});
