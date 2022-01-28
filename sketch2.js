var bg,bgImg,bgImg2,bgImg3,bgImg4,bgImg5;
var player,playerImg,headIMG,thronIMG,thronIM;
var gameState="start";
var l1ob1,l1ob2,l1ob3,l1ob4,l1ob5,l1ob6,l1ob7,l1ob8,l1ob9,liob0,l1ob11,l1ob12,l1ob13,l1ob14,l1ob15;
var key1,keyImg,key2;
var clue1,q1,question1,question2;
var edges;
var l2ob1,l2ob2,l2ob3,l2ob4,l2ob5,l2ob6,l2ob7,l2ob8,l2ob9,l2ob10,l2ob11,l2ob12,l2ob13;
var soundWin;
var winIMG,winSprite;
var l3ob1,l3ob2,l3ob3,l3ob4,l3ob5,l3ob6,l3ob7,l3ob8,l3ob9,l3ob10,l3ob11;

// q1 = b,q2 = t and q3 = m;w

function preload(){
  bgImg=loadImage("intro.jpg");
  bgImg2=loadImage("level1.jpg");
  bgImg3=loadImage("l2.jpg");
  bgImg4=loadImage("l3.jpg");
  bgImg5=loadImage("GM.png");
  playerImg=loadImage("th.png");
  keyImg=loadImage("key.png");
  question1=loadImage("question1.png");
  question2=loadImage("question2.png");
  soundWin = loadSound("sound1.wav");
  headIMG=loadImage("head.jpg");
  thronIMG=loadImage("thron.jpg");
  thronIM=loadImage("thorn2.jpg");
  winIMG=loadImage("win.png");
}


function setup(){
  createCanvas(800,600) 
  bg=createSprite(width/2,height/2);
  bg.addImage(bgImg)

  edges = createEdgeSprites();

  l1ob1=createSprite(width/2,height/2+55,450,300);
  l1ob1.shapeColor="blue";
  l1ob1.visible=false;
  l1ob2=createSprite(width/2+250,height/2-20,450,300)
  l1ob2.shapeColor="red";
  l1ob2.visible=false;
  l1ob3=createSprite(720,430,200,20);
  l1ob3.shapeColor="blue";
  l1ob3.visible=false;
  l1ob4=createSprite(780,50,70,200);
  l1ob4.shapeColor="red";
  l1ob4.visible=false;
  l1ob5=createSprite(140,430,50,50);
  l1ob5.shapeColor="red";
  l1ob5.visible=false;
  l1ob6=createSprite(660,495,60,60);
  l1ob6.shapeColor="red";
  l1ob6.visible=false;
  l1ob7=createSprite(20,340,46,250);
  l1ob7.shapeColor="blue";
  l1ob7.visible=false;
  l1ob8=createSprite(150,70,300,135);
  l1ob8.shapeColor="blue";
  l1ob8.visible=false;
  l1ob9=createSprite(75,560,60,60);
  l1ob9.addImage(thronIMG);
  l1ob9.scale=1;
  l1ob9.visible=false;
  l1ob0=createSprite(335,105,55,55);
  l1ob0.addImage(headIMG);
  l1ob0.scale=0.97;
  l1ob0.visible=false;
  l1ob11=createSprite(465,105,55,55);
  l1ob11.addImage(thronIMG);
  l1ob11.visible=false;
  l1ob12=createSprite(35,157,100,75);
  l1ob12.visible=false;
  l1ob13=createSprite(600,5,350,20);
  l1ob13.shapeColor="red";
  l1ob13.visible=false;
  l1ob14=createSprite(675,75,120,120);
  l1ob14.shapeColor="blue";
  l1ob14.visible=false;
  l1ob15=createSprite(140,300,50,50);
  l1ob15.addImage(thronIMG);
  l1ob15.visible = false;

  l2ob1=createSprite(690,540,245,110);
  l2ob1.shapeColor = "red";
  l2ob1.visible=false;
  l2ob2=createSprite(663,270,50,50);
  l2ob2.shapeColor="red";
  l2ob2.visible = false;
  l2ob3=createSprite(750,480,120,240);
  l2ob3.shapeColor="red";
  l2ob3.visible = false;
  l2ob4=createSprite(627,380,60,50);
  l2ob4.shapeColor="blue";
  l2ob4.visible = false;
  l2ob5=createSprite(110,250,220,460);
  l2ob5.shapeColor="blue";
  l2ob5.visible = false;
  l2ob6=createSprite(547.5,420,50,345);
  l2ob6.shapeColor="blue";
  l2ob6.visible = false;
  l2ob7=createSprite(340,330,330,175);
  l2ob7.shapeColor="blue";
  l2ob7.visible = false;
  l2ob8=createSprite(311,153,60,60);
  l2ob8.addImage(thronIM);
  l2ob8.scale = 1.7;
  l2ob8.visible = false;
  l2ob9=createSprite(430,208,60,60);
  l2ob9.addImage(thronIM);
  l2ob9.scale = 1.7
  l2ob9.visible = false;
  l2ob10=createSprite(193,564,60,60);
  l2ob10.addImage(thronIM);
  l2ob10.visible = false;
  l2ob10.scale = 1.7;
  l2ob11=createSprite(473,63,650,125);
  l2ob11.shapeColor="blue";
  l2ob11.visible = false;
  l2ob12=createSprite(311,565,60,60);
  l2ob12.addImage(thronIM);
  l2ob12.visible = false;
  l2ob12.scale = 1.7;
  l2ob13=createSprite(310,510,60,60);
  l2ob13.addImage(thronIM);
  l2ob13.scale = 1.7;
  l2ob13.visible = false;
  key2=createSprite(253,570,30,50);
  key2.visible = false;

   sprite = createSprite(400,300,800,600);
   sprite.shapeColor = "white";
   sprite.visible=false;  

  player=createSprite(665,560,50,50)
  player.addImage(playerImg)
  player.scale=0.1

  key1=createSprite(595,100,10,10)
  key1.addImage(keyImg)
  key1.scale=0.015  
  key1.visible=false;

  q1=createSprite(width/2,height/2);
  q1.addImage(question1);
  q1.scale=0.7;
  q1.visible=false; 

  q2=createSprite(width/2,height/2);
  q2.addImage(question2);
  q2.scale=0.7;
  q2.visible=false; 
  clue1=createSprite(68,286,10,10);
  clue1.visible=false;

  winSprite=createSprite(400,300,800,600);
  winSprite.addImage(winIMG);
  winSprite.visible=false;
  winSprite.scale=3;
}

