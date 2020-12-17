var bullet,wall,thickness,speed,weight,damage;
function setup()  {
    createCanvas(1200,400);
    bullet=createSprite(100,200,50,10);
    bullet.velocityX=30;
    speed=random(223,321);
    weight=random(30,52);
    wall=createSprite(1150,200,40,400);
    thickness=random(22,83);
}

function draw()  {
    background("black");
    collision(bullet,wall);
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    drawSprites();
    fill("grey")
    text("Bullet Speed: "+speed,50,50);
    text("Bullet Weight: "+weight,50,65);
    text("Wall Thickness: "+thickness,50,80);
    text("Damage: "+damage,50,95);
}