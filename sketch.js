
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4,ball5,ground1
var rope1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball1= new ball(250,300,50);
    ball2= new ball(300,300,50);
    ball3= new ball(350,300,50);
    ball4= new ball(400,300,50);
    ball5= new ball(450,300,50);
    ground1= new roof();
    rope1= new rope(ball1.body,ground1.body,-100,0);
    rope2= new rope(ball2.body,ground1.body,-50,0);
    rope3= new rope(ball3.body,ground1.body,0,0);
    rope4= new rope(ball4.body,ground1.body,50,0);
    rope5= new rope(ball5.body,ground1.body,100,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ground1.display();
  ballU();
  drawSprites();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function ballU(){
  if (keyDown("up")){
    Matter.Body.applyForce(ball1.body,{x:ball1.x_pos(), y:ball1.y_pos()},{x:-25,y:-75});
  }
}



