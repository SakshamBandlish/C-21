var fixedRect, movingRect;
var game1, game2, game3, game4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "blue";

  game1 = createSprite(100, 100, 50, 50);
  game1.shapeColor = "yellow";

  game2 = createSprite(200, 100, 50, 50);
  game2.shapeColor = "yellow";

  game3 = createSprite(100, 300, 50, 50);
  game3.shapeColor = "red";

  game4 = createSprite(400, 300, 50, 50);
  game4.shapeColor = "blue";
  

  game3.velocityX = 2;
  game4.velocityX = -2;
}

function draw() {
  background(225,225,225);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(game1, movingRect)){
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "green";
  }
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "blue";
  }

  bounceOff(game3, game4);

  drawSprites();
}