var car,wall,speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  car=createSprite(200, 200, 50, 10);
    thickness=random(22,83);
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor="brown";
  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX=speed;
  
}

function draw() {
  background(0);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(deformation>10){
      car.shapeColor=color(255,0,0);
    }
   
    if(deformation<10){
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}