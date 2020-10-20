
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ground
var tree
var backImage
var mango, mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9
var mango10, mango11, mango12, mango13, mango14, mango15, mango16, mango17, mango18


var slingShot
var stone
var base, base2, base3
var backImage

function preload()
{
 
backImage = loadImage("back.png")

}

function setup() {
	createCanvas(1300, 550);


	engine = Engine.create();
	world = engine.world;


ground = new Ground(650, 545, 1300, 10)
base = new Base(650, 410, 300, 20)

mango = new Mango(680, 390, 20, 40)
mango1 = new Mango(740, 390, 20, 40)
mango2 = new Mango(620, 390, 20, 40)
mango3 = new Mango(560, 390, 20, 40)

mango4 = new Mango(740, 320, 20, 40)
mango5 = new Mango(680, 320, 20, 40)
mango6 = new Mango(620, 320, 20, 40)

mango7 = new Mango(740, 270, 20, 40)
mango8 = new Mango(680, 270, 20, 40)

mango9 = new Mango(740, 220, 20, 40)


base2 = new Base(1050, 200, 300, 20)

mango10 = new Mango(990,160, 20, 40)
mango11 = new Mango(1070, 160, 20, 40)
mango12 = new Mango(1150, 160, 20, 40)

mango13 = new Mango(990, 120, 20, 40)
mango14 = new Mango(1070, 120, 20, 40)
mango15 = new Mango(1150, 120, 20, 40)

mango16 = new Mango(990,80, 20, 40)
mango17 = new Mango(1070, 80, 20, 40)
mango18 = new Mango(1150, 80, 20, 40)





stone = new Stone(130, 490, 20)
slingShot = new Sling(stone.body, {x:180, y:305});

	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(backImage);

 
  
  ground.display();
 base.display();
  stone.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
 
  base2.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  mango18.display();
 

  drawSprites();
 
}



        

function mouseDragged(){

	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
	
	}
	
	function mouseReleased(){
	
		
		slingShot.fly()
		
		}

    function keyPressed(){

      if(keyCode === 32){
      Matter.Body.setPosition(stone.body, {x:235, y:420})
    slingShot.attach(stone.body)

      }
      
      }