const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var slingshot;
var engine, world;
var polygon_img;

function preload() {
  polygon_img=loadImage("polygon.png");
}


function setup(){
  var canvas = createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,450,1000,20);
  stand1 = new Ground(430,350,300,20);
  stand2 = new Ground(800,200,225,20)
  //level one(stand1)
  block1 = new Box(330,300,30,40);
  block2 = new Box(365,300,30,40);
  block3 = new Box(400,300,30,40);
  block4 = new Box(435,300,30,40);
  block5 = new Box(470,300,30,40);
  block6 = new Box(505,300,30,40);
  block7 = new Box(540,300,30,40);
  //level two(stand1)
  block8 = new Box(365,225,30,40);
  block9 = new Box(400,225,30,40);
  block10 = new Box(435,225,30,40);
  block11 = new Box(470,225,30,40);
  block12 = new Box(505,225,30,40);
  //level three(stand1)
  block13 = new Box(400,150,30,40);
  block14 = new Box(435,150,30,40);
  block15 = new Box(470,150,30,40);
  //level four(stand1)
  block16 = new Box(435,75,30,40);

  //level one(stand2)
  block17 = new Box(720,150,30,40); 
  block18 = new Box(755,150,30,40);
  block19 = new Box(790,150,30,40); 
  block20 = new Box(825,150,30,40); 
  block21 = new Box(860,150,30,40); 

  //level two(stand2)
  block22 = new Box(755,75,30,40); 
  block23 = new Box(790,75,30,40); 
  block24 = new Box(825,75,30,40); 

  //level three(stand2)
  block25 = new Box(790,0,30,40); 

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new Slingshot(this.polygon,{x:100,y:200});
}

function draw(){
  background("blue");
  Engine.update(engine);
  strokeWeight(4);
  ground.display();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
   
  slingshot.display();
 

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}