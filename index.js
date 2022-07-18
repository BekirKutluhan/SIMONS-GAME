const buttonColours = ["Green","Red","Yellow","Blue"];
var randomNumber;
var gamePattern = [];
var randomChosenColour;
var greenAudio = new Audio("sounds/green.mp3")
var blueAudio = new Audio("sounds/blue.mp3")
var yellowAudio = new Audio("sounds/yellow.mp3")
var redAudio = new Audio("sounds/red.mp3")
var wrongAudio = new Audio("sounds/wrong.mp3")
const audiosArray = [greenAudio,redAudio,yellowAudio,blueAudio];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;
var userTurn = false;
var gameTurn = false;
var nextSequenceCounter = 0;
var userClickCounter = 0;
var gameAnimationCounter = 0;
var userChosenColour = 0;
var comparisonCounter = 0;
var levelCompleted = false;
var gameEnded = false;




  $(document).click(function(){
    if(gameEnded){
    var userChosenColour =event.target.classList[2];
    if(userChosenColour != undefined){
      wrongAudio.play();
      $("body").css("background-color","red");
      setTimeout(function () {
           $("body").css("background-color","#0d326e");
       }, 200);
  }
}
});

  $(document).click("click",function(){
if(userTurn){
console.log("UserClickIn : "+userClickCounter);
        var userChosenColour =event.target.classList[2];
            if(userChosenColour == undefined){
              $(document).one("click",document,userClick)
              return;}
      userClickCounter++;
        userClickedPattern.push(buttonColours[userChosenColour]);
        gameAnimation(userChosenColour);
        comparison();


        if(userClickedPattern.length == gamePattern.length){
            userTurn = false;
            gameTurn = true;
            setTimeout(function () {
                 nextSequence();
             }, 700);
        }
      }
});

function comparison(){
    comparisonCounter++;
      console.log("Comparison In");
        if(userClickedPattern[userClickedPattern.length-1] != gamePattern[userClickedPattern.length-1]){
          console.log("User Array : " +userClickedPattern);
          console.log("Game Array : " +gamePattern);
            gameOver();
            return;
        }
      }
////////////////////////////////*********************////////////////////

function nextSequence(){
  if(gameTurn && !gameEnded){
    while(userClickedPattern.length){
      userClickedPattern.pop();
    }
    nextSequenceCounter++;
      console.log("nextSequence in : " +nextSequenceCounter );
      $("h1").text("level "+level);
      randomNumber = Math.floor(Math.random()*4);
      randomChosenColour = buttonColours[randomNumber];
      gamePattern.push(randomChosenColour);
      gameAnimation(randomNumber);
      gameTurn = false;
      userTurn = true;
      console.log("nextSequence ended level: "+level);
      console.log("Game Array : " +gamePattern);
      level++;
  }
}

////////////////////////************//////////////////

function gameAnimation(name){
  gameAnimationCounter++;
  console.log("GameAnimationIn :"+gameAnimationCounter);
name = parseInt(name);
var colorWillPlayed = audiosArray[name];
$("."+name).fadeOut(100).fadeIn(100);
colorWillPlayed.play();
}

/////////////////*********************////////////////////

  $(document).keypress(function(){
while(!gameStarted){
    console.log("gameStartedIn");
    gameEnded=false;
      gameStarted = true;
      gameTurn = true;
      nextSequence();
}
});

//////////////////////*****************/////////////////////

function gameOver(){
  console.log("GAME OVER IN");
  gameTurn = false;
  gameStarted = false;
  gameEnded = true;
  while(gamePattern.length||userClickedPattern.length){
     gamePattern.pop();
    userClickedPattern.pop();
  }
  level = 0;
  $("h1").text("Game Over Please Press A Key To Restart")
  wrongAudio.play();
  $("body").css("background-color","red");
  setTimeout(function () {
       $("body").css("background-color","#0d326e");
   }, 200);
}
/////////////////////*******************///////////////////////















