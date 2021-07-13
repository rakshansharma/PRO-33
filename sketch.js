var bgImg , boyImg;
var boy;
var Snow  , snowImg;
var ground , boyJump;

function preload() {

      bgImg       =  loadImage("snow1.jpg");
      snowImg      =loadImage("snow5.webp");
      boyImg  = loadAnimation("boy (2).jpg",
                              "boy (3).jpg",
                              "boy (4).jpg",
                              "boy (5).jpg",
                              "boy (6).jpg");
      boyJump = loadAnimation("boy (7).jpg",
                              "boy (8).jpg",
                              "boy (9).jpg");
}

function setup() {
  createCanvas(800,400);

  boy = createSprite(220,310,20,25);
  boy.addAnimation("boyImg" , boyImg);
  boy.velocityX = 3;

  ground = createSprite(0,390,9999999,20);
  ground.visible = false;




}

function draw() {
  var options={
    friction : 4,
    density  : 3,
    restitution : 2
  }

  Snow =  createSprite(Math.round(random(10,750)),0,50,55,options); 
  Snow.addImage(snowImg);
  Snow.scale = 0.09;
  Snow.velocityY = 4;  

  background(bgImg);
  boy.collide(ground);

 
  if(keyCode === 32){
    boy.changeAnimation("boyJump",boyJump);
    boy.velocityY = -4;
 }

  boy.velocityY =  boy.velocityY+4;


  drawSprites();
}
