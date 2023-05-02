// give the elemetns you want to be draggable a class of draggable
let draggables = document.querySelectorAll('.draggable');

// give all the draggable elements the draggable function
draggables.forEach((el, index)=> {
  draggable(el, index);
});

// set a top layer index
let maxIndex = 1;

// setup the draggable functionality
function draggable(el) {

  el.addEventListener('mousedown', function(e) {
    // add an active class to control the shadow effect change
    el.classList.add('active')
    
    // console.log(e.type);
    
    // get get x,y of the image
    var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
    var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);
    
    // add the number of elements to the index so the last one is always on top
    maxIndex += draggables.length;
    el.style.zIndex = maxIndex;
    
    function mouseMoveHandler(e) {
      let newY = (e.clientY - offsetY);
      let newX = (e.clientX - offsetX);
      
      // convert to percentage values (not working yet)
      // let moveX = Math.floor(newX / (window.innerWidth - el.offsetWidth) * 100);
//       let windo
//        (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
// }
      
      el.style.top = newY + 'px';
      el.style.left = newX + 'px';
    }
    function reset() {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mouseup', reset);
      el.classList.remove('active')
    }
    // update the top/left positions with the mouse position
    window.addEventListener('mousemove', mouseMoveHandler);

    // reset by removing the event listeners and active class
    window.addEventListener('mouseup', reset);
  });
}