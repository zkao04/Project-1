//set an array of 3 colors
//pick a number between 0 and 2
//answer = colors[1]==green
//make the words a random generation
//make the colors of the word the correct answer
//$('#main-square').text(randomWord);
//$('#main-square'),css('color', randomColor)

var mainSquare = document.querySelector("#main-square")
var subSquares = document.querySelectorAll(".subSquares")
var colors = ['red', 'white', 'blue'];
// var rand = colors[Math.floor(Math.random() * colors.length)];
  // console.log (colors[Math.floor(Math.random() * colors.length)])
// subSquares = colors[Math.floor(Math.random() * colors.length)]

rndMainSquare(mainSquare);

function rndMainSquare(a){
  console.log(colors[Math.floor(Math.random() * colors.length)])
  colors[Math.floor(Math.random() * colors.length)]
  // var string = (a).getAttribute("value") = mainSquare;
  //   (a).setAttribute("value", string)
}




// for(var i=0; i<subSquares.length; i ++){
//   // console.log(colors[Math.floor(Math.random() * colors.length)])
//   subSquares[i].addEventListener('click', function(){
//     console.log(colors[Math.floor(Math.random() * colors.length)])
//     this.innerHTML = colors[Math.floor(Math.random() * colors.length)]
//     var string = subSquares[i].getAttribute("value") + this.innerHTML;
//         subSquares[i].setAttribute("value",string)
//   })}




// function shuffle(colors){}


// public static int getRandom(int[] array) {
//     int rnd = new Random().nextInt(array.length);
//     return array[rnd];


// var items = ["a","e","i","o","u"]
// var objResults = {}
// for(var i = 0; i < ; i++){
//   var randomElement = items[Math.floor(Math.random()*items.length)]
//     if (objResults[randomElement]){ objResults[randomElement]++ }
//       else{ objResults[randomElement] = 1 }
//       } console.log(objResults)
