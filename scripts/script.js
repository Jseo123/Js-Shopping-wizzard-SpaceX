const mainProductbtn = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const giftBtn = document.querySelector(".estimation")
// const cartBtn = document.querySelector(".addToCart");
const deliveryToFinish = document.querySelector(".finishbtn");
const toDelivery = document.querySelector(".todelivery");
const removeOne = document.querySelector(".remove-one");
const counter = document.querySelector(".counter");
const spaceX = document.querySelector(".navlogo");
const shopping = document.querySelector(".shopping");
const closeModal = document.querySelector(".closemodal");
const usernameToAdress = document.querySelector(".username-to-adress-button");
const deliveryToThanks = document.querySelector(".thankstobtn");
const finishSection = document.querySelector(".finish");
const homepage = document.querySelector(".homepage");
const product1 = document.querySelector(".main-carrusel");
const product2 = document.querySelector(".product2");
const product3 = document.querySelector(".product3");
const username = document.querySelector(".username");
const adressSection = document.querySelector(".section3");
const delivery = document.querySelector(".deliverypage");
const container1 = document.querySelector(".container");
const thankYouSection = document.querySelector(".thanks");
const giftElement = document.querySelector(".ffship")
const priceFinal = document.querySelector(".price0");
const priceFinal1 = document.querySelector(".price1");
const priceFinal2 = document.querySelector(".price2");
const priceFinal3 = document.querySelector(".price3");
// const priceFinal1 = document.querySelector(".price01");
// const priceFinal21 = document.querySelector(".price21");
// const priceFinal31 = document.querySelector(".price31");
const giftBtnPress =giftBtn.addEventListener("click", tooglingGift)
const deliveryToFinishPress = deliveryToFinish.addEventListener(
  "click",
  changeToFinish
);
const toDeliveryPress = toDelivery.addEventListener("click", adressToDelivery);
const mainProductPress = mainProductbtn.addEventListener(
  "click",
  contentChange1
);
const usernameToAdressPress = usernameToAdress.addEventListener(
  "click",
  changeToAdress
);
const spaceXclick = spaceX.addEventListener("click", backToHome);
var ImgFirst = document.querySelector(".ImgFirst");
var minitureImg = document.querySelector(".mySlides");
var changePhoto1 = document.querySelector("#photo1");
var changePhoto2 = document.querySelector("#photo2");
var changePhoto3 = document.querySelector("#photo3");
var changePhoto4 = document.querySelector("#photo4");
const changeSelection2 = document.querySelector(".selection2");
// const cartPress = cartBtn.addEventListener("click", addToCar);
// const remove = removeOne.addEventListener("click", oneLess);
const shoppingPress = shopping.addEventListener("click", addSelection);
const timeOutStarts = shopping.addEventListener("click", timeoutFunction);
const timeInterval = shopping.addEventListener("click", intervalFunction);
const closeModalPress = closeModal.addEventListener("click", hideInterval);
const deliveryToThanksPress = deliveryToThanks.addEventListener(
  "click",
  changToThanks
);

function hideInterval() {
  container1.setAttribute("class", "hide-container container");
}

function intervalFunction() {
  setInterval(() => {
    container1.setAttribute("class", "modal-container container");
  }, 60000);
}



function timeoutFunction() {
  setTimeout(outOfTime, 300000);

  function outOfTime() {
    window.location.reload(true);
  }
}

//radius buttons
const freeShipping = document.querySelector("#freeShipping");
const fastShipping = document.querySelector("#fastShipping");
const expressShipping = document.querySelector("#expressShipping");
freeShipping.addEventListener("click", shippingDate);
fastShipping.addEventListener("click", shippingDate);
expressShipping.addEventListener("click", shippingDate);

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
  fifa: 20,
};

function Order(product, priceProduct, sponsor, priceSponsor) {
  this.product = product;
  this.price = priceProduct;
  this.sponsor = sponsor;
  this.priceSponsor = priceSponsor;
}
var order = new Order("falcon9", 100000, "amazon", 8000);

