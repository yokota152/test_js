function setup() {
  createCanvas(1250, 700);
}


function draw() {
  if(mouseIsPressed)
  {
    fill(0);
  }
  else
  {
    fill(255);
  }
  ellipse(mouseX,mouseY,50,50);
}
