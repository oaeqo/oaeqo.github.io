
let infoElem = document.querySelector(".search-bar > input")
let searchBtn = document.querySelector(".search-bar > a")

searchBtn.onclick = function() {
  let url = 'https://www.google.com/search?q='+infoElem.value;
  window.open(url);
  infoElem.value = null;
}
