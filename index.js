$("img").click(function(){
    playSound();
});

function playSound(){
    var crash1 = new Audio('/sound/crash.mp3');
        crash1.play();
}