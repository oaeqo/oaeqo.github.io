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

const saveToDoList = (num,txt,flag) => {
  const obj = { id: num, value:txt, check:flag };
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

const updateCheckBox = (id,check) => {
  // todo_list = todo_list.map( (item)=>{
  //   if( item.id == id){
  //     return { ...item, check };
  //   }
  //   return item;
  // });

  /** 
   * id를 비교 하고, id가 같은 항목을 찾아서 check 여부를 변경 
   */
  for( let i=0; i<todo_list.length ; i++) {
    if( todo_list[i].id == id ){
      todo_list[i].check = check;
      break;  //필요항목을 찾았으면 이제 그만
    }
  }
  storageSave();
}
const handlerCheck = (event) => {
  //this와 같은 역할
  const changeID = event.target.parentElement.id;
  const check = event.target.checked;
  updateCheckBox(changeID, check);
}

const addTodoList = (id,value,check) => {
  //li로 추가
  const li = document.createElement('li');
  li.id = id;
  // checkbox 변경 ↓
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = check;
  input.addEventListener("change",handlerCheck);
// checkbxo로 변경 => 속성 추가해주기 ↑
  const spanElem = document.createElement('span');
  spanElem.textContent =  value;
  const btnElem = document.createElement('button');
  btnElem.innerHTML = "&times";
  btnElem.className = "todo-btn";
  btnElem.style.padding = "3px";
  btnElem.addEventListener("click",handlerDelBtn);
  // checkbox 변경 ↓
  li.appendChild(input);
  // checkbxo로 변경 => 속성 추가해주기 ↑
  li.appendChild(spanElem);
  li.appendChild(btnElem);
  todoList.appendChild(li);
  //todo_list 배열 추가 및 로컬스토리지에 저장
  saveToDoList(id,value,check);
}

const handlerTodoSubmit = (event) => {
  event.preventDefault();
  let value = inputTodo.value;
  inputTodo.value = null;
  addTodoList(Date.now(),value,false);
}

const todo_init = () =>{
  let loadTodos = storageLoad();
  if( loadTodos ) {
    const obj = JSON.parse(loadTodos);
    obj.forEach( (item) => {
      addTodoList(item.id, item.value, item.check);
    })
  }
  todoForm.addEventListener("submit",handlerTodoSubmit);
}

todo_init();