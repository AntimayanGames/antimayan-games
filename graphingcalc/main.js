

let offsetX = 400;
let offsetY = 400;
let mapFactor = 1;
var zoom, showSolutions, zoomReset, a, b, c, xydisplay;
let atext, atext2, btext, btext2, ctext, ctext2;
let mouseIsDown = false;

let startX, startY;
let netPanningX = 0, netPanningY = 0;

let zoomLevel = 1; 
let doDrawGraph = false;

function setup() {
    createCanvas(800, 800);
    
    
    background(255);
    frameRate(60);
    setupInputs1();
    setupInputs2();
    

}


function draw() {
    
    if (zoom.value() == 0) {
        zoom.value(1);
    } 

    
    background(250);
    
    strokeWeight(1);
    fill('blue');
    textFont('Helvetica');
    textSize(20);
    stroke('blue');
    
    
    text('equation y = ' + a.value() + 'x' + '^2' + ' + ' +  b.value()  + 'x ' + '+ ' + c.value(), width-260, 30);
    //console.log(zoom.value());    
    if(graph2.checked() == true) {
        stroke('red');
        fill('red');
        text('equation y = ' + a2.value() + 'x' + '^2' + ' + ' +  b2.value()  + 'x ' + '+ ' + c2.value(), width-260, 55);
    }
    
    noFill();
    
    translate(offsetX, offsetY);
    drawGrid();
    if (doDrawGraph) {
    drawGraphs();
    }
    coolMouse();
    
    
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
    if(zoomLevel <= .5) {
        zoomLevel -= .1;

    } else if (zoomLevel <= .01) {
        zoomLevel = .4;
    } else {
        zoomLevel -= .5;
    }
    //console.log(zoomLevel);
}
function zoomIn() {
    if (zoomLevel < .5) {
        zoomLevel += .1;
    } else {
    zoomLevel += .5;
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

 



//Creates HTML Elements

function setupInputs1() {
    zoom = createSlider(0, 400, 100, 2);
    zoom.position(20,80);
    zoom.style('width', '200px');
    
    zoomP = createP('');
    zoomP.position(25, 85);
    
    
    //zoomReset.mousePressed(resetZoom());

    showSolutions = createCheckbox('Show solutions', false);
    showSolutions.position(1180-200, 100);
    showVertex = createCheckbox('Show vertex (first equation)', false);
    showVertex.position(1180-200, 115);
    
    
    var off = 200;

    atext = createP('a:');
    atext.position(1180-200, 385-off);

    btext = createP('b (slope if a=0):');
    btext.position(1180-291, 365-off);

    ctext = createP('c:');
    ctext.position(1180-200, 345-off);

    a = createInput('0', 'number');
    a.position(1200-200, 400-off);
    a.style('100px');

    b = createInput('0', 'number');
    b.position(1200-200, 380-off);

    c = createInput('0', 'number');
    c.position(1200-200, 360-off);


    //mode = createCheckbox('Quadratic', false);
    //mode.position(1200, 420);

    xydisplay = createCheckbox('Show coordinates next to pointer', false);
    xydisplay.position(1175-200, 440+400);
  
}

function setupInputs2() {

    graph2 = createCheckbox('Graph 2nd function', false);
    graph2.position(1175-200, 300);

        var off2 = 350;
        atext2 = createP('a:');
        atext2.position(1180-200, off2+25);
    
        btext2 = createP('b (slope if a=0):');
        btext2.position(1180-291, off2+5);
    
        ctext2 = createP('c:');
        ctext2.position(1180-200, off2-15);
    
        a2 = createInput('0', 'number');
        a2.position(1200-200, off2+40);
        a2.style('100px');
    
        b2 = createInput('0', 'number');
        b2.position(1200-200, off2+20);
    
        c2 = createInput('0', 'number');
        c2.position(1200-200, off2);
    
   


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
  
    textSize(15);
    for (var x=-width*10; x < width*10; x+=100*zoomLevel) {
        stroke('grey');
        line(x, -height*10, x, height*10);
        strokeWeight(.5);
		text(roundNum((x/zoom.value())/zoomLevel, 2), x+1, 12);
	}
	for (var y=-height*10; y < height*10; y+=100*zoomLevel) {
        stroke('grey');
        line(-width*10, y, width*10, y);
        strokeWeight(.5);
		text(roundNum((-y/zoom.value())/zoomLevel, 2), 1, y+12);
    }
    stroke(0);
    strokeWeight(1);
    line(0, height*10, 0, -height*10);
    line(-width*10, 0, width*10, 0);
    strokeWeight(6);
  	stroke('blue');
    point(0,0);
   
}


  

