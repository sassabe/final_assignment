var smallTree;
var bigTree;
var runningHorses;
var grazingHorse;
var theta = 0;
let x = 0;
let speed = 1;

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
    bigTree =loadImage("assets/Green_Realistic_Tree_PNG_Clip_Art-1097.png");
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
    // fill(252, 248, 224);
     image(cloud, x, height/5, cloud.width/7, cloud.height/7);
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
    image(bigTree, 700, height/3, bigTree.width/8, bigTree.height/8);
    image(smallTree, 800, height/3, smallTree.width/6, smallTree.height/6);
    image(smallTree, 750, height/5, smallTree.width/6, smallTree.height/6);
    image(bigTree, 950, height/3, bigTree.width/8, bigTree.height/8);
    image(grazingHorse, 450, height/2, grazingHorse.width/6, grazingHorse.height/6);

  }

  //change colors of the paragraph with mouseover and return with mouseout. I looked at Dan Shiffman's video https://www.youtube.com/watch?v=KeZBpeH59Q4 on how to set up callback functions.
  function changeColor() {
    firstP.style('color', '#ff68bd');//style() a DOM element with CSS from within P5
    firstP.style('font-size', '34px');//style() a DOM element with CSS from within P5
    }
  function originalColor() {
    firstP.style ('color', '#000000');//style() a DOM element with CSS from within P5
    firstP.style('font-size', '16px');//style() a DOM element with CSS from within P5
    }
