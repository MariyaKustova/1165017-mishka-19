var buttonMenu = document.querySelector(".main-nav__toggle");
var navigation = document.querySelector(".main-nav");
var buttonOrder = document.querySelector(".product-week__button");
var buttonAdd = document.querySelector(".catalog-popup__button");
var popup = document.querySelector(".catalog-popup");
var body = document.querySelector(".body-wrapper");

navigation.classList.remove("main-nav--nojs");

navigation.classList.remove("main-nav--closed");

navigation.classList.add("main-nav--opened");

buttonMenu.addEventListener("click", function () {
  if (navigation.classList.contains("main-nav--closed")) {
    navigation.classList.remove("main-nav--closed");
    navigation.classList.add("main-nav--opened");
  } else {
    navigation.classList.add("main-nav--closed");
    navigation.classList.remove("main-nav--opened");
  }
});

buttonOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("catalog-popup--opened");
  body.classList.add("body-opacity");
});

buttonAdd.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("catalog-popup--opened");
  body.classList.remove("body-opacity");
});
