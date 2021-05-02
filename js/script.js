const burger = document.querySelector(".burger");
const line = document.querySelectorAll(".burger > .burger__line");

const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("open");
  line.forEach((line) => line.classList.toggle("open"));
});
