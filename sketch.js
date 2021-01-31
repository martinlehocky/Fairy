var fairy, fairyimage, star, starimage;


function preload()
{
  fairyimage = loadAnimation("images/fairy1.png", "images/fairy2.png");
  starimage = loadImage("images/star.png");
   //preload the images here
}

function setup() {
  createCanvas(800, 750);
  fairy = createSprite(400, 375, 10, 10);
  fairy.addAnimation("fairy", fairyimage);
  fairy.scale = 0.3;
  fairy.setCollider('circle',500,-30,50)

  star = createSprite(600, 100, 10, 10);
  star.addImage(starimage);
  star.scale = 0.2;
}


function draw() {
  background("black");

  if(keyDown(LEFT)){

    fairy.x = fairy.x - 10;

  }

  if(keyDown(RIGHT)){

    fairy.x = fairy.x + 10;

  }

  if(keyDown("DOWN")){

    star.velocityY = 5;

  }


  star.collide(fairy);

  drawSprites();
}
