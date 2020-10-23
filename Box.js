class Box {
    constructor(x, y, width, height){
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.visibility = 255;
      var options = {
        restitution : 0.04,
        friction : 0
      }
      this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
        var angle = this.body.angle; 
        var pos= this.body.position; 
        push(); 
        translate(pos.x, pos.y); 
        rotate(angle); 
        fill("blue");
        rectMode(CENTER); 
        rect(0,0,this.width, this.height); 
        pop();
      }
      else{
        World.remove(world, this.body);
        push();
        tint(255, this.visibility);
        this.visibility = this.visibility-5
        pop();
      }
    }
  };
  