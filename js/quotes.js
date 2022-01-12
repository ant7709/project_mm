const quotes = [
{//1
  quote:"I never dreamed about success, I worked for it.",
  author: "Estee Lauder ",
},
{//2
  quote:"Do not try to be original, just try to be good. ",
  author: "Paul Rand",
},
{//3
  quote:"Don't be afraid to give up the good to go for the great.",
  author: "John D.Rockefeller",   
},
{//4
  quote:"whatever you do, you have to keep moving forward.",
  author: "Martin Luther King Jr",
},
{//5
  quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
  author: "Thomas Edison",
},
{//6
  quote:"The fastest way to change yourself is to hang out with people who are already the way you want to be.",
  author: "Reid Hoffman",    
},
{//7
  quote:"Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you're not doing a tour of gas stations.",
  author: "Tim O'Reilly", 
},
{//8
  quote:"Some people dream of success, while other people get up every morning and make it happen.",
  author: "Wayne Huizenga",  
},
{//9
  quote:"The only thing worse than starting something and failing... is not starting something,",
  author: "Seth Godin",
},
{//10
  quote:"If you really want to do something, you'll find a way, If you do not, you'll find an excuse.",
  author: "Jim Rohn",
},

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //0~9 배열까지 표시
//Math.round() 정수만 돌려줌. ceil은 올림함. floor은 버림.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

