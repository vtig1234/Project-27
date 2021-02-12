class ball{
    constructor(x,y,Diameter){
      var options={
        //Make it able to move
        isStatic:false,
        //Give it bounciness
        restitution:1.2,
        //Add friction
        friction:0,
        //Add density
        density:1.2
      }
      //Create a circle
      this.body=Bodies.circle(x,y,25,options);
      //Add it to the world
      World.add(world,this.body);
   }
    //Define the x and y positions
   x_pos(){
       return this.body.position.x ;
 }
    
      y_pos(){
       return this.body.position.y ;
 }
    
    display(){
      //Create a poss
      var pos = this.body.position
      rectMode(CENTER);
      fill("purple");
      //Make a circle following the body
      circle(pos.x,pos.y,50);
    }
  }
 