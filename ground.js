class ground 
{
  constructor(x, y, w, h) 
  {
    var options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    World.add(world, this.body);
  }

  show() {
    var groundPos = this.body.position;
    push();
    translate(groundPos.x,groundPos.y);
    rectMode(CENTER);
    stroke(4);
    fill(255,255,0);
    rect(0,0,this.w, this.h);
    pop();
  }
  
}