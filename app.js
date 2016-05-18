//set an array of 3 colors
//pick a number between 0 and 2
//answer = colors[1]==green
//make the words a random generation
//make the colors of the word the correct answer
//$('#main-square').text(randomWord);
//$('#main-square'),css('color', randomColor)

//.....................Variables defined here......................

var mainSquare = document.querySelector("p");
var subSquares = document.querySelectorAll(".subSquares");

var actualColors = ['#BC5060', '#FFFFFF', '#002244'];
var colors = ['Red', 'White', 'Navy'];

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
  active: true
}

// var gameActive = true


game.currentStudent = game.student1
//....................Running the Functions here
rndMainSquare(mainSquare);
shuffleOnce(colors);
countdown();


//....................Operation of the game within a for loop
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

//.........................THE FUNCTIONS.............................

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
    swap(arr, i, rnd)
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
    swap(arr, i, rnd)
  }
  //Apply randomize colors to the styles
  for(i=0; i < arr.length; i++){
    console.log("document.getElementById(i + 1)", document.getElementById(i + 1));
    // document.getElementById(i + 1).innerHTML = colors[i]
    subSquares[i].setAttribute("style","color:" + colors[i]+ ";");
  }
}

//Randomly swapping the colors of subSquares
function swap(arr, index1, index2){
  var temp = arr.slice(0);
  arr[index1] = arr[index2];
  arr[index2] = temp[index1]
  return arr
}

function switchTurns() {
  // alert("Switch players!")
  if (game.currentStudent == game.student1) {
      game.currentStudent = game.student2;
      $('#countdown').html(5)
      rounds()

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

  }

function wrongAnswer(){
  game.currentStudent.score--
  game.currentStudent.scoreBoard.innerHTML = game.currentStudent.score
  rndMainSquare(mainSquare);
  shuffleOnce(colors)
  switchTurns()
}

function rounds(){
  game.round++
  game.roundCounter.innerHTML = game.round
  if(game.round == 6){
    endGame()
  }
}

function endGame(){
  game.active = false
  if(game.student1.score > game.student2.score){
    alert ("Player 1 has won!")
  }else alert ("Player 2 has won!")
}

function countdown() {
  if(game.active){
    seconds = $('#countdown').text();
    seconds = parseInt(seconds, 10);
    console.log(seconds);
    if (seconds == 0) {
      temp = $('#countdown');
      // alert("Too Slow~")
      $('#countdown').html(5)
      countdown()
      rounds()
      // if(game.round == 6){
      //   endGame()
      //   console.log("game ends")
      // }
      return;
    }
    seconds--;
    temp = $('#countdown');
    temp.text(seconds)
    timeoutMyOswego = setTimeout(countdown, 1000);
  }
}