//  var greenAudio = new Audio("sounds/green.mp3")
//  var blueAudio = new Audio("sounds/blue.mp3")
//  var yellowAudio = new Audio("sounds/yellow.mp3")
//  var redAudio = new Audio("sounds/red.mp3")
//  var wrongAudio = new Audio("sounds/wrong.mp3")
//  const audioArray = [greenAudio,redAudio,yellowAudio,blueAudio];
// const colours = ["Green","Red","Yellow","Blue"];
// var userArray =[];
// var gameArray = [];
// var counter = 0;
// var randomNumber;
// var userInput;
// var comparedInput;
// var gameOver = false;
// var gameStarted=true;
//
// if(gameStarted == true ){
//   $(document).keypress(function simonFunc() {
//     while(userArray.length){
//    gameArray.pop();
//    userArray.pop();
//    }
//    gameStarted = false;
//    colourCreator();
// });}
//
// function gameEnd(){
//   counter=0;
//   gameOver = true;
//   $("h1").html("Game Over Please Press A Key To Restart");
//   wrongAudio.play();
//     $("body").css("background-color","red");
//   setTimeout(function () {
//   $("body").css("background-color","#0d326e");
// }, 200);
//  ////WHILE
//    $(document).click(function (clicked){
//     comparedInput = clicked.target.classList[1];
//     if(comparedInput !=undefined){
//       $("h1").html("Game Over Please Press A Key To Restart");
//       wrongAudio.play();
//       $("body").css("background-color","red");
//     setTimeout(function () {
//     $("body").css("background-color","#0d326e");
// }, 200);
// }////IF COMPARED
// });
// $(document).keypress(function gameStart(){
//   gameOver = false;
//   gameStarted = true;
// });}
//
// function colourCreator(){
//   randomNumber = Math.floor(Math.random()*4);
//   $("h1").html("Level "+(counter+1));
//   gameArray.push(colours[randomNumber]);
//   var colourGen = audioArray[randomNumber];
//   colourGen.play();
//   $("."+colours[randomNumber]).fadeOut(100).fadeIn(100);
//   clickTrigger();
//    }
//
// if(gameOver == false)
//    function clickTrigger(){
//      $(document).click(function abc(clicked){
//       comparedInput = clicked.target.classList[1];
//        if(comparedInput !=undefined && gameOver != true ){
//          userArray.push(comparedInput);
//         console.log("User Array: "+userArray);
//         console.log("Game Array: "+gameArray);
//         if(userArray[counter] != gameArray[counter]){
//           gameEnd();
//           return;
//         }
//         else{
//           colourCreator();
//         }
//       }
//       else{
//         return;
//       }
//       counter++;
//       return;
//       });
//       //
//     }
//
//
// ///*gameStart
//
//
//
//
//
//
// // function colourOperation(x){
// // x= (x+"Audio");
// //
// // x.play();
// // }
//
//
//
// // while(userArray.length){
// //     userArray.pop();
// //         }
//
//
//
// // $(document).keypress(function(){  /**CHECKS USER INPUT TO START THE GAME**/
// //   $("h1").text("Level 1")
// //   randomNumber = Math.floor((Math.random()*4)+1);
// //
// //   switch (randomNumber) {
// //     case 1:
// //     greenAudio.play();
// //        $(".green").animate({opacity:0.3});
// //        setTimeout(function () {
// //          $(".green").animate({opacity:1});
// //        }, 100);
// //       break;
// //     case 2:
// //       redAudio.play();
// //     $(".red").animate({opacity:0.3});
// //     setTimeout(function () {
// //       $(".red").animate({opacity:1});
// //     }, 100);
// //       break;
// //     case 3:
// //     redAudio.play();
// //   $(".yellow").animate({opacity:0.3});
// //   setTimeout(function () {
// //     $(".yellow").animate({opacity:1});
// //   }, 100);
// //       break;
// //     case 4:
// //     redAudio.play();
// //   $(".blue").animate({opacity:0.3});
// //   setTimeout(function () {
// //     $(".blue").animate({opacity:1});
// //   }, 100);
// //       break;
// //     default:
// //
// //   }});
//
//
//
// /////////////////////*******GAME GENERATES A COLOR*******////////////////
// // switch (colours[randomNumber]) {
// //   case 'Green':
// //           greenAudio.play();
// //           $(".green").animate({opacity:0.3});
// //           setTimeout(function () {
// //           $(".green").animate({opacity:1});
// //          }, 100);
// //          gameArray.push('Green');
// //          break;
// //   case 'Red':
// //        redAudio.play();
// //        $(".red").animate({opacity:0.3});
// //        setTimeout(function () {
// //        $(".red").animate({opacity:1});
// //        }, 100);
// //        gameArray.push('Red');
// //        break;
// //   case 'Yellow':
// //   yellowAudio.play();
// //   $(".yellow").animate({opacity:0.3});
// //   setTimeout(function () {
// //     $(".yellow").animate({opacity:1});
// //   }, 100);
// //   gameArray.push('Yellow');
// //   break;
// //   case 'Blue':
// //   blueAudio.play();
// //      $(".blue").animate({opacity:0.3});
// //      setTimeout(function () {
// //      $(".blue").animate({opacity:1});
// //      }, 100);
// //      gameArray.push('Blue');
// //     break;
// //   default:
// // }
// // ///////////////********USER CLICK ON WHAT COLOUR?********///////////////
// // for(var l = 0; l<counter; l++){
// // $(document).click(function(e){
// //   var userClick = e.target.classList[1];
// //   switch (userClick) {
// //     case 'Green':
// //             greenAudio.play();
// //             $(".green").animate({opacity:0.3});
// //             setTimeout(function () {
// //             $(".green").animate({opacity:1});
// //            }, 100);
// //            gameArray.push('Green');
// //            break;
// //     case 'Red':
// //          redAudio.play();
// //          $(".red").animate({opacity:0.3});
// //          setTimeout(function () {
// //          $(".red").animate({opacity:1});
// //          }, 100);
// //          userArray.push('Red');
// //          break;
// //     case 'Yellow':
// //         yellowAudio.play();
// //         $(".yellow").animate({opacity:0.3});
// //         setTimeout(function () {
// //         $(".yellow").animate({opacity:1});
// //         }, 100);
// //         userArray.push('Yellow');
// //         break;
// //     case 'Blue':
// //       blueAudio.play();
// //        $(".blue").animate({opacity:0.3});
// //        setTimeout(function () {
// //        $(".blue").animate({opacity:1});
// //        }, 100);
// //        userArray.push('Blue');
// //       break;
// //     default:
// //   }
