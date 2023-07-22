//LOCAL
const philosophyPage = document.getElementById("philosophy-page");
const menuPage = document.getElementById("menu-page");

document.addEventListener("DOMContentLoaded", function () {
  menuPage.classList.add("hide");
  philosophyPage.classList.remove("hide");
});

const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", function () {
  console.log("works");
});
menuBtn.addEventListener("click", function () {
  philosophyPage.classList.add("hide");
  menuPage.classList.remove("hide");
});
