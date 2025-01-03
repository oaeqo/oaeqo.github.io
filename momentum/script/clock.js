const clockElem = document.querySelector('.clock');
const getClock = () => {
  //시계설정
  const today = new Date(); //현재시간
  //시,분,초 가져오기
  //class = clock인 객체의 텍스트를 변경
  //주요: 시,분,초는 2자리씩
  const hh = String(today.getHours()).padStart(2, "0");
  const mm = String(today.getMinutes()).padStart(2, "0");
  const ss = String(today.getSeconds()).padStart(2, "0");
  clockElem.textContent = `${hh}:${mm}:${ss}`;
}
getClock();
setInterval( getClock, 1000 );