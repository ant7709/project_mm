//querySelector는 클래스와 아이디를 붙여야하지만 getElements는 쓸필요X id 찾는걸 앎.
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //값을 저장하는 용도인 중요하지 않은 변수는 대문자로. only String으로만 되어있다.
const USERNAME_KEY = "username";

function onLoginSubmit(event){ //argument event는 지금 function 실행하고 나서 나오는 이벤트
   event.preventDefault(); //이벤트의 초기값을 방지해줌 (자동으로 submit하는걸 방지)
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username); //키값을 정해주고 값인 username을 작성
   paintGreetings(username);  
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; //~ 할때 ` 사용해야함(백틱) String과 변수를 합쳐줌.
  //greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add("greetingStyle");
}

//1)
const savedUsername = localStorage.getItem(USERNAME_KEY); //반복되는 string을 변수명으로 바꾸는건 틀리면 에러 안내를 받을 수 있으니까

if (savedUsername === null){
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  paintGreetings(savedUsername);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}



// function handleLinkClick(){
//   alert("Click");// alert는 모든 동작을 일시정지 시켜줌. alert창을 ok하면 사이트로 이동
// }
