
var object1, object2
var fixed, move
var fixed1, fixed2, fixed3, fixed4

function setup() {
  createCanvas(1200,800);
  fixed = createSprite(400, 200, 50, 50);
 fixed.shapeColor = "blue"
  move = createSprite(400, 400, 50, 50);
  move.shapeColor = "blue"
  move.velocityY = -5
  fixed.velocityY = 5
}

function draw() {
  background(0);  
move.x = World.mouseX
move.y = World.mouseY
if (isTouching(fixed, move)){
  fixed.shapeColor = "red"
  move.shapeColor = "red"
}
else{
  fixed.shapeColor = "blue"
  move.shapeColor = "blue"
}
bounceOff(move, fixed)
  drawSprites();
}












