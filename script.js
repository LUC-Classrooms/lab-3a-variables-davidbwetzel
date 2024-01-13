/* Lab 3 - Variables
 * What happens when you change the values of x, y, and d?
 * 
 */

//global variables:
//these will define the location of our spaceship
var x = 300; //horizontal location
var y = 200; // vertical location
var d = 150; // diameter
var bodyColor = 200;
var portholeColor = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // background is drawn first
  background(0, 0, 50); // deep blue

  //UFO's canopy
  noFill();
  stroke(bodyColor);
  strokeWeight(2);
  ellipse(x, y-d/6, d/2, d/2);
  
  //Pilot
  noStroke();
  fill(0, 255, 0); 
  ellipse(x, y-d/4, d/6, d/4);
  fill(0);
  ellipse(x-d/20, y-d/3.5, d/18, d/10);
  ellipse(x+d/20, y-d/3.5, d/18, d/10);
  stroke(0);
  line(x-d/50, y - d/5, x+d/50, y - d/5);

  // UFO's hull
  noStroke();
  fill(bodyColor);
  ellipse(x, y, d, d/3);
  
  //Port holes
  fill(portholeColor);
  ellipse(x - d * 1/3, y, d/12, d/8);
  ellipse(x, y, d/12, d/8);
  ellipse(x + d * 1/3, y, d/12, d/8);
  
}
