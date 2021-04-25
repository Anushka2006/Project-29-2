const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(720,200,200,10);
  
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  wall1 = new Block(645,175,30,40);
  wall2 = new Block(675,175,30,40);
  wall3 = new Block(705,175,30,40);
  wall4 = new Block(735,175,30,40);
  wall5 = new Block(765,175,30,40);
  wall6 = new Block(795,175,30,40);
  
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  wall7 = new Block(675,215,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
  pb = new object(150,255);
  sling = new Chain(pb.body,{x:135,y:230})
  

}
function mouseDragged(){
  
  Matter.Body.setPosition(pb.body, {x: mouseX , y: mouseY});

}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(pb.body,{x:135,y:230})
    sling.attach(pb.body);
  }
}
function draw() {
  background("black"); 
 
  textSize(20);
  fill("lightyellow");
  
  //fill(77,10,38)
  ground.display();
  stand1.display();
  //stand2.display();
  
  strokeWeight(2);
  stroke(15);
  
  text("press space to get another chance", 250,100);
  fill(247,20,115);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill(111, 247, 204);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill(89, 4, 194);
  block13.display();
  block14.display();
  block15.display();
  //wall7.display();
  fill(247, 231, 111);
  block16.display();
  //wall1.display();
  //wall2.display();
  //wall3.display();
  //wall4.display();
  //wall6.display();
  //wall5.display();
 
  pb.display();
  sling.display();
}
