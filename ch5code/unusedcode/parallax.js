
/**
 * Parallax Scrolling JavaScript based on code 
 * by Richard Shepherd
 * from https://github.com/richardshepherd/Parallax-Scrolling 

MIT License

Copyright (c) 2011 Richard Shepherd
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the 
following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
******/

$(document).ready(function(){
	// Cache the window 
	$window = $(window);
	// Cache the X offset and the speed of each sprite
	$('[data-type]').each(function() {	
		$(this).data('offsetX', parseInt($(this).attr('data-offsetX')));
		$(this).data('speed', $(this).attr('data-speed'));
	});

	// For each element that has a data-type attribute set to background
	$('section[data-type="background"]').each(function(){

		// Store some variables based on where we are
		var $self = $(this),
			offsetCoords = $self.offset(),
			leftOffset = offsetCoords.left;

	    $(window).scroll(function() {

			// If this section is in view
			if ( ($window.scrollLeft() + $window.width()) > (leftOffset) &&
				 ( (leftOffset + $self.width()) > $window.scrollLeft() ) ) {

					// determine how fast to scroll
				var xPos = -($window.scrollLeft() / $self.data('speed')); 

				// if there is a x offset, add it 
				if ($self.data('offsetX')) {
				  xPos += $self.data('offsetX');
				}
									
				// Put together our final background position
				var coords =  xPos + 'px 50%';
				// Move the background
				$self.css({ backgroundPosition: coords });
				
				// Check for other sprites in this section	
				$('[data-type="sprite"]', $self).each(function() {

					// Cache the sprite
					var $sprite = $(this);

					// Use the same calculation to work out how far to scroll the sprite
					var xPos = ($window.scrollLeft() / $sprite.data('speed'));					
					var coords = "translate3d(" + xPos  + "px,0,0)";

					// TODO: auto-generate correct prefix based on browser
					$sprite.css({ '-webkit-transform': coords });													

				}); // sprites
			}; // in view
		}); // window scroll
	});	// end each background data-type

}); 