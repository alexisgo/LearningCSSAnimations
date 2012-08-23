$(document).ready(function(){
  $('#background1, #bgContainer, .one').on('click', function() {
     $('.robotUnit, #bikerack, #background1').addClass('move');
 });
 
 var transEndEventNames = {
     'WebkitTransition' : 'webkitTransitionEnd',
     'MozTransition'    : 'transitionend',
     // per Ian Lunn at http://www.ianlunn.co.uk/blog/articles/opera-12-otransitionend-bugs-and-workarounds/
     // in Opera 12 they changed the case of oTransitionEnd 
     // to be otransitionend instead
     'OTransition'      : 'oTransitionEnd otransitionend',
     'msTransition'     : 'MSTransitionEnd',
     'transition'       : 'transitionend'
 },
 transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

 $('.robotUnit').on(transEndEventName, function() {
   $('.one').addClass("invisible");
   $('.two').addClass("visible");
 });
 
 $('.two').on('click', function() {
   console.log('clicked');
   $('#background1').addClass('slideOut');
   $('#background2').addClass('slideIn');
   $('#cat').addClass('visible');
 });

 $('#background2').on(transEndEventName, function() {
   $('.two').removeClass("visible");
   $('.three').addClass("visible");
 });

 $('.three').on('click', function() {
   $('#robot2, #cat, #background2, #inside').addClass('move');
 });
});