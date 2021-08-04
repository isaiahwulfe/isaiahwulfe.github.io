var velocity = 10;
var position = 0;
var firstBall = document.getElementById('firstBall');
var secondBall = document.getElementById('secondBall');
var reverse = false;
var timer1 = setInterval(moveBall, 10)

const area2 = {
    element: document.getElementById('area2'),
    width: 330,
    height: 350,
};

function initialize() {
    area2.element.style.width = area2.width + 'px';
    area2.element.style.height = area2.height + 'px';
    document.body.appendChild(area2.element);
};

// YOUR CODE 
// ----------------

function moveBall(){

  var xMax = 280;
  var xMin = 0;

  if (reverse === false){
        velocity = velocity + 5;
        position = xMin + velocity;
        firstBall.style.left = position + 'px';
        secondBall.style.top = position + 'px'
        console.log(position);}
    
    if (reverse === true){
        velocity = velocity - 5;
        position = xMin + velocity;
        firstBall.style.left = position + 'px';
        secondBall.style.top = position + 'px'
        console.log(position);
    }
    if (velocity === xMax){
        reverse = !reverse
    }
    if (velocity === xMin){
        reverse = false
    }

}

initialize();
setInterval(moveBall, 60);