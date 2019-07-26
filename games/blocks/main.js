
let width = 1000;
let height = 800;
let bx = width - 130;
let by = 500;
let bx2 = width / 2;
let by2;
let collisions = 0;
let blocks = [];
let v;
let v2 = 0;
let u1 = v;
let u2;
var Minput = document.getElementById("mass");
var minput = document.getElementById("m2");
let m1 = parseFloat(Minput.value);
let m2 = parseFloat(minput.value);
let rate = 1000;
let click = document.getElementById("click");
var block1, block2;
var fps = 60;
var delta = 0;
var interval = 1000/fps;
var lastFrameMs = 0;
var rightWall = true;


function setup() {
    createCanvas(width, height);
   
    block1 = new Block(m1, bx, v, 100, 'blue');
    block2 = new Block(m2, bx2, v2, 50, 'gray');
    blocks.push(block1, block2);
    requestAnimationFrame(main);
    
   
}


function update(delta) {
    background(0);
    stroke(255);
    strokeWeight(4);
    line(0, 600, width, 600);
    fill(0);
    rect(0, 0, 50, 600);
    rect(0, 600, width, height);
    //fill(0);

    for(i = 0; i <blocks.length; i++) {
        blocks[i].display();
    }
    
    for(i = 0; i < rate; i++) {
        calc(delta);
    }
   
    

    if (block1.x > 950) {
        textSize(50);
        text("Click to restart", width / 2, height / 2);

    }

    textAlign(RIGHT);
    textSize(38);
    fill(255);
    textFont('Helvetica');
    strokeWeight(1);
    text("# Collisions: " + collisions, width - 10, 40);
}



function calc(delta) {
    if (block1.x < 100) {
        block1.x = 100;
    }
    if (rightWall) {
        if(block1.x + block1.size >= width) block1.v = -block1.v;
    }
    if (block2.x < 50) {
        // click.pause();
        click.currentTime = 0;
        block2.x = 50;
        block2.v = -block2.v;
        collisions++;
        click.play();
    }
    if (block2.x + block2.size > block1.x) {
        click.currentTime = 0;
        click.play();

        collisions++;

        block1.v = ((block1.m - block2.m) / (block1.m + block2.m)) * u1 + ((2 * block2.m) / (block1.m + block2.m) * u2);
        block2.x = block1.x - 50;
        block2.v = ((block2.m - block1.m) / (block1.m + block2.m)) * u2 + ((2 * block1.m) / (block1.m + block2.m) * u1);
    }
    block2.x += block2.v * delta;
    block1.x += block1.v * delta;
    u1 = block1.v;
    u2 = block2.v;
    
}

function mousePressed() {
   
    if (mouseX >= 200 && mouseX <= 800 && mouseY >= 100 && mouseY <= 700) {
        block1.x = width - 400;
        block2.x = width / 2;
        block1.m = parseFloat(Minput.value);
        block2.m = parseFloat(minput.value);
        if (m1 > 10000000) {
            rate = m1 / 1000;
        }
        block1.v = -.5/rate;
        block2.v = 0;
        collisions = 0;
        
    }
}

function main(timestamp) {

    delta += timestamp - lastFrameMs;
    lastFrameMs = timestamp;
    while (delta >= interval) {
        update(interval);
        delta -= interval;
    }
    requestAnimationFrame(main);
}
