class Base {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          

        
      }
     // this.image = loadImage("tree.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      

     
      //push();
    // translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("brown");
     rect(pos.x, pos.y, this.width, this.height);
    //imageMode(CENTER);
    //image(this.image,1100, 250, this.width, this.height);
      //pop();
    }
  };