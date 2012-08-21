var elem = document.getElementById("animateMe");
elem.addEventListener("click", transition, false);

function transition() {
  if (this.className == "purple") {
    this.className = "blue";		
  }
  else if (this.className == "blue"){
    this.className = "purple";
  }
}