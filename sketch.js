//Create variables here
var dog,dogImg,happyDogImg,foodS,foodStock;
var database
var count=2;
function preload()
{
  happyDogImg=loadImage("Dog.png")
  dogImg=loadImage("happydog.png")
	//load images here
}

function setup() {

  createCanvas(500,500);
  database = firebase.database();
  background(46,139,87)
 foodStock=database.ref('Food')
 foodStock.on("value",readStock)
 dog=createSprite(250,400)
dog.addImage(dogImg)
dog.scale=0.20;

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDogImg)
}
}


function draw() {  
 
  drawSprites();
  //add styles here
  textSize(20)
  fill("red")
  text("Note:Press UP_ARROW to feed Drago milk!",40,100)
}


function readStock(){
foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
database.ref('/').update({
  Food:x
})
}
