let slowEllipseX = 0;
let slowEllipseY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0).style('z-index', '-1');
  }
  
  function draw() {
    background(5);
    let gridSize = windowWidth/10;
    
    for (let x = -gridSize; x <= width + gridSize; x += gridSize) {
      for (let y = -gridSize; y <= height + gridSize; y += gridSize) {
        let distance = dist(x, y, mouseX, mouseY);
        let lineLength = gridSize;
        
        if (distance < 700) {
          push();
          translate(x, y);
          let angle = atan2(mouseY - y, mouseX - x);
          let stretch = map(distance, 0, 100, 1.5, 0.5);
          rotate(angle);
          drawLine(-lineLength * stretch, lineLength * stretch);
          pop();
        } else {
          push();
          translate(x, y);
          drawLine(0, lineLength);
          pop();
        }
      }
    }
    fill(50);
    slowEllipseX = lerp(slowEllipseX, mouseX, 0.15);
    slowEllipseY = lerp(slowEllipseY, mouseY, 0.15);
    ellipse(slowEllipseX-30, slowEllipseY, 20, 20);

    fill(235);
    ellipse(mouseX, mouseY, 30);
  }
  
  function drawLine(start, end) {
    stroke(255,255,255);
    line(start/10, 0, end/28, 0);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}