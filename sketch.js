function setup() {
  createCanvas(windowWidth,windowHeight);
  box=createSprite(width/2, height/2, 50, 50);
  box.shapeColor="green"
  alert("hi1")
}

function draw() {
  background(255,255,255);  
  if(touches.length>0){
    alert(touches[0].x)
    touches = []
  }
  
  drawSprites();
  
}
