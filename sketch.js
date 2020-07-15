//Global Variables
var bananaImage, obstacleImage, obstacleGroup, bananaGroup;
var background1, score=0;
var backImage, player, banana, obstacle;
var PLAY, END;
var gameState;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("Banana.png");
  obstacle_img=loadImage("stone.png");
}


function setup() {
  createCanvas(600,300);
  
  background1=createSprite(300,50,10,10);
  background1.addImage(backImage);
  background1.velocityX=-5;
  background1.scale=1.5;
  player=createSprite(100,250,10,10);
  player.addAnimation("Monkey", player_running);
  player.scale=0.2;
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  
 
}


function draw(){
 background(255);
  edges=createEdgeSprites();
  
 if(bananaGroup.isTouching(player)){
  score=score+2;
   bananaGroup.destroyEach();
 }
  if(obstacleGroup.isTouching(player)){
    player.scale=0.1;
     }

  if (background1.x<0){
    background1.x=background1.width/2;
  }
  if (keyDown("space")){
    player.velocityY=-10;
  }
  player.velocityY=player.velocityY+0.8;
  food();
  stones();
  player.collide(edges[3]);
  
  switch(score){
    case 10: player.scale=0.12;
      break;
    case 20: player.scale=0.14;
      break;
    case 30: player.scale=0.16;
      break;
    case 40: player.scale=0.18;
      break;
    case 50: player.scale=0.20;
      break;
      default: break;
  }
  
  drawSprites();
  text("Score: "+score,300,50);
}
function food(){
  if(frameCount%80===0){
    banana=createSprite(600,150,10,10);
    banana.y=Math.round(random(50,150));
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.scale=0.05;
    banana.lifetime=200;
    bananaGroup.add(banana);
  }
}
function stones(){
  if(frameCount%150===0){
    obstacle=createSprite(600,300,10,10);
    obstacle.addImage(obstacle_img);
    obstacle.velocityX=-4;
    obstacle.scale=0.3;
    obstacle.lifetime=200;
    obstacleGroup.add(obstacle);
  }
}

