function collision(bullet,wall)  {
    if(wall.x-bullet.x<(bullet.width+wall.width)/2)  {
        bullet.velocityX=0;
        if(damage<=10)  {
            wall.shapeColor="green";
            fill("green");
            text("The wall is effective against the bullet",500,50);
        }
        else  {
            wall.shapeColor="red";
            fill("red");
            text("The wall is not effective against the bullet.",500,50);
        }
        return true;
    }
    else  {
        return false;
    }
}