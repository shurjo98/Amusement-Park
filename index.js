var soundsArray = ["bat", "mat", "pat", "cat", "fat", "rat", "sat", "tat", "vat", "hat"];
var letterArray = ["b", "c", "f", "h", "m", "p", "r", "s", "t", "v"];

var gameAskedQuestion = "";
var randomLetterGenerated1 = "";
var randomLetterGenerated2 = "";
var randomLetterGenerated3 = "";
var randomLetterGenerated4 = "";
var randomLetterGenerated5 = "";
var randomLetterGenerated6 = "";
var randomLetterGenerated7 = "";
var randomLetterGenerated8 = "";

var randomGeneratedLetterOnTheWheelsArray = [];


var userChosenLetter = "";
var computerChosenletter = "";
var rightAnswers = 0;

var start = false;

var totalCakeHiddenImages = document.querySelectorAll(".cake-hidden").length;


var start = false;





$("#play-button").click(function() {
  console.log("Clicked");
  if (!start) {

    document.getElementById('myAudio').play();
    document.getElementById("myAudio").volume = 0.2;
    document.getElementById("myAudio").loop = true;

    setTimeout(function() {
      nextSequence();

    }, 1000);

    startDragging();

    start = true;
  }
});

$("#repeat-button").click(function(){
    makeSound(computerChosenletter);
});



function startDragging() {
  document.addEventListener("dragstart", function(event) {
    // The dataTransfer.setData() method sets the data type and the value of the dragged data
    event.dataTransfer.setData("Text", event.target.id);

  });

  document.addEventListener("drag", function(event) {
    console.log(event.target.id);

  });

  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });


  document.addEventListener("dragenter", function(event) {

    if (event.target.className === "droptarget letters") {
      console.log("Entered");
      console.log(event.target.className);
      // event.target.classList.add("glowing-box");
      event.target.style.backgroundColor = "lightblue";
    }
  });


  document.addEventListener("dragleave", function(event) {

    if (event.target.className === "droptarget letters") {
      // event.target.classList.add("glowing-box");
      event.target.style.backgroundColor = "";
    }
  });

  document.addEventListener("drop", function(event) {
    event.preventDefault();
    if (event.target.className === "droptarget letters") {
      event.target.style.backgroundColor = "";
      var userChosenID = event.dataTransfer.getData("Text");
      console.log(userChosenID);
      if (userChosenID === "mydiv1") {
        userChosenLetter = randomLetterGenerated1;
      } else if (userChosenID === "mydiv2") {
        userChosenLetter = randomLetterGenerated2;
      } else if (userChosenID === "mydiv3") {
        userChosenLetter = randomLetterGenerated3;
      } else if (userChosenID === "mydiv4") {
        userChosenLetter = randomLetterGenerated4;
      } else if (userChosenID === "mydiv5") {
        userChosenLetter = randomLetterGenerated5;
      } else if (userChosenID === "mydiv6") {
        userChosenLetter = randomLetterGenerated6;
      } else if (userChosenID === "mydiv7") {
        userChosenLetter = randomLetterGenerated7;
      } else  {
        userChosenLetter = randomLetterGenerated8;
      }
      console.log("dropped");
      document.getElementById("answer-box").src = "images/" + userChosenLetter + ".png";

      checkAnswer();

    }
  });
}


