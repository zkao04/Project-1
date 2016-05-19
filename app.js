//set an array of 3 colors
//pick a number between 0 and 2
//answer = colors[1]==green
//make the words a random generation
//make the colors of the word the correct answer
//$('#main-square').text(randomWord);
//$('#main-square'),css('color', randomColor)

//.....................Variables defined here......................

var mainSquare = document.querySelector("p");
var yeah = document.querySelector("#yeah");
var subSquares = document.querySelectorAll(".subSquares");
var subContainer = document.querySelector(".sub-container");

var actualColors = ['#BC5060', '#FFFFFF', '#002244', '#FED09E', '#000000', '#60007F'];
var colors = ['Red', 'White', 'Navy', 'Orange', 'Black', 'Purple' ];

var scoreBoard1 = document.querySelector('#scoreBoard1');
var scoreBoard2 = document.querySelector('#scoreBoard2')

var game = {
  student1: {
    name: "student1",
    score: 0,
    scoreBoard: document.querySelector("#score1")
  },
  student2: {
    name: "student2",
    score: 0,
    scoreBoard: document.querySelector("#score2")
  },
  currentStudent: null,
  round: 0,
  roundCounter: document.querySelector("#round-counter"),
  active: true,
  winner: document.querySelector("#winner")
}

game.currentStudent = game.student1
//....................Running the Functions here

startScreen()
// gameStart()

//....................Operation of the game within a for loop
// function rndSubSquare(){
  for (var i = 0; i < subSquares.length ; i++) {
    subSquares[i].addEventListener('click', function(){
      if("color:"+ this.innerText +";" == mainSquare.getAttribute("style")){
        rndMainSquare(mainSquare);
        shuffleOnce(colors);
        correctAnswer()
      }else
    // rndMainSquare(mainSquare); shuffleOnce(colors);
        wrongAnswer();
      }
    )
  }
// }
//.........................THE FUNCTIONS.............................

function startScreen(){
  mainSquare.addEventListener('click', function()){
    gameStart()
}

function gameStart(){
     rndMainSquare(mainSquare)
     shuffleOnce(colors)
     countdown()
}
//Randomly generating word of the color and color of the word
function rndMainSquare(a){
  var rnd = (colors[Math.floor(Math.random() * colors.length)])
  var rnd2 = (colors[Math.floor(Math.random() * actualColors.length)])
  mainSquare.innerHTML = rnd
  mainSquare.setAttribute("style","color:" + rnd2 + ";");
}

//Randomly colorize the names and colors
function shuffleOnce(arr){
  for(i=0; i < arr.length; i ++){
    var rnd = [Math.floor(Math.random() * arr.length)];
    // swap(arr, i, rnd)
    shuffle(colors)
    // console.log("rnd",rnd);
    // console.log("arr",arr);
  }
  //Print randomize color to screen
  for(i=0; i < arr.length; i++){
    // console.log("document.getElementById(i + 1)", document.getElementById(i + 1));
    document.getElementById(i + 1).innerHTML = colors[i]
  }
  //Randomize colors of array once more for styling
  for(i=0; i < arr.length; i++){
    var rnd = [Math.floor(Math.random() * arr.length)];
    // swap(arr, i, rnd)
    shuffle(colors)
  }
  //Apply randomize colors to the styles
  for(i=0; i < arr.length; i++){
    console.log("document.getElementById(i + 1)", document.getElementById(i + 1));
    // document.getElementById(i + 1).innerHTML = colors[i]
    subSquares[i].setAttribute("style","color:" + colors[i]+ ";");
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function switchTurns() {
  if (game.currentStudent == game.student1) {
      game.currentStudent = game.student2;
      $('#countdown').html(5)
  } else {
      game.currentStudent = game.student1;
      $('#countdown').html(5)
  }
}

function correctAnswer(){
  game.currentStudent.score++
  game.currentStudent.scoreBoard.innerHTML = game.currentStudent.score
  // shuffleOnce(colors)
  switchTurns()
  rounds()

  }

function wrongAnswer(){
  game.currentStudent.score--
  game.currentStudent.scoreBoard.innerHTML = game.currentStudent.score
  rndMainSquare(mainSquare);
  shuffleOnce(colors)
  switchTurns()
  rounds()
}

function rounds(){
  game.round++
  game.roundCounter.innerHTML = game.round
  if(game.round === 6){
    endGame()
  }
}

function endGame(){
  game.active = false
  mainSquare.style.visibility = 'hidden';
  subContainer.style.visibility = 'hidden';
  if(game.student1.score > game.student2.score){
    var para = document.createElement("p");
    var node = document.createTextNode("Student 1 Won");
    para.appendChild(node);
    var element = document.getElementById("yeah");
    element.appendChild(para);
    // alert ("Player 1 has won!")
  }else if(game.student1.score < game.student2.score){
    var para = document.createElement("p");
    var node = document.createTextNode("Student 2 won");
    para.appendChild(node);
    var element = document.getElementById("yeah");
    element.appendChild(para);
  }else{
    var para = document.createElement("p");
    var node = document.createTextNode("It's a tie");
    para.appendChild(node);
    var element = document.getElementById("yeah");
    element.appendChild(para);
  }$('p').click(function(){
   location.reload();
 });
}

function countdown() {
  if(game.active){
    seconds = $('#countdown').text();
    seconds = parseInt(seconds, 10);
    console.log(seconds);
    if (seconds == 0) {
      temp = $('#countdown');
      $('#countdown').html(5)
      countdown()
      rounds()
      switchTurns()
      return;
    }
    seconds--;
    temp = $('#countdown');
    temp.text(seconds)
    timeoutMyOswego = setTimeout(countdown, 1000);
  }
}
