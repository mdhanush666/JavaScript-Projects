
const todoList = document.querySelector('.todoList');

const btn = document.querySelector('button');

let txt = document.getElementById('txt');

let arr = [];
let updateIndex;

window.onload = () =>{
  arr = JSON.parse(localStorage.getItem('todos')) || [];
  arr.forEach(ele => addTasks(ele));
}

txt.addEventListener('input', () =>{
  if(txt.value == ''){
    btn.textContent = 'ADD';
  }
});

btn.addEventListener('click',() => {
  if(txt.value != '' && btn.textContent === 'ADD'){  
    arr.push(txt.value);  
    localStorage.setItem('todos',JSON.stringify(arr));
    addTasks(txt.value);
    txt.value = null;
  }
  // Update.........
  else if(txt.value != '' && btn.textContent == 'UPDATE'){
    arr[updateIndex] = txt.value;
    localStorage.setItem('todos', JSON.stringify(arr)); 
    location.reload();
  }
})

function addTasks(task){

  let para = document.createElement('p');
  para.textContent = task;

  let edit = document.createElement('span');
  edit.textContent = '⇙';
  edit.id = 'edit';

  let tick = document.createElement('span');
  tick.textContent = '✓';
  tick.id = 'tick';

  let del = document.createElement('span');
  del.textContent = '✕';
  del.id = 'delete';

  para.appendChild(edit);
  para.appendChild(tick);
  para.appendChild(del);

  todoList.appendChild(para);
  
  para.addEventListener('mouseover', () =>{
    edit.style = "visibility:visible";
    tick.style = "visibility:visible";
    del.style = "visibility:visible";
  });
  para.addEventListener('mouseout', () =>{
    edit.style = "visibility:hidden";
    tick.style = "visibility:hidden";
    del.style = "visibility:hidden";
  });

  del.addEventListener('click', () =>{
    remove(task);
    todoList.removeChild(para);
  });

  tick.addEventListener('click', () =>{
    para.style = "text-decoration:line-through";
    remove(task);
  });

  edit.addEventListener('click', () =>{
    txt.value = task;    
    updateIndex = arr.indexOf(task);
    btn.textContent = 'UPDATE';
    txt.focus();
  });

}

function remove(task){
  let index = arr.indexOf(task);
  arr.splice(index,1);

  localStorage.setItem('todos',JSON.stringify(arr));
}

