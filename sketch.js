
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var slingshot;

function preload()
{
	boy_img = loadImage("boy.png");
	}

function setup() {
	createCanvas(1200, 700);
    engine = Engine.create();
	world = engine.world;
	stone = new Stone(130,530,40);
		ground = new Ground(600,height,1200,20);
		slingshot = new Slingshot(stone.body,{x:210, y:530});
		tree = new Tree(900,400,500,600);
		mango1 = new Mango(1030,100,30);
		mango2 = new Mango(1000,430,30);
		mango3 = new Mango(820,500,40);
		mango4 = new Mango(820,100,40);
		
			Engine.run(engine);
  
}


function draw() {
   background("pink");

  ground.display();
   slingshot.display(); 
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 tree.display();
 image(boy_img,200,470,200,300);
 stone.display();
 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
    drawSprites();
	textSize(14);
	fill("white");
	text("'Press Space To Get A Second Chance To Play'",100,50);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
  
  function mouseReleased(){
	slingshot.fly();
  }
  
  function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:210,y:530});
		slingshot.attach(stone.body);
	}
  }

  function detectCollision(lstone,lmango){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false);
}
  }

  
  