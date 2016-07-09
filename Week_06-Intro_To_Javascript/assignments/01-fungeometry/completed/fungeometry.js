
"use strict";

function main () {

  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  var box3 = document.getElementById("box3");
  var box4 = document.getElementById("box4");

  box1.addEventListener("click", clickedBox1);
  box2.addEventListener("click", clickedBox2);
  box3.addEventListener("click", clickedBox3);
  box4.addEventListener("click", clickedBox4);

}


function clickedBox1 () {
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  var box3 = document.getElementById("box3");
  var box4 = document.getElementById("box4");

  box1.style.transform = "rotate(45deg)";
  box2.style.transform = "rotate(67.5deg)";
  box3.style.transform = "rotate(22.5deg)";
  box4.style.transform = "rotate(45deg)";
}


function clickedBox2 () {
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  var box3 = document.getElementById("box3");
  var box4 = document.getElementById("box4");

  box1.style.transform = "rotate(22.5deg)";
  box2.style.transform = "rotate(45deg)";
  box3.style.transform = "rotate(45deg)";
  box4.style.transform = "rotate(67.5deg)";
}


function clickedBox3 () {
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  var box3 = document.getElementById("box3");
  var box4 = document.getElementById("box4");

  box1.style.transform = "rotate(67.5deg)";
  box2.style.transform = "rotate(45deg)";
  box3.style.transform = "rotate(45deg)";
  box4.style.transform = "rotate(22.5deg)";
}


function clickedBox4 () {
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  var box3 = document.getElementById("box3");
  var box4 = document.getElementById("box4");

  box1.style.transform = "rotate(45deg)";
  box2.style.transform = "rotate(22.5deg)";
  box3.style.transform = "rotate(67.5deg)";
  box4.style.transform = "rotate(45deg)";
}


window.addEventListener("load", main);