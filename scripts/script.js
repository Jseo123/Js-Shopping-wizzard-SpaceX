//const elements
var ImgFirst = document.querySelector(".ImgFirst");
var minitureImg = document.querySelector(".mySlides");
var changeColorsImg = document.querySelector(".cohetes");
const changeSelection2 = document.querySelector(".selection2")


// events
minitureImg.addEventListener("click", change);
changeColorsImg.addEventListener("click", changeColors);
changeSelection2.addEventListener("click", selector2)

// change miniture to ImgFirst
function change (e) {
  ImgFirst.src = e.target.src ;
}


// change color ImgFirst
function changeColors (e) {
  ImgFirst.src = e.target.src;
}

function selector2 () {
  while (changeColorsImg.firstChild) {
    changeColorsImg.removeChild(changeColorsImg.childNodes[0]);
  }
  const img1 = createElement("img")
  img1.setAttribute("src","guidance images\assets\2_falcon_heavy.jpg")
  changeColorsImg.appendChild(img1);
}