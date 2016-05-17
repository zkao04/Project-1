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
var colors = ['Red', 'Green', 'Navy'];
var actualColors = ['#FB4F14', '#203731', '#002244'];
var scoreBoard = document.querySelector('#scoreBoard');
console.log(subSquares, "HELLO");


//....................Running the Functions here
rndMainSquare(mainSquare);
shuffleOnce(colors);

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
  for (i=0; i < arr.length; i ++){
    var rnd = [Math.floor(Math.random() * arr.length)];
    swap(arr, i, rnd)
    console.log("rnd",rnd);
    console.log("arr",arr);
  }
  //Print randomize color to screen
  for(i=0; i < arr.length; i++){
    console.log("document.getElementById(i + 1)", document.getElementById(i + 1));
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

// console.log(mainSquare.getAttribute("style"))
//
// for (var i = 0; i < subSquares.length ; i++) {
//   subSquares[i].addEventListener('click', function(){
//     //write two arrays as an argument
//     if("color:"+ this.innerText +";" == mainSquare.getAttribute("style")){
//       score + 1
//       moveon to next stage
//
//       })
//     }
//   }
// }

  //write an if statement that if the indexes of two array matches,
    //score +1, go to next level
  //else score + 0, go to next level
// }

// subSquares.addEventListener ('click',)
