var mixer1 = document.getElementById("mixer1");
var mixer2 = document.getElementById("mixer2");
var mixer3 = document.getElementById("mixer3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color3 = document.getElementById("color3");
var row4 = document.getElementById("row4");
var row3 = document.getElementById("row3");
var row2 = document.getElementById("row2");
var row1 = document.getElementById("row1");
var result = document.getElementById("result");

function randomColor() {
  var number1 = Math.floor(Math.random() * 255);
  var number2 = Math.floor(Math.random() * 255);
  var number3 = Math.floor(Math.random() * 255);
  return [number1, number2, number3];
}

mixer1.addEventListener("click", function(){
  var newColor = randomColor();
  var number1 = newColor[0];
  var number2 = newColor[1];
  var number3 = newColor[2];
  row4.style.background = "linear-gradient(to right, rgb(" + String(number1) + ", " + String(number2) + ", " + String(number3) + "), " + String(color2.innerText) +", "+ String(color3.innerText)+")";
  color1.innerText = "rgb(" + String(number1) + ", " + String(number2) + ", " + String(number3) + ") ";
  row1.style.background = "rgb(" + String(number1) + ", " + String(number2) + ", " + String(number3) + ") ";
  result.innerText = "linear-gradient(to right, rgb(" + String(number1) + ", " + String(number2) + ", " + String(number3) + "), " + String(color2.innerText) +", "+ String(color3.innerText)+")";
});

mixer2.addEventListener("click", function(){
  var newColor = randomColor();
  var number1 = newColor[0];
  var number2 = newColor[1];
  var number3 = newColor[2];
  row4.style.background = "linear-gradient(to right," + String(color1.innerText) + "," + "rgb(" + String(number1) + "," + String(number2) + "," + String(number3) + ")," + String(color3.innerText)+")";
  color2.innerText = "rgb(" + String(number1) + ", " + String(number2) + ", " + String(number3) + ")";
  row2.style.background = "rgb(" + String(number1) + "," + String(number2) + "," + String(number3) + ")";
  result.innerText = "linear-gradient(to right, " + String(color1.innerText) + ", " + "rgb(" + String(number1) + ", " + String(number2) + ", " + String(number3) + "), " + String(color3.innerText)+")";
});

mixer3.addEventListener("click", function(){
  var newColor = randomColor();
  var number1 = newColor[0];
  var number2 = newColor[1];
  var number3 = newColor[2];
  row4.style.background = "linear-gradient(to right," + String(color1.innerText) +","+ String(color2.innerText) +"," +"rgb(" + String(number1) + "," + String(number2) + "," + String(number3) + ")" +")";
  color3.innerText = "rgb(" + String(number1) + ", " + String(number2) + ", " + String(number3) + ")";
  row3.style.background = "rgb(" + String(number1) + "," + String(number2) + "," + String(number3) + ")";
  result.innerText = "linear-gradient(to right, " + String(color1.innerText) +", "+ String(color2.innerText) +", " +"rgb(" + String(number1) + ", " + String(number2) + ", " + String(number3) + ")" +")";
});
