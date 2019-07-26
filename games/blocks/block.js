class Block {
    constructor(m, x, v, size, color) {
        this.m = m;
        this.x = x;
        this.y = 598 - size;
        this.v = v;
        this.size = size;
        this.color = color;
    }

    display() {
        stroke(255);
        strokeWeight(1);
        textSize(32);
        textAlign(CENTER);
        fill(255);
        text(this.m + " kg", this.x + this.size/2, this.y - 10);
        strokeWeight(1);
        fill(this.color);
        rect(this.x, this.y, this.size, this.size);
    }
}