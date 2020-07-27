var menuItems = document.getElementById("menuItems");

menuItems.style.maxHeight = "0px";

function menuToggle() {
  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
}

var loginForm = document.getElementById("login-form");
var registerForm = document.getElementById("register-form");
var indicator = document.getElementById("indicator");

function registerAction() {
  registerForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
}

function loginAction() {
  registerForm.style.transform = "translateX(300px)";
  loginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
}

var productImg = document.getElementById("product-img");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
  productImg.src = smallImg[0].src;
};

smallImg[1].onclick = function () {
  productImg.src = smallImg[1].src;
};

smallImg[2].onclick = function () {
  productImg.src = smallImg[2].src;
};

smallImg[3].onclick = function () {
  productImg.src = smallImg[3].src;
};
