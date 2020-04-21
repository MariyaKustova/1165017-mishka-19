var buttonMenu=document.querySelector(".main-nav__toggle");
var navigation=document.querySelector(".main-nav");

navigation.classList.remove("main-nav--nojs");

buttonMenu.addEventListener("click", function () {
  if (navigation.classList.contains("main-nav--closed")) {
    navigation.classList.remove("main-nav--closed");
    navigation.classList.add("main-nav--opened");
  } else {
    navigation.classList.add("main-nav--closed");
    navigation.classList.remove("main-nav--opened");
  }
});
