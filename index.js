
let target = document.getElementById("target");
let scoreDisplay = document.getElementById("score");
let speedDisplay = document.getElementById("speed");
let score = 0;
let speed = 0;
target.addEventListener("click", function () {
    score++;
    speed++;
    scoreDisplay.innerHTML= score;
    speedDisplay.innerHTML= speed;
    moveTarget();
});

const containerWidth = document.getElementById("game-container").offsetWidth;
const containerHeight = document.getElementById("game-container").offsetHeight;
const targetSize = target.offsetWidth;
const maxX = containerWidth - targetSize;
const maxY = containerHeight - targetSize;

function moveTarget() {
    const randomX = Math.floor(Math.random() *maxX);
    const randomY = Math.floor(Math.random() *maxY);
    target.style.left=randomX + "px";
    target.style.top = randomY+ "px";
    
    setTimeout(moveTarget, 2000 / speed);
    console.log("random x: ", randomX);
    console.log("random y", randomY );

}





