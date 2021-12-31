
var trex, trex_correndo;
var bordas;
var solo,imagemsolo;
var soloinv;

function preload(){
 
  //carregar imagens e animações do jogo
  trex_correndo = loadAnimation("trex1.png","trex3.png","trex4.png");
imagemsolo = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("correndo", trex_correndo);
  trex.scale = 0.5;

  solo = createSprite(300,180,600,20);
  solo.velocityX = -2;
  solo.addImage(imagemsolo)
  solo.x = solo.width/2;

  soloinv = createSprite (300, 195, 600, 20);
  soloinv.visible = false

  //carregar as bordas
  bordas = createEdgeSprites();

}

function draw(){
  background("white");

  //usando o console
  console.log(trex.y);

  if(solo.x < 0 ){
    solo.x = solo.width/2;
  }
  //o trex pula quando aperta o espaço
  if(keyDown("space")&& trex.y > 160){
    trex.velocityY = -10;
  }

  //a gravidade do trex
  trex.velocityY = trex.velocityY + 0.5;

  //trex collide com o chão
  trex.collide(soloinv);
 
  drawSprites();
}