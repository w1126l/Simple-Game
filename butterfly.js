
class Butterfly {

  constructor(x, y, xSpeed, ySpeed, size) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.size = size;
  }

  draw() {
    image(butterflyBlue, this.x, this.y, this.size, this.size);
  }

  move() {
    this.x += this.xSpeed;

    if (this.x > width + 10 || this.x < -10) {

      this.xSpeed = this.xSpeed * -1;
      this.ySpeed += int(random(-2, 2));

    }

    this.y = this.y + this.ySpeed;

    if (this.y > height + 10 || this.y < -10) {

      this.ySpeed = this.ySpeed*-1;
      this.xSpeed += int(random(-2, 2));

    }
  }

  reset() {
    this.x = width/2;
    this.y = height/2;
    this.xSpeed = int(random(-10, 10));
    this.ySpeed = int(random(-10, 10));
  }
}
