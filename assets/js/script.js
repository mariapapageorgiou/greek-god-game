// ===================================== GUIDE MODAL =====================================

let modal = document.getElementById("guideModal");
let guideBtn = document.getElementById("guideBtn");

guideBtn.onclick = function () {
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
  const allElements = ["categoryElement", "categoryColor", "categorySeason", "categorySense", "categoryContinent", "categoryAnimal", "water", "fire", "blue", "yellow1", "yellow2", "red", "winter", "spring1", "spring2", "summer1", "summer2", "fall", "sight", "sound1", "sound2", "smell1", "smell2", "taste1", "taste2", "touch", "antarctica", "oceania1", "oceania2", "asia1", "asia2", "europe1", "europe2", "americas1", "americas2", "africa", "dolphin", "stork", "eagle", "boar", "mouse", "peacock", "owl", "pig", "horse", "swan", "serpent", "donkey"];
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

// ===================================== FUNCTION FOR REVEALING THE RESULT =====================================
function godResult() {
  document.getElementById("choices").style.display = "none";
  document.getElementById("result").style.display = "block";
}

// ===================================== ELEMENT SELECTION EVENTS =====================================
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

// ===================================== COLOR SELECTION EVENTS =====================================
// ===================================== BLUE BUTTON EVENT =====================================
blue.onclick = function () {
  let changeElements = {
    winter: "block",
    spring2: "block",
    categorySeason: "inline"
  }
  changeDisplay(changeElements);
}

// ===================================== YELLOW1 & YELLOW2 BUTTONS EVENT =====================================
function yellow() {
  let changeElements = {
    spring1: "block",
    summer2: "block",
    categorySeason: "inline"
  }
  changeDisplay(changeElements);
}
yellow1.onclick = yellow;
yellow2.onclick = yellow;

// ===================================== RED BUTTON EVENT =====================================
red.onclick = function () {
  let changeElements = {
    summer1: "block",
    fall: "block",
    categorySeason: "inline"
  }
  changeDisplay(changeElements);
}

// ===================================== SEASON SELECTION EVENTS =====================================
// ===================================== WINTER BUTTON EVENT =====================================
winter.onclick = function () {
  let changeElements = {
    sight: "block",
    sound2: "block",
    categorySense: "inline"
  }
  changeDisplay(changeElements)
}

// ===================================== SPRING1 & SPRING2 BUTTONS EVENT =====================================
function spring() {
  let changeElements = {
    sound1: "block",
    smell2: "block",
    categorySense: "inline"
  }
  changeDisplay(changeElements);
}
spring1.onclick = spring;
spring2.onclick = spring;

// ===================================== SUMMER1 & SUMMER2 BUTTONS EVENT =====================================
function summer() {
  let changeElements = {
    smell1: "block",
    taste2: "block",
    categorySense: "inline"
  }
  changeDisplay(changeElements);
}
summer1.onclick = summer;
summer2.onclick = summer;

// ===================================== FALL BUTTON EVENT =====================================
fall.onclick = function () {
  let changeElements = {
    taste1: "block",
    touch: "block",
    categorySense: "inline"
  }
  changeDisplay(changeElements)
}

// ===================================== SENSE SELECTION EVENTS =====================================
// ===================================== SIGHT BUTTON EVENT =====================================
sight.onclick = function () {
  let changeElements = {
    antarctica: "block",
    oceania2: "block",
    categoryContinent: "inline"
  }
  changeDisplay(changeElements)
}

// ===================================== SOUND1 & SOUND2 BUTTONS EVENT =====================================
function sound() {
  let changeElements = {
    oceania1: "block",
    asia2: "block",
    categoryContinent: "inline"
  }
  changeDisplay(changeElements);
}
sound1.onclick = sound;
sound2.onclick = sound;

// ===================================== SMELL1 & SMELL2 BUTTONS EVENT =====================================
function smell() {
  let changeElements = {
    asia1: "block",
    europe2: "block",
    categoryContinent: "inline"
  }
  changeDisplay(changeElements);
}
smell1.onclick = smell;
smell2.onclick = smell;

// ===================================== TASTE1 & TASTE2 BUTTONS EVENT =====================================
function taste() {
  let changeElements = {
    europe1: "block",
    americas2: "block",
    categoryContinent: "inline"
  }
  changeDisplay(changeElements);
}
taste1.onclick = taste;
taste2.onclick = taste;

// ===================================== TOUCH BUTTON EVENT =====================================
touch.onclick = function () {
  let changeElements = {
    americas1: "block",
    africa: "block",
    categoryContinent: "inline"
  }
  changeDisplay(changeElements)
}

// ===================================== CONTINENT SELECTION EVENTS =====================================
// ===================================== ANTARCTICA BUTTON EVENT =====================================
antarctica.onclick = function () {
  let changeElements = {
    dolphin: "block",
    stork: "block",
    categoryAnimal: "inline"
  }
  changeDisplay(changeElements)
}

// ===================================== OCEANIA1 & OCEANIA2 BUTTONS EVENT =====================================
function oceania() {
  let changeElements = {
    eagle: "block",
    boar: "block",
    categoryAnimal: "inline"
  }
  changeDisplay(changeElements);
}
oceania1.onclick = oceania;
oceania2.onclick = oceania;

// ===================================== ASIA1 & ASIA2 BUTTONS EVENT =====================================
function asia() {
  let changeElements = {
    mouse: "block",
    peacock: "block",
    categoryAnimal: "inline"
  }
  changeDisplay(changeElements);
}
asia1.onclick = asia;
asia2.onclick = asia;

// ===================================== EUROPE1 & EUROPE2 BUTTONS EVENT =====================================
function europe() {
  let changeElements = {
    owl: "block",
    pig: "block",
    categoryAnimal: "inline"
  }
  changeDisplay(changeElements);
}
europe1.onclick = europe;
europe2.onclick = europe;

// ===================================== AMERICAS1 & AMERICAS2 BUTTONS EVENT =====================================
function americas() {
  let changeElements = {
    horse: "block",
    swan: "block",
    categoryAnimal: "inline"
  }
  changeDisplay(changeElements);
}
americas1.onclick = americas;
americas2.onclick = americas;

// ===================================== AFRICA BUTTON EVENT =====================================
africa.onclick = function () {
  let changeElements = {
    serpent: "block",
    donkey: "block",
    categoryAnimal: "inline"
  }
  changeDisplay(changeElements)
}

// ===================================== ANIMAL SELECTION EVENTS =====================================
// ===================================== DOLPHIN BUTTON EVENT =====================================
dolphin.onclick = function () {
  godResult();
  document.getElementById("poseidon").style.display = "block";
}

// ===================================== STORK BUTTON EVENT =====================================
stork.onclick = function () {
  godResult();
  document.getElementById("hermes").style.display = "block";
}

// ===================================== EAGLE BUTTON EVENT =====================================
eagle.onclick = function () {
  godResult();
  document.getElementById("zeus").style.display = "block";
}

// ===================================== BOAR BUTTON EVENT =====================================
boar.onclick = function () {
  godResult();
  document.getElementById("ares").style.display = "block";
}

// ===================================== MOUSE BUTTON EVENT =====================================
mouse.onclick = function () {
  godResult();
  document.getElementById("apollo").style.display = "block";
}

// ===================================== PEACOCK BUTTON EVENT =====================================
peacock.onclick = function () {
  godResult();
  document.getElementById("hera").style.display = "block";
}

// ===================================== OWL BUTTON EVENT =====================================
owl.onclick = function () {
  godResult();
  document.getElementById("athena").style.display = "block";
}

// ===================================== PIG BUTTON EVENT =====================================
pig.onclick = function () {
  godResult();
  document.getElementById("demeter").style.display = "block";
}

// ===================================== HORSE BUTTON EVENT =====================================
horse.onclick = function () {
  godResult();
  document.getElementById("artemis").style.display = "block";
}

// ===================================== SWAN BUTTON EVENT =====================================
swan.onclick = function () {
  godResult();
  document.getElementById("aphrodite").style.display = "block";
}

// ===================================== SERPENT BUTTON EVENT =====================================
serpent.onclick = function () {
  godResult();
  document.getElementById("hades").style.display = "block";
}

// ===================================== DONKEY BUTTON EVENT =====================================
donkey.onclick = function () {
  godResult();
  document.getElementById("hephaestus").style.display = "block";
}