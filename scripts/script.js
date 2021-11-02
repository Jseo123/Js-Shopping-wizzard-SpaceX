const mainProductbtn = document.querySelector(".btn1");
const homepage = document.querySelector(".homepage")
const product1 = document.querySelector(".product1")
const product2 = document.querySelector(".product2")
const product3 = document.querySelector(".product3")
const username = document.querySelector(".username")
const adress = document.querySelector(".adress")
const delivery = document.querySelector(".delivery")


mainProductbtn.addEventListener("click", contentChange1);

console.log(mainProductbtn)

function contentChange1() {
  username.style.display = "block";
homepage.style.display ="none"
  
  return;
}

