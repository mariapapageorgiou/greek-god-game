// ===================================== RULES MODAL =====================================

let modal = document.getElementById("rulesModal");
let rulesBtn = document.getElementById("rulesBtn");

rulesBtn.onclick = function() {
    modal.style.display = "block";
}

let closeSpan = document.getElementsByClassName("close")[0];

closeSpan.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}