var buttonMenu=document.querySelector(".main-nav__toggle");
var navigation=document.querySelector(".main-nav");
var buttonBusket=document.querySelector(".catalog__button");
var buttonAdd=document.querySelector(".catalog-popup__button");
var popup=document.querySelector(".catalog-popup");
var body=document.querySelector(".body__wrapper");

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

buttonBusket.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("catalog-popup--opened");
  body.classList.add("body__wrapper--opacity");
})

buttonAdd.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("catalog-popup--opened");
  body.classList.remove("body__wrapper--opacity");
})
