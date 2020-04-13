var buttonMenu=document.querySelector(".main-nav__toggle");
var navigation=document.querySelector(".main-nav");

buttonMenu.addEventListener("click", function(evt){
  evt.preventDefault();
  navigation.classList.toggle("main-nav--closed");
  navigation.classList.toggle("main-nav--opened");
})
