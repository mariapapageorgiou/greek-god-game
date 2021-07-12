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

// ===================================== FUNCTION FOR CHANGING THE DISPLAY =====================================
function changeDisplay(changeElements) {
  setAllElementsNone();
  for (const property in changeElements) {
    setEvent(property, changeElements[property])
  };
}

// ===================================== FUNCTION TO SET ALL REQUIRED ELEMENTS TO NONE =====================================
function setAllElementsNone() {
  const allElements = ["water", "fire", "blue", "yellow1", "yellow2", "red", "winter", "spring1", "spring2", "summer1", "summer2", "fall", "sight", "sound1", "sound2", "smell1", "smell2", "taste1", "taste2", "touch", "antarctica", "oceania1", "oceania2", "asia1", "asia2", "europe1", "europe2", "americas1", "americas2", "africa", "dolphin", "stork", "eagle", "boar", "mouse", "peacock", "owl", "pig", "horse", "swan", "serpent", "donkey"];
  allElements.forEach(function (eachElement) {
    const elementToset = document.getElementById(eachElement);
    elementToset.style.display = "none";
  });
}

// ===================================== FUNCTION TO SET THE EVENT =====================================
function setEvent(eventName, setValue) {
  const elementToset = document.getElementById(eventName);
  elementToset.style.display = setValue;
}

// ===================================== WATER BUTTON EVENT =====================================
water.onclick = function () {
  let changeElements = {
    blue: "block",
    yellow2: "block",
    categoryColor: "inline"
  };
  changeDisplay(changeElements);
}

// ===================================== FIRE BUTTON EVENT =====================================
fire.onclick = function () {
  let changeElements = {
    red: "block",
    yellow1: "block",
    categoryColor: "inline"
  };
  changeDisplay(changeElements);
}