//declare variables globally
var firstP;
var secondP;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);//position() an element on the page using P5
    canvas.style("z-index", "-1"); //style() a DOM element with CSS from within P5
    background(82, 175, 112); //grass

    firstP = createP("this canvas will eventually be populated by animals and trees"); //create an element BESIDES a canvas element
    firstP.position(200,200); //position() an element on the page using P5

    firstP.mouseOver(changeColor); //element-specific event handler and callback function
    firstP.mouseOut(originalColor); //element-specific event handler and callback function

    secondP = createP("The sky will be a starry night that can change to day.");////create an element BESIDES a canvas element
    secondP.html(" There may be some floating clouds.", true); //use html() to either retrieve the content of a DOM element for use in your P5 sketch or to modify the content of an element on the page

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

    //trees
    image(smallTree, 0, height/3, img.width/6, img.height/6);
    image(smallTree, 100, height/3, img.width/6, img.height/6);
    image(smallTree, 300, height/3, img.width/6, img.height/6);
    image(runningHorses, 450, height/3, img.width/6, img.height/6);
    image(bigTree, 700, height/3, img.width/6, img.height/6);
    image(smallTree, 800, height/3, img.width/6, img.height/6);
    image(bigTree, 950, height/3, img.width/6, img.height/6);
    image(grazingHorse, 650, height/3, img.width/6, img.height/6);




    //moon
    noStroke();
    fill(252, 248, 224);
    ellipse(width/6,height/5,60,60);



  }
//change colors of the second paragraph with mouseover and return with mouseout. I looked at Dan Shiffman's video https://www.youtube.com/watch?v=KeZBpeH59Q4 on how to set up callback functions.
function changeColor() {
  firstP.style('color', '#ff68bd');//style() a DOM element with CSS from within P5
  firstP.style('font-size', '34px');//style() a DOM element with CSS from within P5
  }
function originalColor() {
  firstP.style ('color', '#000000');//style() a DOM element with CSS from within P5
  firstP.style('font-size', '16px');//style() a DOM element with CSS from within P5
  }
