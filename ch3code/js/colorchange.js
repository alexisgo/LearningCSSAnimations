var elem = document.getElementById("animateMe");
elem.addEventListener("click", transition, false);

function transition() {
  if (this.className) {
    this.className = "";		
  }
  else {
    this.className = "colorchange";
  }
}