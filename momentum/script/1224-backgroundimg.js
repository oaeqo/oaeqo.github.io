const images = ['blue.jfif','blue2.jfif','sky.jfif','purple.jfif','stars.jfif','sunset.jfif','wave.jfif','grad_red_garo.jpg','newyork.jfif','pinkgradient.jfif','street.jfif','summer.jfif','window2.jfif','window3.jfif'];

//백그라운드 이미지 변경 함수
const setRandomBG = () => {
  const idx = Math.floor(Math.random() * images.length);
  document.body.style.backgroundImage = `url(./image/${images[idx]})`;
  document.body.style.backgroundSize = 'cover';
}

setRandomBG();