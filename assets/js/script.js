// ===================================== RULES MODAL =====================================

let modal = document.getElementById("rulesModal");
let rulesBtn = document.getElementById("rulesBtn");

rulesBtn.onclick = function () {
  modal.style.display = "block";
}

let closeSpan = document.getElementsByClassName("close")[0];

closeSpan.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ===================================== GET ALL CHOICES BUTTONS =====================================

let elementSpan = document.getElementById("categoryElement");
let colorSpan = document.getElementById("categoryColor");

let waterBtn = document.getElementById("water");
let fireBtn = document.getElementById("fire");
let blueBtn = document.getElementById("blue");
let yellowOneBtn = document.getElementById("yellow1");
let yellowTwoBtn = document.getElementById("yellow2");
let redBtn = document.getElementById("red");

waterBtn.onclick = function () {
  waterBtn.style.display = "none";
  fireBtn.style.display = "none";
  elementSpan.style.display = "none";
  blueBtn.style.display = "block";
  yellowTwoBtn.style.display = "block";
  colorSpan.style.display = "inline";
}

fireBtn.onclick = function () {
  waterBtn.style.display = "none";
  fireBtn.style.display = "none";
  elementSpan.style.display = "none";
  redBtn.style.display = "block";
  yellowOneBtn.style.display = "block";
  colorSpan.style.display = "inline";
}