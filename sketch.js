function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(width/2, height/2, 50, 50);
  alert("hi")
}

function draw() {
  background(255,255,255);  
  if(touches.length>0)
    alert(touches[0])
  
  drawSprites();
  
}
