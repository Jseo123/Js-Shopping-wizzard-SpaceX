const mainProductbtn = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const cartBtn = document.querySelector(".addToCart");
const removeOne = document.querySelector(".remove-one");
const counter = document.querySelector(".counter");
const spaceX = document.querySelector(".navlogo");
const shopping = document.querySelector(".shopping");
const closeModal = document.querySelector(".closemodal")
const usernameToAdress = document.querySelector(".username-to-adress-button");
const homepage = document.querySelector(".homepage");
const product1 = document.querySelector(".main-carrusel");
const product2 = document.querySelector(".product2");
const product3 = document.querySelector(".product3");
const username = document.querySelector(".username");
const adressSection = document.querySelector(".section3");
const delivery = document.querySelector(".delivery");
const container1 = document.querySelector(".container");
const mainProductPress = mainProductbtn.addEventListener(
  "click",
  contentChange1
);
const usernameToAdressPress = usernameToAdress.addEventListener("click", changeToAdress)
const spaceXclick = spaceX.addEventListener("click", backToHome);
var ImgFirst = document.querySelector(".ImgFirst");
var minitureImg = document.querySelector(".mySlides");
var changePhoto1 = document.querySelector("#photo1");
var changePhoto2 = document.querySelector("#photo2");
var changePhoto3 = document.querySelector("#photo3");
var changePhoto4 = document.querySelector("#photo4");
const changeSelection2 = document.querySelector(".selection2");
const cartPress = cartBtn.addEventListener("click", addToCar);
const remove = removeOne.addEventListener("click", oneLess);
const shoppingPress = shopping.addEventListener("click", addSelection);
const timeOutStarts = shopping.addEventListener("click", timeoutFunction);
const timeInterval = shopping.addEventListener("click", intervalFunction);
const closeModalPress = closeModal.addEventListener("click", hideInterval)

function hideInterval() {
  container1.setAttribute("class", "hide-container");
}

function intervalFunction() {
setInterval(() => {
  container1.setAttribute("class", "modal-container container")
}, 60000);
}



function timeoutFunction() {
  setTimeout(outOfTime,300000)
function  outOfTime() {
  window.location.reload(true);
}
}

let currentRocket = null;

let rocket = {
  modele: "",
  sponsor: "",
};

let price = {
  falcon9: 100000,
  heavy: 200000,
  dragon: 50000,
  bfr: 500000,
  amazon: 8000,
  assembler: 9000,
  google: 2000,
  meta: 20,
};

let order = {
  product: "",
  productPrice: "",
  sponsor: "",
  sponsorPrice: "",
  image: ""
}

function contentChange1() {
  product1.style.display = "flex";
  homepage.style.display = "none";
  return;
}

function backToHome() {
 window.location.reload(true);
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
function changeMiniature(e) {
  ImgFirst.src = e.target.src;
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

// function to hide colunm R
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
function changeImg1(e) {
  ImgFirst.src = e.target.src;
  currentRocket = e.target.getAttribute("value");
}
function changeImg2(e) {
  ImgFirst.src = e.target.src;
  currentRocket = e.target.getAttribute("value");
}
function changeImg3(e) {
  ImgFirst.src = e.target.src;
  currentRocket = e.target.getAttribute("value");
}
function changeImg4(e) {
  ImgFirst.src = e.target.src;
  currentRocket = e.target.getAttribute("value");
}

function addToCar() {
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

function oneLess() {
  if (counter.innerHTML > 0) {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
  }
}


function addSelection() {
  if (currentRocket != null) {
    let array = currentRocket.split("-")
   // order.product = array[0];
   // order.productPrice = price[array[0]];
   // sponsor.product = array[1];
   // order.sponsorPrice = price[array[1]];
   // image = order.product + order.sponsor;
    //console.log(order);
    homepage.style.display = "none";
    product1.style.display = "none";
  username.style.display = "block";
  return;
  }
}

function changeToAdress() {
  homepage.style.display="none";
  username.style.display="none";
  adressSection.style.display="flex";
  return;
  }
