var slider = document.querySelector('.slider');
var imageContainer = document.querySelector('.image-container');
var position = 0;

slider.onscroll = function() {
  position = slider.scrollLeft;
  
  if ((position > 150) && (position < 300)) {
    //rewind('forward');
  }
}


var rewind = function(direction) {
  //console.log('click');
  if (direction == 'back') { 
    if (position > 0) {
      position = position - 300; //временно  
    }
  };
  
  if (direction == 'forward') {
    if (position < 600) {
      position = 300 + Math.floor(position/300) * 300; 
    }
  };
  
  console.log(position);
  slider.scrollTo(position, 0);
}