const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); //String으로 감싸주면 어떤 값이든 String으로 변환
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;

    clock.classList.add("clockStyle");
}

// "1".padStart(2,"0") 1 String이 적어도 2자리가 되어야하고 빈 부분은 0으로 채운다.

getClock();
setInterval(getClock, 1000);


//매번 반복 실행하기 위해서 interval 시간이 흐르고 실행하는것 timeout
//setInterval(sayHello, 5000); //불러올 함수, 초 입력(5초=5000ms)