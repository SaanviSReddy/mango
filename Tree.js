class Tree{ 
  constructor(x,y,width,height) {
     var options = {
       isStatic: true 
      } 
      this.width = width; 
      this.height = height; 
      this.x=x; 
      this.y=y; 
      this.image=loadImage("tree.png") 
      this.body = Bodies.rectangle(x,y,50,600,options);
       World.add(world, this.body); 
      } 
      
      display() { 
        var treepos=this.body.position; 
        push();
         translate(treepos.x, treepos.y); 
         fill(255,0,255)
          imageMode(CENTER); 
          image(this.image, 0,0,this.width, this.height) 
          pop() ;
         } 
        }
