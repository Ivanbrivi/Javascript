const cat = document.getElementById("myCat");

let position = 0;
let direction = 1;
const catSpeed = 10;

const screenWidth = window.innerWidth;

function catWalk() {
  position += catSpeed * direction;

  cat.style.left = position + "px";

  if (position + cat.width >= screenWidth && direction === 1) {
    direction = -1;
    cat.style.transform = "scaleX(-1)";
  } else if (position <= 0 && direction === -1) {
    direction = 1;
    cat.style.transform = "scaleX(1)";
  }
}

setInterval(catWalk, 50);

