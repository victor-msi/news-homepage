const button_menu = document.getElementById("button_menu");
const icon_menu = document.getElementById("icon_menu");
const movile_nav = document.getElementById("movile_nav");
const button_close = document.getElementById("button_close");
const icon_close_menu = document.getElementById("icon_close_menu");
const body = document.getElementById("body");

button_menu.addEventListener("click", function () {
  movile_nav.style.visibility = "visible";
  icon_menu.style.visibility = "hidden";
  icon_close_menu.style.visibility = "visible";
  body.style.backgroundColor= "hsl(233, 8%, 79%)";
})

button_close.addEventListener("click", function () {
  movile_nav.style.visibility = "hidden";
  icon_menu.style.visibility = "visible";
  icon_close_menu.style.visibility = "hidden";
  body.style.backgroundColor= "hsl(36, 100%, 99%)";
})