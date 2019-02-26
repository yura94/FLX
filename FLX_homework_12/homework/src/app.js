const rootNode = document.getElementById('root');
const addPage = document.getElementById('add_page');
const mainPage = document.getElementById('main_page');
const modifyPage = document.getElementById('modified_page');
const canceledButton = document.getElementById('canceled_button');
const savedButton = document.getElementById('save_button');
const inputField = document.getElementById('add_input');
const checkedDoneList = document.getElementsByClassName('list-of-TODO');
const todoList = document.getElementsByClassName('todo-list');
const emptyList = document.getElementById('empty_list');

let count = 0;

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];
// Your code goes here
addPage.style.display = 'none';
modifyPage.style.display = 'none';

rootNode.style.textAlign = 'center';
rootNode.style.width = '30%';
rootNode.style.margin = 'auto';


const add_task = document.getElementById('button');
add_task.style.borderRadius = '5px';
add_task.style.width = '200px';
add_task.style.height = '40px';
add_task.style.fontSize = '20px';

add_task.onclick = () => {
   location.hash = '/add';   
   window.addEventListener('hashchange' , function(el){
    if(location.href==='http://127.0.0.1:5500/FLX_homework_12/homework/index.html#/add'){
        mainPage.style.display='none';
        addPage.style.display='block';
    }else if(location.href==='http://127.0.0.1:5500/FLX_homework_12/homework/index.html'){
        mainPage.style.display='block';
        addPage.style.display='none';
        }
    });
}

canceledButton.onclick = () => {
    window.history.back();
    mainPage.style.display='block';
}

savedButton.onclick = () => {
    if(inputField.value ===''){
        return;
    }else{

        let list = document.createElement('li');
        todoList[count].appendChild(list);
        list.style.display = 'flex';
        list.style.justifyContent = 'space-between';


        let doneImg = document.createElement('img');
        list.appendChild(doneImg);
        doneImg.src = 'assets/img/todo-s.png';

        let listDescription = document.createElement('span');
        list.appendChild(listDescription);
        listDescription.innerHTML = inputField.value;

        let removedImg = document.createElement('img');
        list.appendChild(removedImg);
        removedImg.src = 'assets/img/remove-s.jpg';

        
        emptyList.style.display = 'none';
        window.history.back();
    }
}

rootNode.appendChild(/* Append your list item node*/);

