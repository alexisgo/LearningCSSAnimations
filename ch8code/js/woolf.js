$(document).ready(setup);

function setup() {
  var text = "...a good dinner/is of great/importance/to good talk./One cannot/";
  var text2 = "if one has not/dined well./-Virginia Woolf";

  $('#roller, #one').addClass('scene1');
  letters(250, "#one span, #one br", "#one", text);
  // last letter appears at 19250, so give it a few more milliseconds before hiding
  setTimeout(function () {	$('#one').addClass('hide');	}, 19550);

  setTimeout(function () {	$('#think, #well').addClass('scene2');	}, 19550);
  // THINK animation takes 2800ms--we'll give a 150ms buffer before hiding
  setTimeout(function () {	$('#think, #well').addClass('hide');	}, 22500);

  setTimeout(function () {	$('#love').addClass('scene3');	}, 23000);
  setTimeout(function () {	$('#love').addClass('hide');	}, 25800);

  setTimeout(function () {	$('#sleep').addClass('scene4');	}, 26500);
  // animation lasts 2.7 secs , 300ms buffer
  setTimeout(function () {	$('#sleep').addClass('hide');	}, 29500);

  setTimeout(function () {	$('#two').addClass('scene5');	}, 30500);
  setTimeout(function () {	$('#roller').addClass('scene5');	}, 30500);
  letters(1500, "#two span, #two br", "#two", text2)
}

function letters(initialDelay, selector, element, text) {
  /* include period, hyphen, and \w */
  var re = /[-.\w]/;     
  for (var i in text) {
    if (text[i].match(re)) {
      var el = document.createElement("span");
      var letter = document.createTextNode(text[i]);
      el.appendChild(letter);
      $(element).append(el);
    }
    else if (text[i] === "/") {
      $(element).append(document.createElement("br"));
    }
    else {
       $(element).append(document.createTextNode(text[i]));
    }
  }
  var delay = initialDelay;
  $(selector).each(function() {
    if ($(this).is('span')) {
      this.style[Modernizr.prefixed('animation')] = "letterAppear 100ms " + delay + "ms forwards";  
      delay += 250;        
    }
    // If this is a br element, but NOT a br element with the class "skip"
    else if ($(this).is('br') && ( ! $(this).is('.skip'))) {
      delay += 1500;
    } 
  });
} // end letters