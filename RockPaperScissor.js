var app = angular.module("myApp", []);
app.controller("RockPaperScissor", function ($scope) {
  var self = this;
  var name = window.prompt("Enter your name:");
  if (name == null || name == undefined || name == '')
   name = "Player";
  $scope.name = name;
  $scope.FinalResults = [];
  var finalwinner = "";
  var ur = 0,
    ai = 0;
  var round = 0;
  $scope.round = round;
  document.getElementById("username").innerHTML = "Hi " + name;
  var userselection, randomNumber, javascriptSelection;
  var itemArray = ["rock", "paper", "scissor"];
  $scope.selectedImage = function (data) {
    
if (round <= 5) {
      finalwinner = ur > ai ? name : "javascript AI";
      if (ur == ai) {
        alert("Result of the game is Draw.");
      } else {
        alert(finalwinner + " won the game");
      }
      round = 0;
      $scope.round = round;
      ur = 0;

      ai = 0;

      $scope.FinalResults = [];
       document.getElementById("paper").style.backgroundColor = "";
       document.getElementById("rock").style.backgroundColor = "";
       document.getElementById("scissor").style.backgroundColor = "";
       document.getElementById("rockAI").style.backgroundColor = "";
       document.getElementById("scissorAI").style.backgroundColor = "";
       document.getElementById("paperAI").style.backgroundColor = "";

    }
   
else {
    var resultdetails = {};

    switch (data) {
      case "paper":
        document.getElementById("paper").style.backgroundColor = "#B94629";

        document.getElementById("rock").style.backgroundColor = "";

        document.getElementById("scissor").style.backgroundColor = "";

        break;

      case "rock":
        document.getElementById("rock").style.backgroundColor = "#B94629";

        document.getElementById("paper").style.backgroundColor = "";

        document.getElementById("scissor").style.backgroundColor = "";

        break;

      case "scissor":
        document.getElementById("scissor").style.backgroundColor = "#B94629";

        document.getElementById("rock").style.backgroundColor = "";

        document.getElementById("paper").style.backgroundColor = "";

        break;
    }

    console.log("user selection : " + data);

    userselection = data;

    randomNumber = Math.floor(Math.random() * itemArray.length);

    javascriptSelection = itemArray[randomNumber];
    console.log("javascript selection : " + javascriptSelection);
    switch (javascriptSelection) {
      case "paper":
        document.getElementById("paperAI").style.backgroundColor = "#B94629";
        document.getElementById("rockAI").style.backgroundColor = "";
        document.getElementById("scissorAI").style.backgroundColor = "";
        break;
      case "rock":
        document.getElementById("rockAI").style.backgroundColor = "#B94629";
        document.getElementById("paperAI").style.backgroundColor = "";
        document.getElementById("scissorAI").style.backgroundColor = "";
        break;
      case "scissor":
        document.getElementById("scissorAI").style.backgroundColor = "#B94629";
        document.getElementById("paperAI").style.backgroundColor = "";
        document.getElementById("rockAI").style.backgroundColor = "";
        break;
    }
    if (userselection == "rock" && javascriptSelection == "rock") {
      userResult = "tie";
      AIResult = "tie";
    }
    if (userselection == "paper" && javascriptSelection == "paper") {
      userResult = "tie";
      AIResult = "tie";
    }
    if (userselection == "scissor" && javascriptSelection == "scissor") {
      userResult = "tie";
      AIResult = "tie";
    }
    if (userselection == "rock" && javascriptSelection == "paper") {
      userResult = "loser";
      AIResult = "winner";
      ai = ai + 1;
    }
    if (userselection == "rock" && javascriptSelection == "scissor") {
      userResult = "winner";
      AIResult = "loser";
      ur = ur + 1;
    }
    if (userselection == "paper" && javascriptSelection == "rock") {
      userResult = "winner";
      AIResult = "loser";
      ur = ur + 1;
    }
    if (userselection == "paper" && javascriptSelection == "scissor") {
      userResult = "loser";
      AIResult = "winner";
      ai = ai + 1;
    }

    if (userselection == "scissor" && javascriptSelection == "rock") {
      userResult = "loser";
      AIResult = "winner";
      ai = ai + 1;
    }
    if (userselection == "scissor" && javascriptSelection == "paper") {
      userResult = "winner";
      AIResult = "loser";
      ur = ur + 1;
    }
    round = round + 1;
    $scope.round = round;
    resultdetails.roundNo = round;
    resultdetails.userResult = userResult;
    resultdetails.AIResult = AIResult;
    $scope.FinalResults.push(resultdetails);
    userResult = "";
    AIResult = "";
}
     
  };
});
