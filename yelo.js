//Chatroons access

const politicsBtn = document.getElementById("politics-btn");
const religionBtn = document.getElementById("religion-btn");
const debateBtn = document.getElementById("debate-btn");
const philosophyBtn = document.getElementById("philosophy-btn");

politicsBtn.addEventListener("click", function () {
  var scriptLocation = window.location.href;
  var folderPath = scriptLocation.substring(0, scriptLocation.lastIndexOf("/"));
  var politicsPath = folderPath + "/chatrooms/politics.html";
  window.location.href = politicsPath;
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
