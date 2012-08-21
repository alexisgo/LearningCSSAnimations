var elem = document.getElementById("animateMe");
elem.addEventListener("click", transition, false);

function transition() {
  console.log(this.className);
  if (this.className == "purple") {
    this.className = "blue";		
  }
  else if (this.className == "blue"){
    this.className = "purple";
  }
  console.log(this.className);
}