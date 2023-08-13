const randomNumberEl = document.querySelector(".rnumber");
const reset = document.querySelector(".reset");
const login = document.querySelector(".loginbt");
const login1 = document.querySelector(".loginbt1");
const hide1 = document.querySelector(".hide1");
const hide2 = document.querySelector(".hide2");
const hide3 = document.querySelector(".hide3");
const lable = document.querySelector(".input");
let randomNumber = Math.floor(100000 + Math.random() * 900000);
reset.addEventListener("click", function () {
  randomNumber = Math.floor(100000 + Math.random() * 900000);
  randomNumberEl.textContent = randomNumber;
});
login.addEventListener("click", function () {
  let userName = document.querySelector(".uname").value;
  let password = document.querySelector(".pass").value;
  let check = Number(document.querySelector(".chec").value);
  let a = 0;
  let b = 0;
  let c = 0;
  if (userName === "") {
    hide1.textContent = "UserName Is Required";
    hide1.classList.remove("hide1");
    iborder.classList.remove(".border");
  } else {
    hide1.classList.add("hide1");
    a = 1;
  }
  if (password === "") {
    hide2.textContent = "Password Required!";
    hide2.classList.remove("hide2");
  } else if (password != "codese") {
    hide2.textContent = "Password Incorrect!";
    hide2.classList.remove("hide2");
  } else {
    hide2.classList.add("hide2");
    b = 1;
  }
  if (check != randomNumber) {
    hide3.textContent = "Enter The Correct Number!";
    hide3.classList.remove("hide3");
  } else {
    hide3.classList.add("hide3");
    c = 1;
  }
  if (a == 1 && b == 1 && c == 1) {
window.location.href = bankPageUrl;
  }
});