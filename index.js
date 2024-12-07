$("img").click(function(){
    playSound();
});

function playSound(){
    var crash1 = new Audio('/sound/crash.mp3');
        crash1.play();
}

$(document).click(function(){
    $('h1').animate({
        opacity: 0
    }, 500, function(){
        $(this).text("I Love You Mami!!!").animate({
            opacity: 1
        }, 500);
    });
});