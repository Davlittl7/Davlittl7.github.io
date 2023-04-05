function setup() {
  createCanvas(600, 600);
  background(220);
  textSize(25);
  text("Draw Randomly Sized and Colored Rectangles", 50, 100);
  text("With a click of the mouse!", 150, 150);
}

function draw() {
  
}


function mousePressed() {
  fill(random(255), random(255), random(255));
  rect(mouseX, mouseY, random(100), random(100));
  return false;
}
