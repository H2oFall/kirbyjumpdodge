function barrier(){
this.leftPull = .01;
this.velocity = 1; //speed of gravity
this.height =50;
this.width = 50;
this.x = w + this.width;
this.y = Math.floor(Math.random() * h)-10;
  this.show = function() {
this.x;
this.y;
image(fireimg,this.x,this.y,this.width,this.height);
  };
  this.update = function() {
    this.velocity += this.leftPull;
    this.x -= this.velocity;
  };
}