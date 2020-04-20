var buttonMenu=document.querySelector(".main-nav__toggle");
var navigation=document.querySelector(".main-nav");
var buttonBusket=document.querySelector(".catalog__button");
var buttonAdd=document.querySelector(".catalog-popup__button");
var popup=document.querySelector(".catalog-popup");
var body=document.querySelector(".body__wrapper");

buttonMenu.addEventListener("click", function(evt){
  evt.preventDefault();
  navigation.classList.toggle("main-nav--closed");
  navigation.classList.toggle("main-nav--opened");
})

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
