class Cubie{
    constructor(x, y, z, len_) {
        this.pos = new p5.Vector(x, y, z);
        // this.x = x;
        // this.y = y;
        // this.z = z;
        this.len = len_;
    }
    show() {
        stroke(0);
        // noStroke();
        strokeWeight(2);
        push();
        translate(this.pos.x, this.pos.y, this.pos.z);
        // translate(this.x, this.y, this.z);
        // box(this.len);
        let r = this.len / 2;
        fill(colors[BCK]);
        beginShape();
        vertex(-r, -r, -r);
        vertex(r, -r, -r);
        vertex(r, r, -r);
        vertex(-r, r, -r);
        endShape(CLOSE);
        fill(colors[FRT]);
        beginShape();
        vertex(-r, -r, r);
        vertex(r, -r, r);
        vertex(r, r, r);
        vertex(-r, r, r);
        endShape(CLOSE);

        fill(colors[RGT]);
        beginShape();
        vertex(r, -r, -r);
        vertex(r, r, -r);
        vertex(r, r, r);
        vertex(r, -r, r);
        endShape(CLOSE);
        fill(colors[LFT]);
        beginShape();
        vertex(-r, -r, -r);
        vertex(-r, r, -r);
        vertex(-r, r, r);
        vertex(-r, -r, r);
        endShape(CLOSE);

        fill(colors[DWN]);
        beginShape();
        vertex(-r, r, -r);
        vertex(r, r, -r);
        vertex(r, r, r);
        vertex(-r, r, r);
        endShape(CLOSE);
        fill(colors[UPP]);
        beginShape();
        vertex(-r, -r, -r);
        vertex(r, -r, -r);
        vertex(r, -r, r);
        vertex(-r, -r, r);
        endShape(CLOSE);
        pop();
    }
}