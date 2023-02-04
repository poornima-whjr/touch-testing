function setup() {
  createCanvas(windowWidth,windowHeight);
  box=createSprite(width/2, height/2, 200, 200);
  box.shapeColor="blue"
  alert("hi2")
}

function draw() {
  background(255,255,255);  
  if(touches.length>0){
    
    alert(touches[0].x)
    
    if(touches[i].x>box.x-100 && touches[i].x<box.x+100 && touches[i].y>box.y-100 && touches[i]<box.y+100){
      alert("pressed")
    }
    touches = []
  }
  
  drawSprites();
  
}
