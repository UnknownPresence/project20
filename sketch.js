var car,wall;
var speed,weight;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 100, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.velocityY = 5; 
  movingRect=createSprite(400, 800, 80, 30); 
  movingRect.shapeColor="green"; 
  movingRect.velocityY = -5;
  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50,200,50.50); 
  wall = createSprite(1500,200,60,height/2);
}

function draw() {
  background(0,0,0);  
  car.velocityX = speed;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2)
    {
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    }
  if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&& 
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)  
    {
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
    }

  if(wall.x-car.x < (car,width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor = color (230,230,0);
    }

    if(deformation<100)
    {
      car.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}