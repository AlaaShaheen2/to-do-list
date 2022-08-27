const enterTxt = document.querySelector('.enter-txt');
const todoList = document.querySelector('.to-do');

function activities() {
  todoList.innerHTML = '';
  const listItems = localStorage.getItem('data')
    ? JSON.parse(localStorage.getItem('data'))
    : [];
  for (let i = 0; i < listItems.length; i += 1) {
    const inp = document.createElement('input');
    inp.setAttribute('type', 'checkbox');
    inp.classList.add('check');
    inp.id = i + 1;
    if (listItems[i].completed) {
      inp.checked = true;
    }

    const inp1 = document.createElement('input');
    inp1.value = `${listItems[i].description}`;
    inp1.classList.add('desc');
    inp1.setAttribute('type', 'text');
    if (listItems[i].completed) {
      inp1.style.textDecorationLine = 'line-through';
    }

    inp1.setAttribute('readOnly', 'readOnly');
    inp1.classList.add('desc');

    const update = document.createElement('button');
    update.id = i + 1;
    update.innerHTML = '🖊️';
    update.classList.add('update-btn');

    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.id = i + 1;

    const removeBtn = document.createElement('button');
    removeBtn.id = i + 1;
    removeBtn.classList.add('delete-btn');
    removeBtn.innerHTML = '🗑️';

    listItem.appendChild(inp);
    listItem.appendChild(inp1);
    listItem.appendChild(update);
    listItem.appendChild(removeBtn);
    todoList.appendChild(listItem);

    enterTxt.value = '';
    inp.addEventListener('input', (event) => {
      if (inp.checked) {
        const checkedId = event.target.id;
        const data = JSON.parse(localStorage.getItem('data'));
        data[checkedId - 1].completed = true;
        inp1.style.textDecorationLine = 'overline';
        localStorage.setItem('data', JSON.stringify(data));
      } else if (!inp.checked) {
        const noCheckedId = event.target.id;
        const data = JSON.parse(localStorage.getItem('data'));
        data[noCheckedId - 1].completed = false;
        inp1.style.textDecorationLine = 'none';
        localStorage.setItem('data', JSON.stringify(data));
      }
      window.location.reload();
    });

    update.addEventListener('click', (event) => {
      if (update.innerHTML === '🖊️') {
        inp1.removeAttribute('readonly');
        inp1.focus();
        update.innerHTML = '💾';
      } else {
        const updated = inp1.value;
        const idNum = event.target.id;
        inp1.setAttribute('readonly', 'readonly');
        update.innerHTML = '🖊️';

        const data = JSON.parse(localStorage.getItem('data'));
        data[idNum - 1].description = `${updated}`;
        localStorage.setItem('data', JSON.stringify(data));
      }
    });

    removeBtn.addEventListener('click', (e) => {
      if (e.target.textContent === '🗑️') {
        e.target.parentElement.remove();
        const todoid = e.target.id;
        const todoId = Number(todoid);
        const data = JSON.parse(localStorage.getItem('data'));
        const notRemoved = data.filter((x) => x.index !== todoId);
        for (let i = 0; i < notRemoved.length; i += 1) {
          notRemoved[i].index = i + 1;
        }
        localStorage.setItem('data', JSON.stringify(notRemoved));
      }
    });
  }
}

window.addEventListener('load', () => {
  activities();
});

export { enterTxt, activities };
