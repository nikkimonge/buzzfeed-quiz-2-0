//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome

//which marvel or CW superhero are you
var questionCount = 0;
var flashScore = 0;
var supergirlScore = 0;
var batwomanScore = 0;
var arrowScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var a1 = document.getElementById("a1");
var b1 = document.getElementById("b1");
var c1 = document.getElementById("c1");
var d1 = document.getElementById("d1");

var a2 = document.getElementById("a2");
var b2 = document.getElementById("b2");
var c2 = document.getElementById("c2");
var d2 = document.getElementById("d2");

var a3 = document.getElementById("a3");
var b3 = document.getElementById("b3");
var c3 = document.getElementById("c3");
var d3 = document.getElementById("d3");

var a4 = document.getElementById("a4");
var b4 = document.getElementById("b4");
var c4 = document.getElementById("c4");
var d4 = document.getElementById("d4");

var result = document.getElementById("result");

var restart = document.getElementById("restart");

//#TODO: Add Event Listeners to your answer choice variables.
a1.addEventListener("click", supergirl);
b1.addEventListener("click", batwoman);
c1.addEventListener("click", arrow);
d1.addEventListener("click", flash);

a1.addEventListener("click", disableQ1);
b1.addEventListener("click", disableQ1);
c1.addEventListener("click", disableQ1);
d1.addEventListener("click", disableQ1);

a2.addEventListener("click", batwoman);
b2.addEventListener("click", supergirl);
c2.addEventListener("click", arrow);
d2.addEventListener("click", flash);

a2.addEventListener("click", disableQ2);
b2.addEventListener("click", disableQ2);
c2.addEventListener("click", disableQ2);
d2.addEventListener("click", disableQ2);

a3.addEventListener("click", batwoman);
b3.addEventListener("click", supergirl);
c3.addEventListener("click", flash);
d3.addEventListener("click", arrow);

a3.addEventListener("click", disableQ3);
b3.addEventListener("click", disableQ3);
c3.addEventListener("click", disableQ3);
d3.addEventListener("click", disableQ3);

a4.addEventListener("click", arrow);
b4.addEventListener("click", batwoman);
c4.addEventListener("click", supergirl);
d4.addEventListener("click", flash);

a4.addEventListener("click", disableQ4);
b4.addEventListener("click", disableQ4);
c4.addEventListener("click", disableQ4);
d4.addEventListener("click", disableQ4);

//event Listener for restart button

//event listener for reactive button when restart is pressed
restart.addEventListener("click", enableButtons);

restart.addEventListener("click", doRestart);

function disableQ1() {
  document.getElementById("a1").disabled = true;
  document.getElementById("b1").disabled = true;
  document.getElementById("c1").disabled = true;
  document.getElementById("d1").disabled = true;
}

function disableQ2() {
  document.getElementById("a2").disabled = true;
  document.getElementById("b2").disabled = true;
  document.getElementById("c2").disabled = true;
  document.getElementById("d2").disabled = true;
}

function disableQ3() {
  document.getElementById("a3").disabled = true;
  document.getElementById("b3").disabled = true;
  document.getElementById("c3").disabled = true;
  document.getElementById("d3").disabled = true;
}

function disableQ4() {
  document.getElementById("a4").disabled = true;
  document.getElementById("b4").disabled = true;
  document.getElementById("c4").disabled = true;
  document.getElementById("d4").disabled = true;
}

function enableButtons() {
  //if restart button is clicked
  document.getElementById("a1").disabled = false;
  document.getElementById("b1").disabled = false;
  document.getElementById("c1").disabled = false;
  document.getElementById("d1").disabled = false;

  document.getElementById("a2").disabled = false;
  document.getElementById("b2").disabled = false;
  document.getElementById("c2").disabled = false;
  document.getElementById("d2").disabled = false;

  document.getElementById("a3").disabled = false;
  document.getElementById("b3").disabled = false;
  document.getElementById("c3").disabled = false;
  document.getElementById("d3").disabled = false;

  document.getElementById("a4").disabled = false;
  document.getElementById("b4").disabled = false;
  document.getElementById("c4").disabled = false;
  document.getElementById("d4").disabled = false;
}
//#TODO: Define quiz functions here
function flash() {
  flashScore += 1;
  questionCount += 1;
  // alert("one point to the flash");
  if (questionCount >= 4) {
    updateResult();
  }
}

function supergirl() {
  supergirlScore += 1;
  questionCount += 1;
  // alert("one point to supergirl");
  if (questionCount >= 4) {
    updateResult();
  }
}

function batwoman() {
  batwomanScore += 1;
  questionCount += 1;
  //  alert("one point to batwoman");
  if (questionCount >= 4) {
    updateResult();
  }
}

function arrow() {
  arrowScore += 1;
  questionCount += 1;
  //  alert("one point to arrow");
  if (questionCount >= 4) {
    updateResult();
  }
}
function updateResult() {
  if (flashScore >= 3) {
    result.innerHTML = "The Flash!";
  } else if (supergirlScore >= 2) {
    result.innerHTML = "Supergirl!";
  } else if (arrowScore >= 2) {
    result.innerHTML = "The Arrow!";
  } else if (batwomanScore >= 2) {
    result.innerHTML = "Batwoman!";
  } else {
    result.innerHTML = "Error... Try Again!";
  }
}

function doRestart() {
  questionCount = 0;
  flashScore = 0;
  supergirlScore = 0;
  batwomanScore = 0;
  arrowScore = 0;
  result.innerHTML = "Your result is...";
}
