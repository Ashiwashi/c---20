var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);

  
  car = createSprite(20, 200, 30, 30);
  car.shapeColor = "grey";
  wall = createSprite(600, 200, 30, 100);
  wall.shapeColor = "grey";

  speed = random(55, 90);
  weight = random(400, 1500);

}

function draw() {
  background(255,255,255);  
  
  if(keyDown("space")){

    car.velocityX = speed;

  }


  if(wall.x - car.x < car.width/2 + wall.width/2 ){

    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if( deformation > 180)
    {
      car.shapeColor = "red";
    }
    if(deformation < 180 && deformation > 100)
    {
      car.shapeColor = "yellow";
    }
    if(deformation < 100)
    {
      car.shapeColor = "green";
    }
  }
  drawSprites();
}