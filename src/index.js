import './style.css';
import { enterTxt, activities } from './modules/functions.js';

const add = document.querySelector('.btn-hand');
const deleteBtn = document.querySelector('.btn-elm');
const listItems = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];

let id = 1;
add.addEventListener('click', (e) => {
  e.preventDefault();
  if (enterTxt.value !== '') {
    const task = {
      description: `${enterTxt.value}`,
      completed: false,
      index: id,
    };
    listItems.push(task);

    const tasks = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
    tasks.push(task);
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i + 1;
    }
    localStorage.setItem('data', JSON.stringify(tasks));
  }
  id += 1;
  activities();
});

deleteBtn.addEventListener('click', (elem) => {
  elem.preventDefault();
  const notRemoved = listItems.filter((x) => x.completed === false);

  for (let i = 0; i < notRemoved.length; i += 1) {
    notRemoved[i].index = i + 1;
  }
  localStorage.setItem('data', JSON.stringify(notRemoved));
  activities();
});