var gameState
var vida

var milhoChorando, milhoChorando_img
var milhoSorrindo, milhoSorrindo_img
var milhoMorto, milhoMorto_img

var passaro, passaro_img
var porco, porco_img
var lama, lama_img
var elevador, elevador_img
var esmagadorMilho
var trituradorMilho, trituradorMilho_img
var cenario, cenario_img
var destino, destino_img
var apoio
var paredeInvisivel

var chao, plataforma_1, plataforma_2, plataforma_3
var parede

function preload() {
  milhoChorando_img = loadImage("assets/Milho Chorando.png");
  milhoSorrindo_img = loadImage("assets/Milho Sorrindo.png");
  milhoMorto_img = loadImage("assets/Milho Morto- Amido.png");

  passaro_img = loadImage("assets/Pássaro.png");
  porco_img = loadImage("assets/Porco- Inimigo.png");
  lama_img = loadImage("assets/Lama- Obstáculo.png");
  elevador_img = loadImage("assets/Elevador.png");
  trituradorMilho_img = loadImage("assets/Triturador do Milho.png");

  cenario_img = loadImage("assets/Cenário- Fundo.jpg");
  destino_img = loadImage("assets/Destino- Fazenda e Familia.png");
}

function setup() {
  createCanvas(1300,600);
  imageMode(CENTER);

  chao = createSprite(650, 595, 1300, 50);
  chao.shapeColor = "green";
  
  parede = createSprite(500, 402, 20, 400);
  parede.shapeColor = "grey"

  plataforma_1 = createSprite(10, 420, 500, 20);
  plataforma_1.shapeColor= "grey"

  plataforma_2 = createSprite(10, 210, 500, 20);
  plataforma_2.shapeColor= "grey"

  plataforma_3 = createSprite(1290, 150, 500, 20);
  plataforma_3.shapeColor= "brown"

  destino = createSprite(1210, 100, 100, 60);
  destino.addImage(destino_img)
  destino.scale = 0.2;

  lama = createSprite(380, 565, 150, 30);
  lama.addImage(lama_img);
  lama.scale = 1.15;

  milhoSorrindo = createSprite(100, 540, 70, 70);
  milhoSorrindo.addImage(milhoSorrindo_img);
  milhoSorrindo.scale = 0.55;

  trituradorMilho = createSprite(585, 510, 60, 60);
  trituradorMilho.addImage(trituradorMilho_img);
  trituradorMilho.scale = 0.6

  apoio = createSprite(705, 530, 80, 100);
  apoio.shapeColor = "grey"

  porco = createSprite(800, 530, 80, 80);
  porco.addImage(porco_img)
  porco.scale = 0.9

  passaro = createSprite(980, 100, 100, 60);
  passaro.addImage(passaro_img)
  passaro.scale = 0.35

  esmagadorMilho = createSprite(450, 300, 80, 150)
  esmagadorMilho.shapeColor = "darkGrey"

  paredeInvisivel = createSprite(1, 310, 10, 200);
  paredeInvisivel.visible = false;

  

}

function draw() {
  background("green");
  image(cenario_img, 650, 300, displayWidth, displayHeight)
  
  milhoSorrindo.debug = true;
  milhoSorrindo.setCollider("rectangle", 0, 0, 30, 85);

    if (keyDown(UP_ARROW)){
      milhoSorrindo.position.y -= 2
    }
    if (keyDown(DOWN_ARROW)){
      milhoSorrindo.position.y += 2
    }
    if (keyDown(RIGHT_ARROW)){
      milhoSorrindo.position.x += 2
    }
    if (keyDown(LEFT_ARROW)){
      milhoSorrindo.position.x -= 2
    }

    if (milhoSorrindo.collide(plataforma_1)||milhoSorrindo.collide(plataforma_2)
    ||milhoSorrindo.collide(plataforma_3)||milhoSorrindo.collide(parede)){
      milhoSorrindo.position.x = 100
      milhoSorrindo.position.y = 540
    }

    esmagadorMilho.velocity.x = -3;

    if (esmagadorMilho.collide(paredeInvisivel)){
      esmagadorMilho.velocity.x = +3;
    }
    if (esmagadorMilho.collide(parede)){
      esmagadorMilho.velocity.x = -3;
    }

  drawSprites();
}



/*||milhoSorrindo.collide(plataforma_2)
    ||milhoSorrindo.collide(plataforma_3)||milhoSorrindo.collide(parede)*/