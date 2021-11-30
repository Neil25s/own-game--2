var alien,alienImg,coin,coinImg,food,foodImg,key,keyImg
var bg,bgImg;
var keyGroup;


function preload(){
  bgImg=loadImage("BG2.jpg")
  alienImg=loadImage("alien.png")
  coinImg=loadImage("coin.png")
  foodImg=loadImage("apple.png")
  keyImg=loadImage("key.png")

}

function setup() {
 /*wall1=createSprite(300,20,300,20)
 wall2=createSprite(300,160,300,20)
 wall3=createSprite(300,300,300,20) 
 wall4=createSprite(300,440,300,20)
 wall5=createSprite(300,580,300,20)
 wall6=createSprite(300,720,300,20)
 wall7=createSprite(300,860,300,20)
 wall8=createSprite(300,1000,300,20)
 wall9=createSprite(450,800,20,300)
 wall10=createSprite(450,900,20,400)
 wall11=createSprite(450,500,20,400)
 wall12=createSprite(575,400,20,775)
 wall13=createSprite(474,860,600,20)
 wall14=createSprite(300,500,300,20)
 wall15=createSprite(300,500,300,20)
 wall16=createSprite(300,500,300,20)
 wall17=createSprite(300,500,300,20)
 wall18=createSprite(300,500,300,20)
 wall19=createSprite(300,500,300,20)*/

   wall1 = createSprite(600,200, 40,160);
   wall2 = createSprite(600, 294, 160, 40);
 wall3 = createSprite(742, 300, 40, 160);
  wall4 = createSprite(598, 368,160,40);
 wall5 = createSprite(696,440,160, 40);
 wall6 = createSprite(560, 456, 40, 160);
 wall7 = createSprite(642, 580, 40, 160);
 wall8 = createSprite(500,590, 160, 40);
 wall9 = createSprite(468,452, 40,160);
 wall10 = createSprite(755,572,40,160);
 wall11 = createSprite(100, 716,160,40);
 wall12 = createSprite(252, 700, 40,160);
 wall13 = createSprite(144,630,160, 40);
 wall14 = createSprite(86, 554, 440, 40);
 wall15 = createSprite(332, 654, 40, 200);
 
 wall16 = createSprite(440, 680, 40, 160);
 wall17 = createSprite(500,742, 160, 40);
 wall18 = createSprite(560, 680, 40, 160);
 wall19 = createSprite(698, 702, 160, 20);
 wall20 = createSprite(700,768, 160, 40);
  
 wall21 = createSprite(300, 480, 160, 40);
 wall22 = createSprite(100,480, 160, 40);
 wall23 = createSprite(300, 400, 160, 40);
 wall24 = createSprite(100,400, 160, 40);
 wall25 = createSprite(200,170, 40, 160);
 
 wall26 = createSprite(300,210, 160, 40);
 wall27 = createSprite(360, 270, 40, 160);
 wall28 = createSprite(454, 288, 100, 40);
 wall29 = createSprite(680,210, 40, 40);
 wall30 = createSprite(100,240, 40, 200);
 
 wall31 = createSprite(240, 128, 200, 40);
 wall32 = createSprite(400, 124, 40, 160);
 wall33 = createSprite(34, 242, 40, 40);
 wall34 = createSprite(488, 76, 40, 160);
 wall35 = createSprite(98, 44, 320, 40);
 wall36 = createSprite(600, 44, 160, 40);
 wall37 = createSprite(480,236, 40, 40);
 wall38 = createSprite(712,128, 160,40);

 //wall10.shapeColor="Red" 

  alien=createSprite(40,760,26,26)
  alien.addImage(alienImg)
  alien.scale=0.35
  createCanvas(800,800);
  alien.debug=true;
  alien.setCollider("rectangle",0,0,70,70)

  key=createSprite(700,572,20,20)
  key.addImage(keyImg);
 // key.visible=false

food=createSprite()



/*
//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
*/
  
keyGroup=new Group()
keyGroup.add(key)


}

function draw() {
  background(bgImg); 

  createEdgeSprites();

  //if (alien.x===700 || alien.y===572){
    if (keyGroup.isTouching(alien)){
      
    
    //  key.visible=false;
     console.log("Ohh")
    keyGroup.destroyEach();
    }

  if(keyDown("up")) {
   // alien.velocityX = 0;
   // alien.velocityY = -2;
    alien.y=alien.y-12;
  }
  if (keyDown("down")) {
  // alien.velocityX = 0;
    //  alien.velocityY = 3;
     alien.y=alien.y+4;
  }
  if (keyDown("left")) {
   // alien.velocityX = -3;
   // alien.velocityY = 0;
    alien.x=alien.x-4;
  }
    if (keyDown("right")) {
    //alien.velocityX = 3;
  // alien.velocityY = 0;
    alien.x=alien.x+4; }



    if (alien.isTouching(wall1)||alien.isTouching(wall2)
  ||alien.isTouching(wall3)||alien.isTouching(wall4)||
  alien.isTouching(wall5)||alien.isTouching(wall6)||alien.isTouching(wall7)||
  alien.isTouching(wall8)||alien.isTouching(wall9)||alien.isTouching(wall10)||
 alien.isTouching(wall11)||alien.isTouching(wall12)||
  alien.isTouching(wall13)||alien.isTouching(wall14)||alien.isTouching(wall15)
  ||alien.isTouching(wall16)||alien.isTouching(wall17)||alien.isTouching(wall18)
  ||alien.isTouching(wall19)||alien.isTouching(wall20)||alien.isTouching(wall21)
  ||alien.isTouching(wall22)||alien.isTouching(wall23)||alien.isTouching(wall24)
  ||alien.isTouching(wall25)||alien.isTouching(wall26)||alien.isTouching(wall27)
  ||alien.isTouching(wall28)||alien.isTouching(wall29)||alien.isTouching(wall30)
  ||alien.isTouching(wall31)||alien.isTouching(wall32)||alien.isTouching(wall33)
  ||alien.isTouching(wall34)||alien.isTouching(wall35)||alien.isTouching(wall36)
  ||alien.isTouching(wall37)||alien.isTouching(wall38)) {
    alien.x = 40;
    alien.y = 760;
    alien.velocityX = 0;
    alien.velocityY = 0;
  }

  
/*
  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
*/
drawSprites();
}

