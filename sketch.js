var waterCollected = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  box = createSprite(width / 2, height / 2, 200, 200);
  box.shapeColor = "pink"
  alert("hi3")

  var schoolRef = database.ref("school1/");
  schoolRef.on("value", readWater);
}

function draw() {
  background(255, 255, 255);
  textSize(50)
  text(waterCollected,width/2,height/2-200)
  
  if (touches.length > 0) {

    alert("touch x : " + touches[0].x)
    alert("box.x :" + box.x)
    alert("box.y :" + box.y)
    alert("touch y :" + touches[0].y)

    if (touches[i].x > box.x - 100 && touches[i].x < box.x + 100 && touches[i].y > box.y - 100 && touches[i].y < box.y + 100) {
      alert("pressed")
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
