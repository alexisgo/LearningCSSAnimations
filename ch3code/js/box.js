var box = document.getElementById("box");
box.addEventListener("click", transition, false);

function transition() {
  if (this.className) {
    this.className = "";		
  }
  else {
    this.className = "translate";
  }
}