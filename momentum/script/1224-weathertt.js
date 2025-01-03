// let temp = document.querySelector("#temp");
// let place = document.querySelector("#place");
// // let icon = document.querySelector("#icon");

// // iconBox = document.querySelector("#icon");

// let cityname = "seoul";
// let API_KEY = "16e938f53935fbb112e39a582c38e4ba";

// const getWeather = async () => {
//   let response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_key}&lang=kr&units=metric`
//   );
//   let data = await response.json();
//   place.textContent = data.name;
//   temp.textContent = data.main.temp;
//   // icon = data.weather[0].icon;
//   // iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

//   // iconBox.setAttribute("Src", iconUrl);
// }

const API_KEY = "16e938f53935fbb112e39a582c38e4ba";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`
    // &units=metric은 화씨를 섭씨로 변경
    fetch(URL).then(response =>response.json()).then(data =>{
        const place = document.querySelector("#place");
        const temp = document.querySelector("#temp");
        temp.innerText = `${Math.floor(data.main.temp)}℃  ${data.weather[0].main}` ; // 콘솔창 치면 weather이 여기서 나옴
        place.innerText = data.name; // 콘솔창 치면 city가 여기서 나옴
    }); // URL을 불러오기. then을 쓰는 이유는 fetch는 시간이 걸리는 함수거든! 로딩 있다고 보면 됨

}
function onGeoError(){
    alert("위치를 알 수 없어요");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 모든게 ok일 때 실행할 함수, 에러떴을 때 실행할 함수 이렇게 2개 넣어주기


 // console.log( Math.floor(data.main.temp - 273.15) );