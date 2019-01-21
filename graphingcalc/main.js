
let width = 800;
let height = 800;
let offsetX = 400;
let offsetY = 400;
let mapFactor = 1;
var zoom, showSolutions, zoomReset, a, b, c, xydisplay, showSliders;
let atext, atext2, btext, btext2, ctext, ctext2;
let mouseIsDown = false;
var xdompos = 1000;

let startX, startY;
let netPanningX = 400, netPanningY = 400;

let zoomLevel = 3; 
let zoomLevels = [.2, .4, .5 , 1, 2, 2.5, 4];
let sups = ['0','¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];

let disFromCenterX;

let doDrawGraph =true;

function setup() {
    createCanvas(width, height);
    
    
    background(255);
    frameRate(60);
    setupCheckbox();
    setupInputs1();
    setupInputs2();
    showSliders.changed(changedInputs);

}


function draw() {
    
    if (zoom.value() == 0) {
        zoom.value(1);
    } 
    
    
    background(250);
    disFromCenterX = Math.abs(offsetX - 400);
    strokeWeight(1);
    fill('blue');
    textFont('Helvetica');
    textSize(20);
    stroke('blue');
    
    
    text('equation y = ' + a.value() + 'x' + sups[p.value()] + ' + ' +  b.value()  + 'x ' + '+ ' + c.value(), width-790, 780);
    //console.log(zoom.value());    
    if(graph2.checked() == true) {
        stroke('red');
        fill('red');
        text('equation y = ' + a2.value() + 'x' + sups[p.value()] + ' + ' +  b2.value()  + 'x ' + '+ ' + c2.value(), width-790, 750);
    }
    
    noFill();
    
    translate(offsetX, offsetY);
    drawGrid();
    if (doDrawGraph) {
    drawGraphs();
    }
    coolMouse();
    console.log(disFromCenterX);
    
    zoomP.html('Scale: ' + zoom.value());
    //zoomReset.mouseIsPressed(zoom.value(100));
    

}

function graphBttn() {
    if (!doDrawGraph) {
    doDrawGraph = true;
    } else {
        doDrawGraph = false;
    }
}

function zoomOut() {
    if (zoomLevel > 0){
        zoomLevel -= 1;
    }
}
function zoomIn() {
    if (zoomLevel < 6){
        zoomLevel += 1;
    }
    
}

function mousePressed() {
    startX = mouseX;
    startY = mouseY;
    mouseIsDown = true;
    
}

function mouseReleased() {
    mouseIsDown = false;
}



function mouseDragged() {
    if (mouseIsDown) {
        if (mouseX <= width && mouseY >= 60) {
            
            dx = mouseX - startX;
            dy = mouseY - startY;

            startX = mouseX;
            startY = mouseY;

            netPanningX+=dx;
            netPanningY+=dy;

            offsetX = netPanningX; 
            offsetY = netPanningY;
            //console.log(netPanningX, -netPanningY);
            
            //offsetY = mouseY - delta[1];
            //console.log(delta, offsetX, offsetY);

        }
    }
}
function setupCheckbox() {
    showSliders = createCheckbox('Replace text fields with sliders', false);
    showSliders.position(xdompos, 100-15);
}

function changedInputs() {
    a.remove();
    b.remove();
    c.remove();
    a2.remove();
    b2.remove();
    c2.remove();
    showSolutions.remove();
    showVertex.remove();
    atext.remove();
    btext.remove();
    ctext.remove();
    atext2.remove();
    btext2.remove();
    ctext2.remove();
    xydisplay.remove();
    graph2.remove(); 
    zoom.remove();
    zoomP.remove();
    setupInputs1();
    setupInputs2();
}
 




//Creates HTML Elements

function setupInputs1() {
    

    zoom = createSlider(0, 400, 100, 2);
    zoom.position(20,20);
    zoom.style('width', '200px');
    
    zoomP = createP('');
    zoomP.position(25, 25);
    
    
    //zoomReset.mousePressed(resetzoom());
    

    showSolutions = createCheckbox('Show x-ints', false);
    showSolutions.position(xdompos, 100);
    showVertex = createCheckbox('Show vertex (first equation)', false);
    showVertex.position(xdompos, 115);
    
    
    var off = 100;
    

    atext = createP('a:');
    atext.position(xdompos, 385-off);

    btext = createP('b (slope if a=0):');
    btext.position(xdompos - 91, 365-off-5);

    ctext = createP('c:');
    ctext.position(xdompos, 345-off-10);

    ptext = createP('Power:');
    ptext.position(xdompos-35, 345-off-40);
    
    if (showSliders.checked() == false) {
        a = createInput('0', 'number');
        a.position(xdompos+15, 400-off);
        a.style('100px');

        b = createInput('0', 'number');
        b.position(xdompos+15, 380-off-5);

        c = createInput('0', 'number');
        c.position(xdompos+15, 360-off-10);

        p = createInput('2', 'number');
        p.position(xdompos+15, 360-off-40);
    } else if (showSliders.checked() == true) {
        a = createSlider(-50, 50, 0, .1);
        a.position(xdompos+15, 400-off);
        //a.style('100px');

        b = createSlider(-50, 50, 0, .1);
        b.position(xdompos+15, 380-off-5);

        c = createSlider(-10, 10, 0, 1);
        c.position(xdompos+15, 360-off-10);
    } 


    //mode = createCheckbox('Quadratic', false);
    //mode.position(1200, 420);

    xydisplay = createCheckbox('Show coordinates next to pointer', false);
    xydisplay.position(xdompos, 440+400);
  
}

function setupInputs2() {

    graph2 = createCheckbox('Graph 2nd function', false);
    graph2.position(xdompos, 400);

        var off2 = 450;
        atext2 = createP('a:');
        atext2.position(xdompos, off2+25);
    
        btext2 = createP('b (slope if a=0):');
        btext2.position(xdompos - 91, off2+5-5);
    
        ctext2 = createP('c:');
        ctext2.position(xdompos, off2-15-10);

    if(showSliders.checked() == false) {
    
        a2 = createInput('0', 'number');
        a2.position(xdompos+15, off2+40);
        a2.style('100px');
    
        b2 = createInput('0', 'number');
        b2.position(xdompos+15, off2+20-5);
    
        c2 = createInput('0', 'number');
        c2.position(xdompos+15, off2-10);
    } else if(showSliders.checked() == true) {
        a2 = createSlider(-50, 50, 0, .1);
        a2.position(xdompos+15, off2+40);
        a2.style('100px');
    
        b2 = createSlider(-50, 50, 0, .1);
        b2.position(xdompos+15, off2+20-5);
    
        c2 = createSlider(-10, 10, 0, 1);
        c2.position(xdompos+15, off2-10);
    }
    
   


} 

function resetZoom() {
    zoom.value(100);
}

function mouseWheel(event) {
    //console.log(event.delta);
    
    zoom.value(-event.delta/2 + zoom.value());

}



//Cross and (x, y) coordinate








//Draws the grid






function drawGrid() {
    fill(0);
    
    //console.log(offsetX, offsetY);
    textSize(15);
    for (var x=-width*10; x < width*10; x+=100*zoomLevels[zoomLevel]) {
        stroke('grey');
        if (x >= -width-offsetX && x <= width-offsetX) {
        line(x, -height-offsetY, x, height-offsetY);
        strokeWeight(.5);
        text(roundNum((x/zoom.value())/zoomLevels[zoomLevel], 2), x+1, 12);
        }
	}
	for (var y=-height*10; y < height*10; y+=100*zoomLevels[zoomLevel]) {
        stroke('grey');
        if (y >= -height-offsetY && y <= height-offsetY) {
        line(-width-offsetX, y, width-offsetX, y);
        strokeWeight(.5);
        text(roundNum((-y/zoom.value())/zoomLevels[zoomLevel], 2), 1, y+12);
        }
    }
    stroke(0);
    strokeWeight(1);
    line(0, height-offsetY, 0, -height-offsetY);
    line(-width-offsetX, 0, width-offsetX, 0);
    strokeWeight(6);
  	stroke('blue');
    point(0,0);
   
}


  

