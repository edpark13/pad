NUMROWS = 7;
NUMCOLS = 6;
GEMR = 50;
COLORS = ["red", "blue", "green", "yellow", "purple", "pink"];
ACTIVEGEM = 0;
ACTIVE = false


$(function() {
    for (col=0; col < NUMCOLS; col++) {
        for (row=0; row < NUMROWS; row++) {
            var random = Math.floor(Math.random() * 6);
            var gem = $("<div class='gem'> </div>");
            gem.css("background-color", COLORS[random]);
            gem.css("top", row*GEMR+"px");
            gem.css("left", col*GEMR+"px");
            gem.appendTo("#board");
        }
    }
    $(".gem").mouseover(move);
    $(".gem").mousedown(function() {
        ACTIVEGEM = $(this);
        ACTIVE = true;
    });
    $(".gem").mouseup(function() {
        ACTIVE = false;
    });
});

function move() {
    console.log(ACTIVE);
    if (ACTIVE) {
        var top = $(this).css("top");
        var left = $(this).css("left");
        $(this).css("top", ACTIVEGEM.css("top"));
        $(this).css("left", ACTIVEGEM.css("left"));
        ACTIVEGEM.css("top", top);
        ACTIVEGEM.css("left", left);
    }
}
