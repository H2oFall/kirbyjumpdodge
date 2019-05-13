var jump;
var img;
function preload(){
  img = loadImage('kirby.png');
}

function jumper() {
      this.x = 50;
      this.y = 0;
      this.gravity = 1; //force of grvity
      this.lift = -20; //opposing force
      this.velocity = 0; //speed of gravity
      this.show = function() {
        image(img,this.x,this.y,50,50);
      };
      this.up = function() {
      this.velocity += this.lift;
      };
      this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        this.velocity *= 0.9;
        if (this.y > h) {
          this.y = h;
          this.velocity = -10;
        }
        if(this.y < 0) {
          this.y = 0;
          this.velocity = 0;
        }
        if((keyIsDown(39)) && (this.x < w-50)){
          img = loadImage('kirbyflip.png')
          this.x += 10;
          
        }
        if((keyIsDown(37)) && (this.x > 0)){
          img = loadImage('kirby.png')
          this.x -= 10;

        }
      };
    }
