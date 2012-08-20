window.onload = init;
/*
  on slider change: 
  - update label to new slider value
  - update cube to rotations present in all labels
*/
function init() {
    document.getElementById("slider").onchange = rotate;    
    document.getElementById("verticalslider").onchange = rotate;    
    document.getElementById("nearnessslider").onchange = rotate;    
}

function rotate(e) {
  var xRotation = document.getElementById("slider").value;
  var yRotation = document.getElementById("verticalslider").value;
  var zRotation = document.getElementById("nearnessslider").value;

  //update labels
  document.getElementById("xdegrees").textContent = xRotation;
  document.getElementById("ydegrees").textContent = yRotation;
  document.getElementById("zdegrees").textContent = zRotation;

	//update cube rotation
  var rx = "rotateX(" + xRotation + "deg) ";
  var ry = "rotateY(" + yRotation + "deg) ";
  var rz = "rotateZ(" + zRotation + "deg)";

  var cube = document.getElementById("cube");     
  // leverage the Modernizr prefixed() method to obtain the
  // correct vendor prefix. Docs at: http://modernizr.com/docs/#prefixed
  cube.style[Modernizr.prefixed('transform')] = rx + ry + rz;  
  
}