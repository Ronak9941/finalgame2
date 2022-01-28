var logo,logoImg
var bgimg,play,about,back,popgray,popimg,groundimg,ground
var gameState="wait"


function preload(){
bgimg= loadImage("wait.jpg")
logoimg=loadImage("logo.gif")
//playimg=loadImage("button1.png")
popimg=loadImage("button1.png")
groundimg=loadImage("ground.JPG")

}

function setup(){
createCanvas(windowWidth-20,windowHeight-20)

ground=createSprite(width/2,height/2)
ground.addImage(groundimg)
ground.visible=false

logo= createSprite(width/2,height/2.25)
logo.addImage(logoimg)
logo.scale=2;

popgray=createSprite(width/2,height/2)
popgray.addImage(popimg)
popgray.visible=false
popgray.scale=2

//play= createSprite(100,100)
//play.addImage(playimg)


home=createImg("home.png")
home.position(width/2-100,height-200)
home.size(240,240)
home.hide()


play=createImg("stonebutton.png")
play.position(width/2,height/2)
play.size(240,240)
play.hide()

about=createImg("stonehow.png")
about.position(width/2-200,height/2+45)
about.size(150,150)
about.hide()

/*back.createButton("back")
back.position(100,100)
*/


}

function draw(){

    if(gameState==="wait"){
    background(bgimg)
    play.show()
    about.show()
}


play.mousePressed(()=>{
    gameState="LEVEL 1"
})


about.mousePressed(()=>{
    gameState="about"
})


if(gameState==="LEVEL 1"){
    background(groundimg)
    play.hide()
    about.hide()
    logo.visible=false
}

if(gameState==="about"){
    play.hide()
    about.hide()
    popgray.visible=true
    home.show()
}

    drawSprites();


}