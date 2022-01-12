const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

toDoInput.classList.add("todoStyle");


const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
 const li = event.target.parentElement; //target은 클릭된 element 
 li.remove();
 toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
 saveToDos();
}

function paintToDo(newTodo){
 const li = document.createElement("li");
 li.id = newTodo.id;
 const span = document.createElement("span");
 span.innerText = newTodo.text;
 const button = document.createElement("button");
 button.innerText = "❌";
 button.addEventListener("click",deleteToDo);
 li.appendChild(span);
 li.appendChild(button);
 toDoList.appendChild(li);
 
 
}


function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value; //밑에 공란으로 만든다고 해서 이 부분값이 초기화되는게 아니다. 
  //우리가 하는건 input의 value를 새로운 변수에 복사하는 것.

  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
  
  
  
}

toDoForm.addEventListener("submit", handleToDoSubmit);


function sayHello(item) {
  console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); //arrow function 배열 하나당 function을 실행

}