function nextSequence() {

  randomGeneratedLetterOnTheWheelsArray = [];

  var randomNumber1 = Math.floor(Math.random() * 10);
  var randomNumber2 = Math.floor(Math.random() * 10);
  var randomNumber3 = Math.floor(Math.random() * 10);
  var randomNumber4 = Math.floor(Math.random() * 10);
  var randomNumber5 = Math.floor(Math.random() * 10);
  var randomNumber6 = Math.floor(Math.random() * 10);
  var randomNumber7 = Math.floor(Math.random() * 10);
  var randomNumber8 = Math.floor(Math.random() * 10);


  var randomLetter1 = letterArray[randomNumber1];
  var randomLetter2 = letterArray[randomNumber2];
  var randomLetter3 = letterArray[randomNumber3];
  var randomLetter4 = letterArray[randomNumber4];
  var randomLetter5 = letterArray[randomNumber5];
  var randomLetter6 = letterArray[randomNumber6];
  var randomLetter7 = letterArray[randomNumber7];
  var randomLetter8 = letterArray[randomNumber8];





  document.getElementById("mydiv1").src = "images/" + randomLetter1 + ".png";
  randomLetterGenerated1 = randomLetter1;

  document.getElementById("mydiv2").src = "images/" + randomLetter2 + ".png";
  randomLetterGenerated2 = randomLetter2;

  document.getElementById("mydiv3").src = "images/" + randomLetter3 + ".png";
  randomLetterGenerated3 = randomLetter3;

  document.getElementById("mydiv4").src = "images/" + randomLetter4 + ".png";
  randomLetterGenerated4 = randomLetter4;

  document.getElementById("mydiv5").src = "images/" + randomLetter5 + ".png";
  randomLetterGenerated5 = randomLetter5;

  document.getElementById("mydiv6").src = "images/" + randomLetter6 + ".png";
  randomLetterGenerated6 = randomLetter6;

  document.getElementById("mydiv7").src = "images/" + randomLetter7 + ".png";
  randomLetterGenerated7 = randomLetter7;

  document.getElementById("mydiv8").src = "images/" + randomLetter8 + ".png";
  randomLetterGenerated8 = randomLetter8;

  randomGeneratedLetterOnTheWheelsArray.push(randomLetterGenerated1, randomLetterGenerated2, randomLetterGenerated3, randomLetterGenerated4,randomLetterGenerated5,randomLetterGenerated6,randomLetterGenerated7,randomLetterGenerated8);



  var randomNumberForSpeech = Math.floor(Math.random() * 8);
  computerChosenletter = randomGeneratedLetterOnTheWheelsArray[randomNumberForSpeech];
  console.log("Computer Chose To Speak " + computerChosenletter);
  makeSound(computerChosenletter);

  // gameAskedQuestion.push(randomLetter);
  // play(randomLetter);
}

function drawCakes() {

  for (var i = 0; i < rightAnswers; i++) {
    document.querySelectorAll(".cake-hidden")[i].src = "images/burger.png";
  }
}


function checkAnswer() {


  if (computerChosenletter === userChosenLetter) {
    console.log("correct");
    rightAnswers += 1;
    console.log("Right Answers" + rightAnswers);
    drawCakes();
    var correctSound = new Audio("sounds/correct_sound.wav");
    correctSound.volume = 0.9;
    correctSound.play();




  } else {
    var wrongSound = new Audio("sounds/wrong_sound.wav");
    wrongSound.volume = 0.9;
    wrongSound.play();
    console.log("wrong");
    drawCakes();

  }

  if (rightAnswers <= 9) {
    setTimeout(function () {
      nextSequence();
    }, 3000);
    console.log(rightAnswers);
  }

  if (rightAnswers == 10) {

    var audio = new Audio("sounds/finish_sound.wav");
    audio.play();

    // setTimeout(function () {
    //     width = canvas.width = window.innerWidth;
    //     height = canvas.height = document.body.offsetHeight;
    //     vanishPointY = height / 2;
    //     vanishPointX = width / 2;
    //     render();
    // }, 400);

  }

}




function makeSound(key) {

  switch (key) {
    case "b":
      var b = new Audio("sounds/bat.mp3");
      b.play();
      break;

    case "c":
      var c = new Audio("sounds/cat.mp3");
      c.play();
      break;

    case "f":
      var f = new Audio("sounds/fat.mp3");
      f.play();
      break;


    case "h":
      var h = new Audio("sounds/hat.mp3");
      h.play();
      break;

    case "m":
      var m = new Audio("sounds/mat.mp3");
      m.play();
      break;

    case "p":
      var p = new Audio("sounds/pat.mp3");
      p.play();
      break;

    case "r":
      var r = new Audio("sounds/rat.mp3");
      r.play();
      break;

    case "s":
      var s = new Audio("sounds/sat.mp3");
      s.play();
      break;

    case "t":
      var t = new Audio("sounds/tat.mp3");
      t.play();
      break;

    case "v":
      var v = new Audio("sounds/vat.mp3");
      v.play();
      break;




    default:
      console.log("No Sound");

  }
}
