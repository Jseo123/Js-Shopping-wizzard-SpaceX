const mainProductbtn = document.querySelector(".btn1");
const usernameToAdress = document.querySelector(".username-to-adress-button")
const homepage = document.querySelector(".homepage")
const product1 = document.querySelector(".product1")
const product2 = document.querySelector(".product2")
const product3 = document.querySelector(".product3")
const username = document.querySelector(".username")
const adress = document.querySelector(".adress")
const delivery = document.querySelector(".delivery")
const mainProductPress = mainProductbtn.addEventListener("click", contentChange1);
const usernameToAdressPress = usernameToAdress.addEventListener("click", changeToAdress)

function contentChange1() {
  username.style.display = "block";
homepage.style.display ="none";
  return;
}

function changeToAdress() {
  username.style.display = "none";
  adress.style.display = "block"
}

