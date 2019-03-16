
let gforce = 2;
let width = 1000;
let height = 800;
let bx = width - 130;
let by = 500;
let bx2 = width/2; 
let by2;
let dig = 1;
let p;
let p2;
let collisions = 0;

let v;
let v2 = 0;
let u1 = v;
let u2 = 0;
var Minput = document.getElementById("mass");
var minput = document.getElementById("m2");
let m1 = parseInt(Minput.value);
let m2 = parseInt(minput.value);
let rate = m1/10;
let click = document.getElementById("click");



function setup() {
    createCanvas(width, height);
    frameRate(100);
    
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);
    line(0, 600, width, 600);
    fill(0);
    rect(0, 0, 50, 600);
    rect(0, 600, width, height);
    //fill(0);
    makeBlock(m1, 100);
    makeBlock2(m2, 50);
    for (i = 0; i < rate; i++) {
        calc();
        
    }
    if (bx > 950) {
        textSize(50);
        text("Click to restart", width/2, height/2); 

    }
    
    textAlign(RIGHT);
    textSize(38);
    fill(255);
    textFont('Helvetica');
    strokeWeight(1);
    text("# Collisions: " + collisions, width-10, 40);
   
}


function makeBlock(m, size) {
    by = 598 - size;
    //p = m*v;

    
    stroke(255);
    strokeWeight(1);
    textSize(32);
    textAlign(CENTER);
    fill(255);
    text(m + " kg", bx + 50, by - 10);
    strokeWeight(1);
    fill(0, 100, 230);
    rect(bx, by, size, size);
    
    
}

function makeBlock2(m, size) {
    p2 = m*v2;
    by2 = 598 - size;

    
    stroke(255);
    strokeWeight(1);
    textSize(32);
    textAlign(CENTER);
    fill(255);
    text(m + " kg", bx2 + (size)/2, by2 - 10);
    strokeWeight(1);
    fill(200);
    rect(bx2, by2, size, size);
}


function calc() {
     if(bx2+50 > bx) {
       click.currentTime = 0;
       click.play();

       collisions++;
       
       v = ((m1 - m2)/(m1 + m2))*u1 + ((2*m2)/(m1 + m2)*u2);
       bx2 = bx - 50;
       v2 = ((m2 - m1)/(m1 + m2))*u2 + ((2*m1)/(m1 + m2)*u1);
    }
    bx2 += v2;
    bx += v;
    u1 = v;
    u2 = v2;
    if(bx2 < 50) {
        // click.pause();
        click.currentTime = 0;
         bx2 = 50;
         v2 = -v2; 
         collisions++;
         click.play();
     }  
}

function mousePressed() {
    if(mouseX >= 0 && mouseX <= 800 && mouseY >= 0 && mouseY <= 800) {
    bx = width-400;
    bx2 = width/2;
    m1 = parseInt(Minput.value);
    m2 = parseInt(minput.value);
    rate = 10000;
    v = -1/rate;
    v2 = 0;
    collisions = 0;
    init = true;
    }
}