function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  if(touches.length>0)
    console.log(touches[0])
  
  drawSprites();
  
}