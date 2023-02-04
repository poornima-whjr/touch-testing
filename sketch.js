var waterCollected = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  box = createSprite(width / 2, height / 2, 200, 200);
  box.shapeColor = "black"
  alert("hi4")

  var schoolRef = database.ref("school1/");
  schoolRef.on("value", readWater);
}

function draw() {
  background(255, 255, 255);
  textSize(50)
  text(waterCollected,width/2,height/2-200)
  
  if(mousePressedOver(box)){
       alert("clicked")
      writeWater(waterCollected+1)
    }
  
  if (touches.length > 0) {
    
    
    
    if (touches[0].x > box.x - 100 && touches[0].x < box.x + 100 && touches[0].y > box.y - 100 && touches[0].y < box.y + 100) {
      alert("pressed")
      writeWater(waterCollected+1)
    }

    touches = []
  }

  drawSprites();

}

function writeWater(water) {
  database.ref('/').set({
    'school1': water,
  })
}

function readWater(data) {
  waterCollected = data.val();
  alert(waterCollected);

}
