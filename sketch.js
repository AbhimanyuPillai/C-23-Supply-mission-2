var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rightsideSprite, leftsideSprite, basesideSprite,rightSide,leftSide,baseSide;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rightsideSprite = createSprite(300,610,20,100);
	rightsideSprite.shapeColor=color("red")

    leftsideSprite = createSprite(500,610,20,100);
	leftsideSprite.shapeColor=color("red")

	basesideSprite = createSprite(400,650,200,20);
    basesideSprite.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5,  {isStatic : true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 rightSide = Bodies.rectangle(300,610,20,100)
	 World.add(world, rightSide);
	 
	leftSide = Bodies.rectangle(500,610,20,100)
	 World.add(world, leftSide);
	 
	baseSide = Bodies.rectangle(400,650,200,20)
     World.add(world, baseSide);



	Engine.run(engine);
	
	
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  keyPressed();
 
}

function keyPressed() 
{
	if (keyCode === DOWN_ARROW) 
	{
		 Matter.Body.setStatic(packageBody,false)
		
	}

}