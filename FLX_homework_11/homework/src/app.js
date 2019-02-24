let rootNode = document.getElementById('root');

// Your code goes here
let counter = 0;
const MAX = 10;

let container = document.createElement('div');
container.setAttribute('id', 'wrapper');
rootNode.appendChild(container);

let title = document.createElement('p');
title.setAttribute('id', 'title');
container.appendChild(title);
title.textContent = 'TODO Cat List';

let inputContainer = document.createElement('div');
inputContainer.setAttribute('id', 'inputContainer');
container.appendChild(inputContainer);

let inputElement = document.createElement('input');
inputElement.setAttribute('id', 'inputText');
inputElement.setAttribute('placeholder', 'Add New Action');

let buttonPlus = document.createElement('button');
buttonPlus.setAttribute('id', 'buttonPlus');

let add_box = document.createElement('i');
add_box.setAttribute('class', 'material-icons');
add_box.textContent = 'add_box';

inputContainer.appendChild(inputElement);
inputContainer.appendChild(buttonPlus);
buttonPlus.appendChild(add_box);

let task_container = document.createElement('div');
task_container.setAttribute('id', 'taskContainer');
container.appendChild(task_container);

let task_list = document.createElement('ul');
task_list.setAttribute('class', 'task_list');
task_container.appendChild(task_list);

let cat_img = document.createElement('img');
cat_img.setAttribute('id', 'cat_img');
container.appendChild(cat_img);
cat_img.src = './assets/img/cat.png';

buttonPlus.addEventListener('click', onAddButtonClick);

function onAddButtonClick(ev) {
  if (inputElement.value === '') {
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.classList.add('taskItem');

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapperDiv');

  const checkBox = document.createElement('button');
  checkBox.classList.add('material-icons');
  checkBox.innerText = 'check_box_outline_blank';
  checkBox.addEventListener('click', onCheckClick);

  const taskItemSpan = document.createElement('span');
  taskItemSpan.classList.add('done');
  taskItemSpan.innerText = inputElement.value;

  const taskDelete = document.createElement('button');
  taskDelete.classList.add('material-icons');
  taskDelete.classList.add('delete');
  taskDelete.innerText = 'delete';
  taskDelete.addEventListener('click', onDeleteButtonClick);

  wrapper.appendChild(checkBox);
  wrapper.appendChild(taskItemSpan);
  taskItem.appendChild(wrapper);
  taskItem.appendChild(taskDelete);

  task_list.appendChild(taskItem);
  counter++;

  if (counter >= MAX) {
    buttonPlus.disabled = true;
  }

  inputElement.value = '';
}

function onDeleteButtonClick(ev) {
  ev.target.parentElement.remove();
  counter--;
  if (counter <= MAX) {
    buttonPlus.disabled = false;
  }
}

function onCheckClick(ev) {
  ev.target.innerText = 'check_box';
  ev.target.parentElement
    .querySelector('.delete')
    .setAttribute('disabled', 'disabled');
}
