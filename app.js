
//.....................Variables defined here......................

var mainSquare = document.querySelector("p");
var option = document.querySelector(".option");
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

var chalk = document.getElementById('chalk');
var gong = document.getElementById('gong');
var segmentEnd;

var quoteSource=[
		{
			quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
			name:"Francis of Assisi"
	    },
	    {
	    	quote:"Believe you can and you're halfway there.",
	    	name:"Theodore Roosevelt"
	    },
	    {
	    	quote:"It does not matter how slowly you go as long as you do not stop.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	    	name:"Thomas A. Edison"
	    },
	    {
	    	quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
	    	name:"Confucius"
	    },
	    {
	    	quote:"Don't watch the clock; do what it does. Keep going.",
	    	name:"Sam Levenson"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	name:"Ayn Rand"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	name:"Ayn Rand"
	    },
	    {
	    	quote:"Expect problems and eat them for breakfast.",
	    	name:"Alfred A. Montapert"
	    },
	    {
	    	quote:"Start where you are. Use what you have. Do what you can.",
	    	name:"Arthur Ashe"
	    },
	    {
	    	quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
	    	name:"Samuel Beckett"
	    },
	    {
	    	quote:"Be yourself; everyone else is already taken.",
	    	name:"Oscar Wilde"
	    },
	    {
	    	quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
	    	name:"Albert Einstein"
	    },
	    {
	    	quote:"Always remember that you are absolutely unique. Just like everyone else.",
	    	name:"Margaret Mead"
	    },
	    {
	    	quote:"Do not take life too seriously. You will never get out of it alive.",
	    	name:"Elbert Hubbard"
	    },
	    {
	    	quote:"People who think they know everything are a great annoyance to those of us who do.",
	    	name:"Isaac Asimov"
	    },
	    {
	    	quote:"Procrastination is the art of keeping up with yesterday.",
	    	name:"Don Marquis"
	    },
	    {
	    	quote:"Get your facts first, then you can distort them as you please.",
	    	name:"Mark Twain"
	    },
	    {
	    	quote:"A day without sunshine is like, you know, night.",
	    	name:"Steve Martin"
	    },
	    {
	    	quote:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
	    	name:"Ellen DeGeneres"
	    },
	    {
	    	quote:"Don't sweat the petty things and don't pet the sweaty things.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Always do whatever's next.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Atheism is a non-prophet organization.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Hapiness is not something ready made. It comes from your own actions.",
	    	name:"Dalai Lama"
	    }
	];

function quoteGenerator(){
  var quote = $('#quoteContainer h2').text();
  var quoteGenius = $('#quoteGenius').text();
  var sourceLength = quoteSource.length;
	var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
	for(i=0;i<=sourceLength;i+=1){
	   var newQuoteText = quoteSource[randomNumber].quote;
	   var newQuoteGenius = quoteSource[randomNumber].name;
     var quoteContainer = $('#quoteContainer');
         quoteContainer.html('');
         quoteContainer.append('<h2>'+newQuoteText+'</h2>'+'<h2 id="quoteGenius">'+'-'+newQuoteGenius+'</h2>');
       };
   }



game.currentStudent = game.student1
//....................Running the Functions here

startScreen()

//....................Operation of the game within a for loop

for (var i = 0; i < subSquares.length ; i++) {
  subSquares[i].addEventListener('click', function(){
    playSegment(0.02, 0.03)
    if("color:"+ this.innerText +";" == mainSquare.getAttribute("style")){
      rndMainSquare(mainSquare);
      shuffleOnce(colors);
      correctAnswer()
    }else
      wrongAnswer();
    }
  )
}

//.........................THE FUNCTIONS.............................

function startScreen(){
  // $("#start").animate({params},speed,callback);
  $("#start").click(function(){
    playSegment(0.02, 0.03)
    gameStart();
    // gameStart();
      $(this).remove()
    }
  )
}

function gameStart(){
  $("#pin1").show()
  $("#pin2").hide()
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
    shuffle(colors)
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
      $("#pin1").hide()
      $("#pin2").show()
      $('#countdown').html(5)
  } else {
      game.currentStudent = game.student1;
      $("#pin2").hide()
      $("#pin1").show()
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
    $("#pin1").show()
    $("#pin2").hide()
    quoteGenerator()
    // alert ("Player 1 has won!")
  }else if(game.student1.score < game.student2.score){
    var para = document.createElement("p");
    var node = document.createTextNode("Student 2 won");
    para.appendChild(node);
    var element = document.getElementById("yeah");
    element.appendChild(para);
    $("#pin1").hide()
    $("#pin2").show()
    quoteGenerator()
  }else{
    var para = document.createElement("p");
    var node = document.createTextNode("It's a tie");
    para.appendChild(node);
    var element = document.getElementById("yeah");
    element.appendChild(para);
    $("#pin1").remove()
    $("#pin2").remove()
    quoteGenerator()
  }$('p').click(function(){
   location.reload();
 });
}

function countdown() {
  if(game.active){
    seconds = $('#countdown').text();
    seconds = parseInt(seconds, 10);
    // console.log(seconds);
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

chalk.addEventListener('timeupdate', function (){
    if(segmentEnd && chalk.currentTime >= segmentEnd) {
        chalk.pause();
      }
      console.log(chalk.currentTime);
}, false);

function playSegment(startTime, endTime){
    segmentEnd = endTime;
    chalk.currentTime = startTime;
    chalk.play();
}
