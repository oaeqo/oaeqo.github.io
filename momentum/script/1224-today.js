

const setTodayAsDefault = ()=>{
  //오늘날짜 정보
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const today = new Date();
  const year = today.getFullYear();  //년
  const month = today.getMonth()+1;  //월
  const day = today.getDate();       //일
  const yoil = today.getDay(); //요일
  const todayElem = document.querySelector('.calendar');
  todayElem.textContent = `${year}년 ${month}월 ${day}일 ${(week[yoil])}`;
};


const initial = ()=>{
  setTodayAsDefault();
}
initial();