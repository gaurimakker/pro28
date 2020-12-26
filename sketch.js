
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var boyImg;

function preload()
{
	boyImg=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(600,670,1200,20);

	tree=new Tree(800,670,500,700);

	boy= new Boy(360,650,500,700);

	mango1 = new Mango(700,200,80,80) 
	mango2 = new Mango(750,210,80,80) 
	mango3 = new Mango(870,90,80,80) 
	mango4 = new Mango(850,200,80,80) 
	mango5 = new Mango(900,250,80,80) 
	mango6 = new Mango(936,276,80,80) 
	mango7 = new Mango(650,160,80,80) 
	mango8 = new Mango(700,86,80,80) 
	mango9 = new Mango(800,68,80,80) 
  mango10 = new Mango(660,286,80,80)
  mango11 = new Mango(570,262,80,80)
  


  stone= new Stone(148,236,80,80);
  
  slingshot=new Slingshot(stone.body,{x:115, y:493})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  text("x:"+mouseX+"y:"+mouseY,50,50);

  ground.display();
  tree.display();

  boy.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  slingshot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);

  
  drawSprites();
 
}
function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.width/2+lstone.width/2){
    Matter.Body.setStatic(lmango.body,false);
  }
}

function keyPressed(){
	if(keyCode===32){
    //Matter.Body.setPosition(stone.body,{x:235, y:420});
    slingshot.attach(stone.body);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}