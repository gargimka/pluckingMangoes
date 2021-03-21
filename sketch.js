
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var treeimg;
var mangoimg;
var boyimg;
var rockimg;

function preload()
{
	bg1=loadImage("bg.jpg");
}

function setup() {
	createCanvas(800,600);

  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   tree1=new Tree(620,260,350,500);
  
   ground1=new Ground(400,500,750,20);

   mango1=new Circle(520,300,1);
   mango2=new Circle(530,200,1);
   mango3=new Circle(629,229,1);
   mango4=new Circle(620,120,1);
   mango5=new Circle(720,300,1);

   boy1=new Boy(200,400,100,200);
   box=new Boy(245,370,1,1);

   rock1=new Rock(245,370,30,30);
   chain1=new Chain(box.body,rock1.body);
   slingshot1 = new SlingShot(rock1.body,{x:245, y:370});
	Engine.run(engine); 
}
function draw() {
  rectMode(CENTER);
  background(bg1);
  
  ground1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy1.display();	
  rock1.display();
  box.display();
  chain1.display();
 // slingshot1.display();
 DetectCollition(rock1,mango1);
 DetectCollition(rock1,mango2);
 DetectCollition(rock1,mango3);
 DetectCollition(rock1,mango4);
 DetectCollition(rock1,mango5);

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(rock1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}

function keyPressed(){
  if(keyCode==32){
	  Matter.body.setPosition(rock1.body,{x:245, y:370})
   slingshot1.attach(rock1.body);
  }

}
function DetectCollition(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+stone.r){
		Matter.body.setStatic(lmango.body,false);
	}
}

