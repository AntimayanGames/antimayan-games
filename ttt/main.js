

var spots = ['', '', '', 
             '', '', '', 
             '', '', ''];

let quadCoordx = [82, 345, 590];
let quadCoordy = [190, 450, 710]; 

var turn = 0; //0 = x, 1 = o

function setup() {
    createCanvas(800, 800);
    background(255);

}

function draw() {
    background(255);
    makeGrid();
    gridDisplay();
    
}

function makeGrid() {
    stroke(0);
    strokeWeight(4);
    line(0, width*.333, width, width*.333);
    line(0, width*.666, width, width*.666);
    line(width*.333, 0, width*.333, width);
    line(width*.666, 0, width*.666, width);
    noFill();
    stroke(0);
    
}

function mousePressed() {
    if(collidePointRect(mouseX, mouseY, 0, 0, width*.333, width*.333)){
        turnSwitchPlace(0);
    }
    if(collidePointRect(mouseX, mouseY, width*.333, 0, width*.333, width*.333)){
        turnSwitchPlace(1);
    }
    if(collidePointRect(mouseX, mouseY, width*.666, 0, width*.333, width*.333)){
        turnSwitchPlace(2);
    }
    if(collidePointRect(mouseX, mouseY, 0, width*.333, width*.333, width*.333)){
        turnSwitchPlace(3);
    }
    if(collidePointRect(mouseX, mouseY, width*.333, width*.333, width*.333, width*.333)){
        turnSwitchPlace(4);
    }
    if(collidePointRect(mouseX, mouseY, width*.666, width*.333, width*.333, width*.333)){
        turnSwitchPlace(5);
    }
    if(collidePointRect(mouseX, mouseY, 0, width*.666, width*.333, width*.333)){
        turnSwitchPlace(6);
    }
    if(collidePointRect(mouseX, mouseY, width*.333, width*.666, width*.333, width*.333)){
        turnSwitchPlace(7);
    }
    if(collidePointRect(mouseX, mouseY, width*.666, width*.666, width*.333, width*.333)){
        turnSwitchPlace(8);
    }

}
function turnSwitchPlace(n) {
    if (turn == 0 && spots[n] == '') {
        spots[n] = 'X';
        turn = 1;
    } else if (spots[n] == '') {
        spots[n] = 'O';
        turn = 0;
    }
}

function gridDisplay() {
    
    fill(0, 100, 255);
  
        

    
    textSize(170);
    
    for(i = 0; i < spots.length; i++) {
        if(i == 0) {
            text(spots[i], quadCoordx[0], quadCoordy[0]);
        }
        if(i == 1) {
            text(spots[i], quadCoordx[1], quadCoordy[0]);
        }
        if(i == 2) {
            text(spots[i], quadCoordx[2], quadCoordy[0]);
        }
        if(i == 3) {
            text(spots[i], quadCoordx[0], quadCoordy[1]);
        }
        if(i == 4) {
            text(spots[i], quadCoordx[1], quadCoordy[1]);
        }
        if(i == 5) {
            text(spots[i], quadCoordx[2], quadCoordy[1]);
        }
        if(i == 6) {
            text(spots[i], quadCoordx[0], quadCoordy[2]);
        }
        if(i == 7) {
            text(spots[i], quadCoordx[1], quadCoordy[2]);
        }
        if(i == 8) {
            text(spots[i], quadCoordx[2], quadCoordy[2]);
        }
        

    }
}