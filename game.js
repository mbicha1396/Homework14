//----------- player var
var x = 470;
var y = 570;
var d = 20;
//------------ enemy array
var shapeXs = [];
var shapeYs = [];
var diameters = [];
var shapeXSpeeds = [];
var shapeYSpeeds = [];
//--------- mouse event
var mousex;
var mousey;


function setup() {
    createCanvas(500,600);
    for (var i = 0; i < 5; i++) {
        shapeXSpeeds[i] = floor(random() * 100 + 1);
        shapeYSpeeds[i] = floor(random() * 100 + 1);
        shapeXs[i] = floor(random() * 200 + 1);
        shapeYs[i] = floor(random() * 150 + 1);
        diameters[i] = floor(random() * 50 + 1);

    }
}

    function draw() {
        background(0,180,100);
        //------------------ x and y coordinates
         XandY();
        //--------------------- borders of canvas
        Rect1();
        Rect2();
        Rect3();
        Rect4();
        //--------------- exit sign
        Exit1();
        //-------- player
        Circle();
        //------------------------------ player movement
       KeyIsDown();
       KeyIsDown2();
       fill(random(255),random(255),random(255));
       for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = floor(random() * 10 + 1);
        shapeYSpeeds[i] = floor(random() * 10 + 1);
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];


    // check to see if the shape has gone out of bounds
    if (shapeXs[i] > width) {
        shapeXs[i] = 0;
    }
    if (shapeXs[i] < 0) {
        shapeXs[i] = width;
    }
    if (shapeYs[i] > height) {
        shapeYs[i] = 0;
    }
    if (shapeYs[i] < 0) {
        shapeYs[i] = height;
        
    }
    

}

//-------------- drop square mouse event
SquareMouse1();
//-------------- you win message
Message1();
}
 
//------------------------- this function creates our player
function Circle() {
    fill(0,200,255);
    circle(x,y,d);
} 

//------------------------- player movement
function KeyIsDown() {
    //--------------- right;left
    if(keyIsDown(68))
    {
        x+=5;
    }
    if(keyIsDown(39))
    {
        x+=5;
    }
    if(keyIsDown(65))
    {
        x-=5;
    }
    if(keyIsDown(37))
    {
        x-=5;
    }  
}
function KeyIsDown2() {
           //--------------- up;down
           if(keyIsDown(88))
           {
               y+=5;
           }
           if(keyIsDown(40))
           {
               y+=5;
           }
           if(keyIsDown(87))
           {
               y-=5;
           }
           if(keyIsDown(38))
           {
               y-=5;
           }
}




//-------------------------------- drop square mouse click event
function SquareMouse1() {
//----------------- square that appears during mouse event
fill (180,0,255);
square(mousex,mousey,20);
}

//------------------------ this function makes the square appear
function mouseClicked() {
    mousex = mouseX;
    mousey = mouseY;
 }

 //------------------------ exit sign
 function Exit1() {
    fill (0);
    textSize(15);
    text("EXIT",10,25);
 }

 //------------------------- borders
function Rect1() {
    fill(0);
    rect(0,0,width,5);
}

function Rect2() {
    fill(0);
    rect(0,595,width,5);
}

function Rect3() {
    fill(0);
    rect(1,60,5,height);
}

function Rect4() {
    fill(0);
    rect(495,0,5,height); 
}

//------------------------------------- x and y coordinates
function XandY() {
        strokeWeight(1);
        stroke(0);
        fill(0);
        textSize(15);
        text("X: " + mouseX,100,200 );
        text("Y: " + mouseY,100,220 );
}

//------------------------------------------------ you win message
function Message1() {
    //------------------ player wins
    if(x < 0 && y <= 60)
    {
       fill(255,135,0);
       stroke(5);
       textSize(30);
       text("Congratulations, You Win!",10,300);
    } 
   }

