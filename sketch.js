
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperBall,paperball,dustbinObj;	
var world;

function preload(){
paperball = loadImage("paper.png")

}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,690,width,20);
	dustbinObj=new dustbin(1200,660);

	paperBall = new paper(100,650,50,50)
	paperBall.color = "white";

	Engine.run(engine);
	//	paperBall.bounceOff(dustbinObj);
	

}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  drawSprites();
  groundObject.display();
  dustbinObj.display();
  paperBall.display();

}

