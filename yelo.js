//Chatroons access

const politicsBtn = document.getElementById("politics-btn");
const religionBtn = document.getElementById("religion-btn");
const debateBtn = document.getElementById("debate-btn");
const philosophyBtn = document.getElementById("philosophy-btn");

document.addEventListener("DOMContentLoaded", function () {
  // Code to execute when the DOM is ready
  var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile === true) {
    var scriptLocation = window.location.href;
    var folderPath = scriptLocation.substring(
      0,
      scriptLocation.lastIndexOf("/")
    );
    var politicsPath = folderPath + "/mobile/mobile.html";
    window.location.href = politicsPath;
  }

  const menuPage = document.getElementById("menu-page");

  menuPage.classList.add("hide");
});

politicsBtn.addEventListener("click", function () {
  var scriptLocation = window.location.href;
  var folderPath = scriptLocation.substring(0, scriptLocation.lastIndexOf("/"));
  var politicsPath = folderPath + "/chatrooms/politics.html";
  window.location.href = politicsPath;
});

religionBtn.addEventListener("click", function () {
  var scriptLocation = window.location.href;
  var folderPath = scriptLocation.substring(0, scriptLocation.lastIndexOf("/"));
  var religionPath = folderPath + "/chatrooms/religion.html";
  window.location.href = religionPath;
});

philosophyBtn.addEventListener("click", function () {
  var scriptLocation = window.location.href;
  var folderPath = scriptLocation.substring(0, scriptLocation.lastIndexOf("/"));
  var philosophyPath = folderPath + "/chatrooms/philosophy.html";
  window.location.href = philosophyPath;
});

debateBtn.addEventListener("click", function () {
  var scriptLocation = window.location.href;
  var folderPath = scriptLocation.substring(0, scriptLocation.lastIndexOf("/"));
  var debatePath = folderPath + "/chatrooms/debate.html";
  window.location.href = debatePath;
});

//Pages

const menuPage = document.getElementById("menu-page");
const homePage = document.getElementById("home-page");

//Menu
const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", function () {
  homePage.classList.add("hide");
  menuPage.classList.remove("hide");
});

// get to rules file

const rulesBtn = document.getElementById("rules-btn");

rulesBtn.addEventListener("click", function () {
  // Get the current location of the JavaScript file
  var scriptLocation = window.location.href;

  // Remove the filename (script.js) from the path
  var folderPath = scriptLocation.substring(0, scriptLocation.lastIndexOf("/"));

  // Concatenate the folder path with the rules.html file name
  var rulesPath = folderPath + "/rules/rules.html";

  // Navigate to the rules.html file
  window.location.href = rulesPath;
});

// MENU BUTTONS

const updatesBtn = document.getElementById("updates-btn");
const submitBtn = document.getElementById("submit-btn");
