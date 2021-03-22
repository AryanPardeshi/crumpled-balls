var paper,box1,box2,box3,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    paper= new Paper(650,150,20);
	box1 = new Box(660,550,200,30);
	box2 = new Box(600,650,20,100);
	box3 = new Box(600,450,20,100);
	ground = new Ground(400,670,800,20);
	
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();

  ground.display();

  paper.display();
}

function keypressed() {
	if (keyCoad === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85});
	}
}

