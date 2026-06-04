$("h1").click(function(){
    $("h1").css("color", "pink");
});

$(".b1").click(function(){
    $("h1").fadeToggle();
});
$(".b2").click(function(){
    $('h1').animate({opacity: .25});
});
$(".b3").click(function(){
    $('h1').slideUp().slideDown().animate({opacity: .50});
});
$(".b4").click(function(){
    $('h1').animate({opacity: 1});
});
$(".b5").click(function(){
    $('h1').toggle();
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});
