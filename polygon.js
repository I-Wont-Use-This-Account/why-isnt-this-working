class Polygon extends Base{
    constructor(x,y){
      var options = {
        'restitution':1.0,
        'friction':1.0,
        'density':0.8
      }
      super(x,y,50,50);
      this.image = loadImage("images/polygon.png");
      //this.trajectory =[];
    }
  
    display() {
  
      super.display();
  
      //if(this.body.velocity.x > 10 && this.body.position.x > 200){
        //var position = [this.body.position.x, this.body.position.y];
        //this.trajectory.push(position);
      //}
     
    }
  }
  