const mainProductbtn = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const spaceX = document.querySelector(".navlogo");
const usernameToAdress = document.querySelector(".username-to-adress-button");
const homepage = document.querySelector(".homepage");
const product1 = document.querySelector(".main-carrusel");
const product2 = document.querySelector(".product2");
const product3 = document.querySelector(".product3");
const username = document.querySelector(".username");
const adress = document.querySelector(".adress");
const delivery = document.querySelector(".delivery");
const mainProductPress = mainProductbtn.addEventListener("click", contentChange1);
const formularyPress = btn2.addEventListener("click", changeToUsername);
const spaceXclick = spaceX.addEventListener("click", backToHome);
var ImgFirst = document.querySelector(".ImgFirst");
var minitureImg = document.querySelector(".mySlides");
var changePhoto1 = document.querySelector("#photo1");
var changePhoto2 = document.querySelector("#photo2");
var changePhoto3 = document.querySelector("#photo3");
var changePhoto4 = document.querySelector("#photo4");
const changeSelection2 = document.querySelector(".selection2");

let productChoise = "";
let colorChoise = "";

console.log(spaceX)

function contentChange1() {
  product1.style.display = "flex";
homepage.style.display ="none";
  return;
}

function changeToUsername() {
  product1.style.display = "none";
  username.style.display = "block";
  return;
}

function backToHome() {
  product1.style.display = "none";
  username.style.display = "none";
  homepage.style.display ="block";
  return;
  
}


// events
minitureImg.addEventListener("click", changeMiniature);
changePhoto1.addEventListener("click", changeImg1);
changePhoto2.addEventListener("click", changeImg2);
changePhoto3.addEventListener("click", changeImg3);
changePhoto4.addEventListener("click", changeImg4);
// changeSelection2.addEventListener("click", selector2)

// change miniture to ImgFirst
function changeMiniature (e) {
  ImgFirst.src = e.target.src ;
  hide();
  switch (e.target.id) {
    case "first":
      changePhoto1.classList.remove("hide");
      changePhoto1.classList.add("show");
      break;
      case "second":
        changePhoto2.classList.remove("hide");
        changePhoto2.classList.add("show");
      break;
      case "thrid":
        changePhoto3.classList.remove("hide");
        changePhoto3.classList.add("show");
      break;
      case "fourth":
        changePhoto4.classList.remove("hide");
        changePhoto4.classList.add("show");
      break;
  }
}

function hide() {
  changePhoto1.classList.remove("show");
  changePhoto2.classList.remove("show");
  changePhoto3.classList.remove("show");
  changePhoto4.classList.remove("show");
  changePhoto1.classList.add("hide");
  changePhoto2.classList.add("hide");
  changePhoto3.classList.add("hide");
  changePhoto4.classList.add("hide");
}

// change color ImgFirst
function changeImg1 (e) {
  ImgFirst.src = e.target.src;
}
function changeImg2 (e) {
  ImgFirst.src = e.target.src;
}
function changeImg3 (e) {
  ImgFirst.src = e.target.src;
}
function changeImg4 (e) {
  ImgFirst.src = e.target.src;
}
// function selector2 () {
//   while (changeColorsImg.firstChild) {
//     changeColorsImg.removeChild(changeColorsImg.childNodes[0]);
//   }
//   const img1 = document.createElement("img");
//   img1.src = "images\img1.webp";
//   document.getElementById("cohetes").appendChild(img1);
  // changeColorsImg.appendChild(img1);
