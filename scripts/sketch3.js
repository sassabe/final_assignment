var smallTree;
var bigTree;
var runningHorses;
var grazingHorse;

let x = 0;
let speed = 0.5;

let snowflakes = []; // array to hold snowflake objects

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);//position() an element on the page using P5
    canvas.style("z-index", "-1"); //style() a DOM element with CSS from within P5
    background(82, 175, 112); //grass

    firstP = createP("Drag the running horses to populate the land!");
    firstP.position(windowWidth/2.7, windowHeight/7);
    firstP.mouseOver(changeColor); //element-specific event handler and callback function
    firstP.mouseOut(originalColor);

    smallTree = loadImage("assets/Tree-Free-PNG-Image.png");
    runningHorses = loadImage("assets/horses.png");
    grazingHorse = loadImage("assets/grazingHorse.png");
    cloud = loadImage("assets/cloud.png");

}

function draw() {

    //sky
   noStroke();
   fill(61, 91, 140);
   rect(0,-0,windowWidth,windowHeight/2);

   //moving clouds
   if (x >= width || x < 0) {
       speed = -speed;
     }
     image(cloud, x, height/7, cloud.width/7, cloud.height/7);
     x = x + speed;

    // moon

      noStroke();

      fill(252, 248, 224);
      ellipse(width/6,height/5,60,60);

    //trees and horses
    image(smallTree, 0, height/3, smallTree.width/6, smallTree.height/6);
    image(smallTree, 100, height/3, smallTree.width/6, smallTree.height/6);
    image(smallTree, 300, height/5, smallTree.width/6, smallTree.height/6);
    image(runningHorses, mouseX, mouseY, runningHorses.width/6, runningHorses.height/6);
    image(smallTree, 800, height/3, smallTree.width/6, smallTree.height/6);
    image(smallTree, 750, height/5, smallTree.width/6, smallTree.height/6);
    image(grazingHorse, 450, height/2, grazingHorse.width/6, grazingHorse.height/6);

//snowflakes code taken from P5 reference
    let t = frameCount / 55;
    fill(random(255, 116));
  // create a random number of snowflakes each frame
  for (var i = 0; i < random(37); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

  }
  // snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };

//change RGB values for grazing horse, taken from class lectures
grazingHorse.loadPixels();

for (var y = 0; y < height; y++) {
  for(var x = 0; x < width; x++) {
    var index = (x + y * width) * 4;
      grazingHorse.pixels[index] = random(255); // red
      grazingHorse.pixels[index + 2] = y; // blue
  }
}
grazingHorse.updatePixels();
image(grazingHorse, 900,0);
}

  //change colors of the paragraph with mouseover and return with mouseout. I looked at Dan Shiffman's video https://www.youtube.com/watch?v=KeZBpeH59Q4 on how to set up callback functions.
  function changeColor() {
    firstP.style('color', '#ff68bd');//style() a DOM element with CSS from within P5
    firstP.style('font-size', '34px');//style() a DOM element with CSS from within P5
    }
  function originalColor() {
    firstP.style ('color', '#000000');//style() a DOM element with CSS from within P5
    firstP.style('font-size', '34px');//style() a DOM element with CSS from within P5
    }
