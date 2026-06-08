const gamePattern = [];
var userClickedPattern = [];
const buttonColor = ["red", "blue", "green", "yellow"];
var started = false;
var level = 0;

$(document).on("keydown", function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$("button").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else{
        console.log("wrong");
    }
}

function nextSequence(){
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    var next = Math.floor(Math.random*4);
    var randomChosenColour = buttonColor[next];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    
}

function playSound(name){
    var audio = new Audio("./sounds" + name + ".mp3");
    audio.play;
}

function animatePress(currentColor){
    $("#" + currentColor).addClass(".pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass(".pressed");
    }, 1000);
}