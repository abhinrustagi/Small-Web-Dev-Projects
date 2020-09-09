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
  return cvtHex([number1, number2, number3]);
}

var boxstatus = {
  'box1': true,
  'box2': true,
  'box3': true
};

function checkletter(num) {
  switch (num % 9) {
    case 1:
      return "A";
    case 2:
      return "B";
    case 3:
      return "C";
    case 4:
      return "D";
    case 5:
      return "E";
    case 6:
      return "F";
    default:
  }
}

function cvtHex(numbers) {
  var hex = "";
  var i = 0;
  for ( ;i<3; i++) {
    var letter = "";
    var quo = Number(String(numbers[i]/16).split(".")[0]);
    var dec;
    if(String(numbers[i]/16).split(".").length > 1) {
      var dec = Number("0." + String(numbers[i]/16).split(".")[1]) * 16;
    } else {
      dec = 0;
    }
    if (quo > 9) {
      letter = checkletter(quo);
      hex =  hex + letter;
    } else {
      hex = hex + String(quo);
    }

    if (dec > 9) {
      letter = checkletter(dec);
      hex = hex + letter;
    } else {
      hex = hex + String(dec);
    }
  }
  return hex;
}

mixer1.addEventListener("click", function(){
  if(boxstatus['box1']===true){
  var newColor = randomColor();
  row4.style.background = "linear-gradient(to right, #" + newColor + ", " + String(color2.innerText) +", "+ String(color3.innerText)+")";
  color1.innerText = "#" + newColor;
  row1.style.background = "#" + newColor;
  result.value = "linear-gradient(to right, #" + newColor +  ", " + String(color2.innerText) +", "+ String(color3.innerText)+")";
}
});

mixer2.addEventListener("click", function(){
  if(boxstatus['box2'] === true) {
  var newColor = randomColor();
  row4.style.background = "linear-gradient(to right," + String(color1.innerText) + ", #" + newColor + "," + String(color3.innerText)+")";
  color2.innerText = "#" + newColor;
  row2.style.background = "#" + newColor;
  result.value = "linear-gradient(to right, " + String(color1.innerText) + ", #" + newColor + ", " + String(color3.innerText)+")";
}
});

mixer3.addEventListener("click", function(){
  if(boxstatus['box3'] === true) {
  var newColor = randomColor();
  row4.style.background = "linear-gradient(to right," + String(color1.innerText) +","+ String(color2.innerText) +",#" + newColor +")";
  color3.innerText = "#" + newColor;
  row3.style.background = "#" + newColor;
  result.value = "linear-gradient(to right, " + String(color1.innerText) +", "+ String(color2.innerText) +", #" + newColor +")";
}
});

function copyFunc() {
  result.select();
  result.setSelectionRange(0, 99999);

  document.execCommand("copy");
}

function toggle(boxno) {
    var x = document.getElementById(boxno + 'lock');
    if(boxstatus[boxno] === true){
      boxstatus[boxno] = false;
      x.classList.remove('fa-lock-open');
      x.classList.add('fa-lock');
    } else {
      boxstatus[boxno] = true;
      x.classList.remove('fa-lock');
      x.classList.add('fa-lock-open');
    }
}
