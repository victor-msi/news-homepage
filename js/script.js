const button_menu = document.getElementById("button_menu");
const icon_menu = document.getElementById("icon_menu");
const movile_nav = document.getElementById("movile_nav");
const button_close = document.getElementById("button_close");
const icon_close_menu = document.getElementById("icon_close_menu");
const body = document.getElementById("body");
const links = document.getElementsByClassName("link");
const aside_title = document.querySelectorAll(".title__new");
const main__buttom = document.getElementById("buttom__read");
const titles_h4 = document.getElementsByClassName("title_h4");

/* ASIDE MENU */
button_menu.addEventListener("click", function () {
  movile_nav.style.visibility = "visible";
  icon_menu.style.visibility = "hidden";
  icon_close_menu.style.visibility = "visible";
  body.style.backgroundColor = "hsl(233, 8%, 79%)";
});

/* CLOSE MENU MOBILE */
button_close.addEventListener("click", function () {
  movile_nav.style.visibility = "hidden";
  icon_menu.style.visibility = "visible";
  icon_close_menu.style.visibility = "hidden";
  body.style.backgroundColor = "hsl(36, 100%, 99%)";
});

/* HOVER LINKS */
for (const link of links) {
  link.addEventListener("mouseenter", function () {
    link.style.color = "hsl(5, 85%, 63%)";
  });

  link.addEventListener("mouseleave", function () {
    link.style.color = "rgb(93, 95, 121)";
  });
}

/* HOVER ASIDE TITLE NEWS */
for (const title__new of aside_title) {
  title__new.addEventListener("mouseenter", function () {
    title__new.style.color = "hsl(35, 77%, 62%)";
  });

  title__new.addEventListener("mouseleave", function () {
    title__new.style.color = "hsl(36, 100%, 99%)";
  });
}

/* HOVER BUTTOM READ */
main__buttom.addEventListener("mouseenter", function () {
  main__buttom.style.backgroundColor = "hsl(240, 100%, 5%)";
});

main__buttom.addEventListener("mouseleave", function () {
  main__buttom.style.backgroundColor = "hsl(5, 85%, 63%)";
});

/* HOVER TITLES OTHER NEWS */
for (const title_h4 of titles_h4) {
  title_h4.addEventListener("mouseenter", function () {
    title_h4.style.color = "hsl(5, 85%, 63%)";
  });

  title_h4.addEventListener("mouseleave", function () {
    title_h4.style.color = "hsl(240, 100%, 5%)";
  });
}
