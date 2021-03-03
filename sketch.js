
//create global variables here
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstaclesGroup;
var score;
var ground,invisibleGround;

function preload(){
  
  //load images here
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,400);
  
  //create a sprite for monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey running",monkey_running);
  monkey.scale=0.12;
  
  //create moving ground
  ground=createSprite(400,370,900,10);
  ground.velocityX=-4;
  
  
  //create Groups here
  FoodGroup= createGroup();
  obstaclesGroup=createGroup();
  
  //default score
  score=0;
  
  
}


function draw() {
  
  //to create background
  background("white");
  
  //to display sprites
  drawSprites();
  
  //to display score
  fill("black");
  textSize(20);
  text("Survival Time: "+score,200,100);
  
  //to increase score
  score=score+Math.round(random(getFrameRate()/55));
  
  
  
  //to make monkey jump
  if(keyDown("space")&& monkey.y>180 ){
    monkey.velocityY=-12;
  }
  
  //to move ground continuously 
  if(ground.x<150){
    ground.x=ground.width/2;
  }
  
  //to give gravity to monkey
  monkey.velocityY=monkey.velocityY+0.8;
  
  //to make monkey collide with ground and obstacles 
  monkey.collide(ground);
  monkey.collide(obstaclesGroup);
 
  
  
  spawnfood();
  spawnobstacles();
}

function spawnfood(){
  
  //to give gaps between sprites
  if(frameCount%80===0){
  banana=createSprite(600,120,20,20);
  banana.addImage("banana",bananaImage);
  banana.scale=0.1;
  banana.velocityX=-4;
  banana.lifetime=200;
  banana.y=Math.round(random(120,200));
  FoodGroup.add(banana);
  }
}

function spawnobstacles(){
  //to give gaps between sprites 
  if(frameCount%300===0){
    obstacle=createSprite(600,340,20,20);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale=0.15;
    obstacle.velocityX=-4;
    obstacle.lifetime=200;
    obstaclesGroup.add(obstacle);
    
  }
}


