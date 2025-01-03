const TODOS_KEY =  "todos";
let todo_list = []; //{id,input.value}
const todoForm = document.querySelector("#todoForm");
const inputTodo = document.querySelector("#todoForm > input");
const todoList = document.querySelector("#todoList");

const storageSave = () => {
  const strObj = JSON.stringify(todo_list);
  localStorage.setItem(TODOS_KEY, strObj);
}
const storageLoad = () => {
  return localStorage.getItem(TODOS_KEY);
}

const saveToDoList = (num,txt) => {
  const obj = { id: num, value:txt };
  todo_list.push(obj);
  storageSave();
}

const handlerDelBtn = (event) =>{
  const delID = event.target.parentElement.id;
  todo_list = todo_list.filter( (item)=>{
    return delID != item.id;
  });
  event.target.parentElement.remove();
  // console.log(todo_list);
  storageSave();
}

const addTodoList = (id,value) => {
  //li로 추가
  const li = document.createElement('li');
  li.id = id;
  // checkbox 변경 ↓
  const check = document.createElement("input");
  check.type = "checkbox";
// checkbxo로 변경 => 속성 추가해주기 ↑
  const spanElem = document.createElement('span');
  spanElem.textContent =  value;
  const btnElem = document.createElement('button');
  btnElem.innerHTML = "&times";
  btnElem.className = "todo-btn";
  btnElem.addEventListener("click",handlerDelBtn);
  // checkbox 변경 ↓
  li.appendChild(check);
  // checkbxo로 변경 => 속성 추가해주기 ↑
  li.appendChild(spanElem);
  li.appendChild(btnElem);
  todoList.appendChild(li);
  //todo_list 배열 추가 및 로컬스토리지에 저장
  saveToDoList(id,value);
}

const handlerTodoSubmit = (event) => {
  event.preventDefault();
  let value = inputTodo.value;
  inputTodo.value = null;
  addTodoList(Date.now(),value);
}

const todo_init = () =>{
  let loadTodos = storageLoad();
  if( loadTodos ) {
    const obj = JSON.parse(loadTodos);
    obj.forEach( (item) => {
      addTodoList(item.id, item.value);
    })
  }
  todoForm.addEventListener("submit",handlerTodoSubmit);
}

todo_init();