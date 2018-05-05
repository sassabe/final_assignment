

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);//position() an element on the page using P5
    canvas.style("z-index", "-1"); //style() a DOM element with CSS from within P5
    background(82, 175, 112); //grass

    smallTree = loadImage("assets/Tree-Free-PNG-Image.png");
    bigTree =loadImage("assets/Green_Realistic_Tree_PNG_Clip_Art-1097.png");
    runningHorses = loadImage("assets/horses.png");
    grazingHorse = loadImage("assets/grazingHorse.png");

}

function draw() {

    //sky
    noStroke();
    fill(61, 91, 140);
    rect(0,-0,windowWidth,windowHeight/2);


    //moon
    noStroke();
    fill(252, 248, 224);
    ellipse(width/6,height/5,60,60);

    //trees and horses
    image(smallTree, 0, height/3, img.width/6, img.height/6);
    image(smallTree, 100, height/3, img.width/6, img.height/6);
    image(smallTree, 300, height/3, img.width/6, img.height/6);
    image(runningHorses, mouseX, mouseY, img.width/6, img.height/6);
    image(bigTree, 700, height/3, img.width/6, img.height/6);
    image(smallTree, 800, height/3, img.width/6, img.height/6);
    image(bigTree, 950, height/3, img.width/6, img.height/6);
    image(grazingHorse, mouseX, mouseY, img.width/6, img.height/6);


  }
