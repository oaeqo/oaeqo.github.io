
const quotes = [
  {
    quote  : "언제나 현재에 집중할수 있다면 행복할것이다.",
    author : "파울로 코엘료"
  },
  {
    quote  : "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
    author : "앙드레 말로"
  },
  {
    quote  : "사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다.",
    author : "생떽쥐베리"
  },
  {
    quote  : "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
    author : "L.론허바드"
  },
  {
    quote  : "내가 헛되이 보낸 오늘은 어제 죽어간 이들이 그토록 바라던 하루이다. 단 하루면 인간적인 모든 것을 멸망시킬수도 다시 소생시킬수도 있다.",
    author : "소포클레스"
  }
];

//랜덤 : Math.random(): 0~1사이의 값으로 출력. (실수) *0~9까지 출력: *10, 100까지 출력: *100, 배열이면 Math.floor(숫자버림)(Math.random() * 배열.length)
const num = Math.floor(Math.random() * quotes.length);
console.log(num);


const today = quotes[num];
// console.log( today.quote ); 

//객체 가져오기
const quoteElem = document.querySelector(".quote > span:nth-of-type(1)");
quoteElem.textContent = today.quote;
const authorElem = document.querySelector(".quote > span:nth-of-type(2)");
authorElem.textContent = ` - ${today.author}`;

