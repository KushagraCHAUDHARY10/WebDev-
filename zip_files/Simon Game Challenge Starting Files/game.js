const gamePattern = [];
var userClickedPattern = [];
const buttonColor = ["red", "blue", "green", "yellow"];

function nextSequence(){
    var next = Math.floor(Math.random*4);
    var randomChosenColour = buttonColor[next];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    var audio = new Audio("./sounds" + randomChosenColour + ".mp3");
    audio.play;
}

function userClick(){
    $("button").click(function(){
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
    });
}
