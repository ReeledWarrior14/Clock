
var hours;
var seconds;
var minutes;
var now;

function preload(){
  fontModern = loadFont('MuseoModerno/static/MuseoModerno-ExtraBold.ttf');
}

function setup() {
  createCanvas(400, 400);

  // time();

  now = new Date();
  console.log(now);

  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();
}

function draw() {
  background(20);

  angleMode(DEGREES);

  var newTime = getDate();

  push();
  noFill();
  stroke(25, 25, 255);
  strokeWeight(10);
  arc(200, 200, 300, 300, -90, newTime.seconds * 6 - 90);
  stroke(0, 255, 0);
  arc(200, 200, 275, 275, -90, newTime.minute * 6 - 90);
  stroke(255, 0, 0);
  arc(200, 200, 250, 250, -90, newTime.hour * 30 - 90);
  pop();

  push(); //second hand
  fill(25, 25, 255);
  noStroke();
  translate(200, 200);
  rotate(newTime.seconds * 6);
  rect(0, -125, 3, 125, 20); //137.5, 75
  pop();

  push(); //minute hand
  fill(0, 255, 0);
  noStroke();
  translate(200, 200);
  rotate(newTime.minute * 6);
  rect(0, -100, 5, 100, 20); //137.5, 75
  pop();

  push(); //hour hand
  fill(255, 0, 0);
  noStroke();
  translate(200, 200);
  rotate(newTime.hour * 30);
  rect(0, -50, 7.5, 52, 20); //137.5, 75
  pop();

  push();
  textFont(fontModern);
  fill('Aqua');
  textSize(50)
  text(newTime.hour + ":" + newTime.minute + ":" + newTime.seconds, 100, 200);
  pop();

  push();
  textFont(fontModern);
  fill('blue');
  textSize(25)
  text("3", 365, 200);
  pop();

  push();
  textFont(fontModern);
  fill('blue');
  textSize(25)
  text("6", 185, 375);
  pop();

  push();
  textFont(fontModern);
  fill('blue');
  textSize(25)
  text("9", 25, 200);
  pop();

  push();
  textFont(fontModern);
  fill('blue');
  textSize(25)
  text("12", 185, 35);
  pop();
  
//   push();
//   fill("blue");
//   text(Math.round(mouseX), 10, 15);
//   text(Math.round(mouseY), 35, 15);
//   pop();
}

// async function time(){
//   var car = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles");
  
//   var par = await car.json();

//   har = par.datetime.slice(11, 13);
//   mar = par.datetime.slice(14, 16);
//   seconds11 = par.datetime.slice(17, 19);
//   // console.log(par.datetime.slice(11, 19)); //19
//   // console.log(par);
// }

function getDate() {
  now = new Date();
  return {
    month: now.getMonth() + 1,
    day: now.getDate(),
    year: now.getFullYear(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    seconds: now.getSeconds()
  }
}
