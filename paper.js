class paper{
cunstructor(x,y,width,height){
  var options = {
  isStatic:false,
  density:1,
  friction:0.5,
  restitution:1.2
  }
this.x = x;
this.y = y;
this.width = width;
this.height = height;

this.body=Bodies.rectangle(x, y,radius , options);
 		World.add(world, this.body);
 }
 display(){

    var paperBallPos=this.body.position;		

    push()
    translate(paperBallPos.x,paperBallPos.y);
    ImageMode(CENTER)
    strokeWeight(5);
    fill(128,128,128)
    rect(0,0,this.width,this.height);
    pop()

 }
}