document.querySelector(".despro1").innerHTML += order.product;
document.querySelector(".despro2").innerHTML += order.sponsor;
document.querySelector(".despro1-1").innerHTML += order.product;
document.querySelector(".despro2-2").innerHTML += order.sponsor;

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
minitureImg.addEventListener("click", changeMiniature); //cambio miniatura con principal
changePhoto1.addEventListener("click", changeImg1); //cambio lateral con principal
changePhoto2.addEventListener("click", changeImg2); //cambio lateral con principal
changePhoto3.addEventListener("click", changeImg3); //cambio lateral con principal
changePhoto4.addEventListener("click", changeImg4); //cambio lateral con principal

// cambios de imagen miniatura superior con la imagen principal productos
function changeMiniature(e) {
  ImgFirst.src = e.target.src;
  hide();
  switch (e.target.id) {
    case "first":
      changePhoto1.classList.remove("hide");
      changePhoto1.classList.add("show");
      counter.innerHTML = String(price["falcon9"]) + "€";
      break;
    case "second":
      changePhoto2.classList.remove("hide");
      changePhoto2.classList.add("show");
      counter.innerHTML = String(price["heavy"]) + "€";
      break;
    case "thrid":
      changePhoto3.classList.remove("hide");
      changePhoto3.classList.add("show");
      counter.innerHTML = String(price["dragon"]) + "€";
      break;
    case "fourth":
      changePhoto4.classList.remove("hide");
      changePhoto4.classList.add("show");
      counter.innerHTML = String(price["bfr"]) + "€";
      break;
  }
}

// function to hide colunm R columna lateral productos
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

// cambios de la imagen lateral productos con la principal
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

function addSelection() {
  document.getElementById("finalBuy").src = ImgFirst.src;
  document.getElementById("finalBuy2").src = ImgFirst.src;
  if (currentRocket != null) {
    let array = currentRocket.split("-");
    priceFinal.innerHTML += " " + String(price[array[0]]) + "€";
    priceFinal2.innerHTML += " " + 2000 + "€";
    priceFinal3.innerHTML += " " + String(price[array[0]] + 2000) + "€";
    // priceFinal1.innerHTML += " " + String(price[array[0]]) + "€";
    // priceFinal21.innerHTML += " " + 2000 + "€";
    // priceFinal31.innerHTML += " " + String(price[array[0]] + 2000) + "€";
    homepage.style.display = "none";
    product1.style.display = "none";
    username.style.display = "block";
    return;
  }
}

//Shipping date calculation
function shippingDate(e) {
  const deliveryElement = document.querySelector(".deliveryDate p");
  let deliveryTime = "";
  let todaysDate = new Date();
  let minDelivery = new Date();
  let maxDelivery = new Date();
  let days;
  switch (e.target.value) {
    case "free":
      days = 1;
      break;
    case "fast":
      days = 7;
      break;
    case "express":
      days = 30;
      break;
  }
  minDelivery.setDate(todaysDate.getDate() + days);
  maxDelivery.setDate(minDelivery.getDate() + days + 1);
  console.log(todaysDate);
  var dateOptions = {
    timeZone: "Europe/Madrid",
    hour12: false,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  deliveryTime =
    "Between " +
    minDelivery.toLocaleString("en-US", dateOptions) +
    " and " +
    maxDelivery.toLocaleString();
  deliveryElement.innerHTML = deliveryTime;
  console.log(deliveryTime);
}

function changeToAdress() {
  homepage.style.display = "none";
  username.style.display = "none";
  adressSection.style.display = "flex";
  return;
}

function adressToDelivery() {
  adressSection.style.display = "none";
  delivery.style.display = "block";
}

function changToThanks() {
  if (processFinal()) {
    finishSection.style.display = "none";
    thankYouSection.style.display = "block";
  }
}

function changeToFinish() {
  delivery.style.display = "none";
  finishSection.style.display = "block";
}

function tooglingGift(){
giftElement.style.display = "block"
}

//Validation

function processProfile(params) {}

function processAddress(params) {}

function processFinal() {
  var checkBox = document.getElementById("agree");
  if (checkBox.checked == false) {
    let element = document.querySelector("#conditions");
    let newElement = document.createElement("P");
    newElement.innerHTML = "Please accept the terms and conditions";
    element.parentNode.insertBefore(newElement, element.nextSibling);
    return false;
  }
  return true;
}
