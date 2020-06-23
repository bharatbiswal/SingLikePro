var currentX = '';
var currentY = '';
var movementConstant = .015;
$(document).mousemove(function(e) {
  if(currentX == '') currentX = e.pageX;
  var xdiff = e.pageX - currentX;
  currentX = e.pageX;
   if(currentY == '') currentY = e.pageY;
  var ydiff = e.pageY - currentY;
  currentY = e.pageY; 
  $('#inner-section div').each(function(i, el) {
      var movement = (i + 1) * (xdiff * movementConstant);
	  var movementy = (i + 1) * (ydiff * movementConstant);
      var newX = $(el).position().left + movement;
	  var newY = $(el).position().top + movementy;
      $(el).css('left', newX + 'px');
	  $(el).css('top', newY + 'px');
  });
});


$(document).ready(function() {
  var movementStrength = 25;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $(".view-bg-image").mousemove(function(e){
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -1 - 25;
            var newvalueY = height * pageY * -1 - 50;
            $('.view-bg-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
  });
});