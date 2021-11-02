//const elements
var ImgFirst = document.querySelector(".ImgFirst");
var minitureImg = document.querySelector(".mySlides");
var

// chance img miniture to First img
minitureImg.addEventListener("click", change);

// change miniture to ImgFirst
function change (e) {
  ImgFirst.src = e.target.src ;
}


// change color ImgFirst
