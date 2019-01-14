

function calculateH(a, b) {

    let h = (-b/(2*a));
    
    //console.log(h);
    return h;

}

function calculateK(a, b, c) {
    let k = ((4*a*c - b*b)/(4*a));
    //console.log(k);
    return k;
}



//draws the lines

function drawGraphs() {
    stroke('blue');
    strokeWeight(2);
    
    

    beginShape();
    for (i = -width-offsetX; i < width+offsetX; i++) {
        noFill();
        vertex(i*zoomLevels[zoomLevel], Calc(i, a.value()/zoom.value(), b.value(), c.value()*zoom.value())*zoomLevels[zoomLevel]);
    }
    endShape();
    

    var zeroY = Calc(0, a.value()/zoom.value(), b.value(), c.value()*zoom.value());
    strokeWeight(5);
    stroke(100, 100, 100);
    point(0, zeroY*zoomLevels[zoomLevel]);
    strokeWeight(1);
    stroke(100);
    fill(100);
    
    text('y-int ' + roundNum(-zeroY/zoom.value(), 3), 5, (zeroY*zoomLevels[zoomLevel])-10);



    if (showSolutions.checked() == true) {
        var solution1X1 = QuadFormPos(a.value(), b.value(), c.value());
        strokeWeight(7);
        stroke(255, 0, 255);
        point(solution1X1*zoom.value()*zoomLevels[zoomLevel], 0);
        strokeWeight(1);
        staticDisplay(0, 255, 0, 255, 'Solution: (' + roundNum(solution1X1,2) + ', ' + '0)');

        var solution1X2 = QuadFormNeg(a.value(), b.value(), c.value());
        strokeWeight(7);
        stroke(255, 100, 0);
        point(solution1X2*zoom.value()*zoomLevels[zoomLevel], 0);
        strokeWeight(1);
        staticDisplay(-30, 255, 100, 0, 'Solution: (' + roundNum(solution1X2,2) + ', ' + '0)');
    }
    if (showVertex.checked() == true) {
        strokeWeight(7);
        stroke(200, 255, 17);
        point(calculateH(a.value(), b.value())*zoom.value()*zoomLevels[zoomLevel], -calculateK(a.value(), b.value(), c.value())*zoom.value()*zoomLevels[zoomLevel]);
        strokeWeight(1);
        staticDisplay(90, 200, 255, 17, 'Vertex: (' + roundNum(calculateH(a.value(), b.value()), 1) + ', ' + roundNum(calculateK(a.value(), b.value(), c.value()), 1) + ')');
    }

    //     GRAPH #2

    if (graph2.checked() == true) {
        stroke('red');
        strokeWeight(2);

        beginShape();
        for (x = -width*1.5; x < width*1.5; x++) {
            noFill();
            vertex(x*zoomLevels[zoomLevel], Calc(x, a2.value()/zoom.value(), b2.value(), c2.value()*zoom.value())*zoomLevels[zoomLevel]);
        }
        endShape();


        var zeroY2 = Calc(0, a2.value()/zoom.value(), b2.value(), c2.value()*zoom.value());
        stroke(100, 100, 100);
        strokeWeight(5);
        point(0, zeroY2*zoomLevels[zoomLevel]);
        strokeWeight(1);
        stroke(100);
        fill(100);
        text('y-int ' + roundNum(-zeroY2/zoom.value(), 3), 5, (zeroY2*zoomLevels[zoomLevel])-10);


        if (showSolutions.checked() == true) {
            let solution2X1 = QuadFormPos(a2.value(), b2.value(), c2.value());
            //console.log(QuadFormPos(a.value(), b.value(), c.value()));
            strokeWeight(7);
            stroke(255, 255, 0);
            point(solution2X1*zoom.value()*zoomLevels[zoomLevel], 0);
            strokeWeight(1);
            staticDisplay(60, 255, 255, 0, 'Solution: (' + roundNum(solution2X1, 2) + ', ' + '0)');
            
            let solution2X2 = QuadFormNeg(a2.value(), b2.value(), c2.value());
            strokeWeight(7);
            stroke(0, 255, 255);
            point(solution2X2*zoom.value()*zoomLevels[zoomLevel], 0);
            strokeWeight(1);
            staticDisplay(30, 0, 255, 255, 'Solution: (' + roundNum(solution2X2, 2) + ', ' + '0)');
            }

    }

}

function QuadFormPos(a, b, c) {
    return((-b + sqrt(b*b - 4*a*c))/(2*a));
    
}
function QuadFormNeg(a, b, c) {
    return((-b - sqrt(b*b - 4*a*c))/(2*a));
    
}

function staticDisplay(yoffset, r, g, b, textb) {
    fill(r, g, b);
    //console.log(solution1X2);
    ellipse(675-offsetX, 695-offsetY+yoffset, 15);
    rectMode(CENTER);
    rect(825-offsetX, 694.5-offsetY+yoffset, 300, 15);
    fill(0);
    stroke(0);
    text(textb, 675-offsetX, 700-offsetY+yoffset);
}

//Calculates equation

function Calc(x, av, bv, cv) {
    // av = a.value()/zoom.value();
    // bv = b.value();
    // cv = c.value()*zoom.value();
     
     return(-(av*x*x) - bv*x - cv);
         
 }

 function coolMouse() {
    var textX = roundNum(((mouseX - offsetX)/zoom.value())/zoomLevels[zoomLevel], 1);
    var textY = roundNum(((mouseY - offsetY)/zoom.value())/zoomLevels[zoomLevel], 1);

    fill(0);
    if (xydisplay.checked() == true) {
        strokeWeight(1);
        stroke(0);
        cursor(CROSS);
        translate(-offsetX, -offsetY);
        text('('+ textX + ', ' + -textY + ')', mouseX-80, mouseY-20);

    } else {
        cursor();
        translate(-offsetX, -offsetY);
        strokeWeight(1);
        stroke(0);
        text('('+ textX + ', ' + -textY + ')', 20, 80);
    }
    if (mouseIsDown) {
        cursor(MOVE);
    }
    
    
    //if (mouseIsClicked) {
    //point(mouseX, mouseY);
    //}

}

function roundNum(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }