var bike = document.getElementById("bike");
bike.addEventListener("click", pedal, false);

function pedal() {
	var frontwheel, backwheel, bike;
	bike = document.getElementById("bike");
	backwheel = document.getElementById("backwheel");
	frontwheel = document.getElementById("frontwheel");

	if (bike.className) {
		bike.className = "";	
		backwheel.className = "";
		frontwheel.className = "";
	}
	else {
		bike.className = "move";
		backwheel.className = "spin";
		frontwheel.className = "spin";
	}
}
 