/***
 * 테마모드 클릭하면 라이트모드와 다크모드 전환
 */
const MODE_KEY = "mode";
const tema = document.querySelector('.mode');

const deleteMode = () => {
  localStorage.removeItem(MODE_KEY);
}
const saveMode = () =>{
  localStorage.setItem(MODE_KEY, "dark");
}
const loadMode = () => {
  return localStorage.getItem(MODE_KEY);
}

tema.addEventListener("click",()=>{
  //바뀌어야 하는 객체 : body
  document.body.classList.toggle("dark");
  //현재 상태를 로컬 스토리지에 저장
  if(document.body.classList.contains('dark')) {
    //있으면 다크
    saveMode();
  } else{
    //없으면 라이트
    deleteMode();
  }
});

const mode_init = () => {
  let mode = loadMode(); //값 or null
  if( mode ) {
    //입력된 모드가 있음 : dark
    document.body.classList.add("dark");
  } else {
    //입력된 모드가 없음 ; light
    document.body.classList.remove("dark");
  }
}
mode_init();