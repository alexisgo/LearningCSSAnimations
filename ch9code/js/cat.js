$(document).ready(setup);

function setup(){
  setTimeout(function () {	$('#stage').addClass('scene1');	}, 100);

  setTimeout(function () {	$('#newspaper').addClass('scene1');	}, 500);
  setTimeout(function () {	$('#page1').addClass('scene1');	}, 500);
  setTimeout(function () {	$('#lefteye, #righteye').addClass('scene1');	}, 500);

  setTimeout(function () {	$('#lefteye, #righteye').removeClass('scene1');	}, 2700);
  setTimeout(function () {	$('#lefteye, #righteye').addClass('scene2');	}, 2800);

  // After reading is done 
  setTimeout(function () {	$('#newspaper').removeClass('scene1');	}, 5800);
  setTimeout(function () {	$('#page1').removeClass('scene1');	}, 5800); 

  setTimeout(function () {	$('#newspaper').addClass('scene3');	}, 6800);
  setTimeout(function () {	$('#page2').addClass('scene3');	}, 6800);
  setTimeout(function () {	$('#lefteye, #righteye').addClass('scene3');	}, 8100);


  // moves to outside scene
  setTimeout(function () {	$('body').addClass('scene4');	}, 10100);
  setTimeout(function () {	$('#window').addClass('scene4');	}, 10100);
  setTimeout(function () {	$('#house').addClass('scene4');	}, 10100);
  setTimeout(function () {	$('#cat').addClass('scene4');	}, 10100);

  // move murphy into view
  setTimeout(function () {	$('#murphy').addClass('scene5');	}, 12100);

  setTimeout(function () {	$('#page1, #page2').addClass('scene5');	}, 13100);
  setTimeout(function () {	$('#page1, #page2').removeClass('scene5');	}, 14100);

  // murphy knocks
  setTimeout(function () {	$('#murphyarm').addClass('scene6');	}, 15100);
  setTimeout(function () {	$('#page1, #page2').addClass('scene6');	}, 15100);

  setTimeout(function () {	$('#lefteye, #righteye').removeClass('scene2 scene3');	}, 15100);
  setTimeout(function () {	$('#lefteye, #righteye').addClass('scene6');	}, 17100);

  // fade out to newspaper
  setTimeout(function () {	$('#house').addClass('hide');	}, 21100);
  setTimeout(function () {	$('#window').addClass('hide');	}, 21100);
  setTimeout(function () {	$('#murphy').addClass('hide');	}, 21100);
  setTimeout(function () {	$('body').addClass('scene7');	}, 21100);
  setTimeout(function () {	$('#newsreel').addClass('scene7');	}, 21500);

}