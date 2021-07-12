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

// ==================== CATEGORY SPANS ====================
let elementSpan = document.getElementById("categoryElement");
let colorSpan = document.getElementById("categoryColor");
let seasonSpan = document.getElementById("categorySeason");
let senseSpan = document.getElementById("categorySense");
let continentSpan = document.getElementById("categoryContinent");
let animalSpan = document.getElementById("categoryAnimal");

// ==================== BUTTONS IN CATEGORIES ====================

// ==================== ELEMENTS ====================
let waterBtn = document.getElementById("water");
let fireBtn = document.getElementById("fire");

// ==================== COLORS ====================
let blueBtn = document.getElementById("blue");
let yellowOneBtn = document.getElementById("yellow1");
let yellowTwoBtn = document.getElementById("yellow2");
let redBtn = document.getElementById("red");

// ==================== SEASONS====================
let winterBtn = document.getElementById("winter");
let springOneBtn = document.getElementById("spring1");
let springTwoBtn = document.getElementById("spring2");
let summerOneBtn = document.getElementById("summer1");
let summerTwoBtn = document.getElementById("summer2");
let fallBtn = document.getElementById("fall");

// ==================== SENSES ====================
let sightBtn = document.getElementById("sight");
let soundOneBtn = document.getElementById("sound1");
let soundTwoBtn = document.getElementById("sound2");
let smellOneBtn = document.getElementById("smell1");
let smellTwoBtn = document.getElementById("smell2");
let tasteOneBtn = document.getElementById("taste1");
let tasteTwoBtn = document.getElementById("taste2");
let touchBtn = document.getElementById("touch");

// ==================== CONTINENTS ====================
let antarcticaBtn = document.getElementById("antarctica");
let oceaniaOneBtn = document.getElementById("oceania1");
let oceaniaTwoBtn = document.getElementById("oceania2");
let asiaOneBtn = document.getElementById("asia1");
let asiaTwoBtn = document.getElementById("asia2");
let europeOneBtn = document.getElementById("europe1");
let europeTwoBtn = document.getElementById("europe2");
let americasOneBtn = document.getElementById("americas1");
let americasTwoBtn = document.getElementById("americas2");
let africaBtn = document.getElementById("africa");

// ==================== ANIMALS ====================
let dolphin = document.getElementById("dolphin");
let stork = document.getElementById("stork");
let eagle = document.getElementById("eagle");
let boar = document.getElementById("boar");
let mouse = document.getElementById("mouse");
let peacock = document.getElementById("peacock");
let owl = document.getElementById("owl");
let pig = document.getElementById("pig");
let horse = document.getElementById("horse");
let swan = document.getElementById("swan");
let serpent = document.getElementById("serpent");
let donkey = document.getElementById("donkey");

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