function draw(){
  background(0);
  
  player.bounceOff(edges);

  if(keyDown(UP_ARROW)){
    player.y=player.y-5;
  }
  if(keyDown(DOWN_ARROW)){
    player.y=player.y+5;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x=player.x+5;
  }
  if(keyDown(LEFT_ARROW)){
    player.x=player.x-5;
  }


  if(gameState==="start"){
    player.visible=false;
    if(keyDown("space")){
      gameState="level1"
    }
  }
  else if(gameState==="level1"){
    player.visible=true;
    console.log(gameState)
    bg.addImage(bgImg2)
    bg.scale = 1;
    l1ob9.visible=true;
    l1ob0.visible=true;
    l1ob11.visible=true;
    l1ob15.visible=true;
    if(player.isTouching(clue1)){
        key1.visible=true;
    }
  
    
  player.bounceOff(l1ob1);
  player.bounceOff(l1ob3);
  player.bounceOff(l1ob7);
  player.bounceOff(l1ob8);
  player.bounceOff(l1ob12);
  player.bounceOff(l1ob14);

    if(player.isTouching(key1)){
        q1.visible=true;

        if(keyDown("b")){
          gameState="level2"
          player.x=250;
          player.y=150;
          soundWin.play();
        }
    }
   
    if(player.isTouching(l1ob2) || player.isTouching(l1ob4)||player.isTouching(l1ob5)||player.isTouching(l1ob6)||player.isTouching(l1ob9)||player.isTouching(l1ob13)||player.isTouching(l1ob0)||player.isTouching(l1ob15)){
      player.destroy();
      gameState="over"

    }

  }
  else if(gameState==="level2"){
    l1ob1.destroy();
    l1ob2.destroy();
    l1ob3.destroy();
    l1ob4.destroy();
    l1ob5.destroy();
    l1ob6.destroy();
    l1ob7.destroy();
    l1ob8.destroy();
    l1ob9.destroy();
    l1ob0.destroy();
    l1ob11.destroy();
    l1ob12.destroy();
    l1ob13.destroy();
    l1ob14.destroy();
    l1ob15.destroy();
    key1.destroy();
    q1.destroy();
  //console.log(gameState)
    bg.addImage(bgImg3)
    bg.scale=1.7;

    l2ob8.visible = true;
    l2ob9.visible = true;
    l2ob10.visible = true;
    l2ob12.visible = true;
    l2ob13.visible = true;
    player.bounceOff(l2ob5);
    player.bounceOff(l2ob6);
    player.bounceOff(l2ob7);
    player.bounceOff(l2ob11);

    if(player.isTouching(l2ob4)){
      player.x=490;
      player.y=560;
    }

    if(player.isTouching(key2)){
      q2.visible = true;
    }

    if(keyDown("t")){
      l2ob1.destroy(); 
      l2ob2.destroy();
      l2ob3.destroy();
      l2ob4.destroy();
      l2ob5.destroy();
      l2ob6.destroy();
      l2ob7.destroy();
      l2ob8.destroy();
      l2ob9.destroy();
      l2ob10.destroy();
      l2ob11.destroy();
      l2ob12.destroy();
      l2ob13.destroy();
      key2.destroy();
      q2.destroy();
      player.destroy();
      sprite.visible=true;
    winSprite.visible=true;
      soundWin.play()
    }
    if(player.isTouching(l2ob1)||player.isTouching(l2ob2)||player.isTouching(l2ob3)||player.isTouching(l2ob8)||player.isTouching(l2ob9)||player.isTouching(l2ob10)||player.isTouching(l2ob13)){
      player.destroy();
      gameState ="over";
    }
    
    
  }
                                                           
  else if(gameState==="over"){
    bg.addImage(bgImg5)
    bg.scale=0.5
    l1ob9.destroy();   
    l2ob11.destroy(); 
    l1ob0.destroy();
    l1ob11.destroy();
    l1ob15.destroy();
    l2ob8.destroy();
    l2ob9.destroy();
    l2ob10.destroy(); 
    l2ob12.destroy();
    l2ob13.destroy();
    q1.visible = false;     
    key1.destroy();


  }
  drawSprites();
  
}