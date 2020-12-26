class Mango{
    constructor(x, y) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1.0,
        }
        
        this.width=80;
        this.height=80;
        this.image = loadImage("images/mango.png");
        this.body = Bodies.rectangle(x,y,80,80, options);
       
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}