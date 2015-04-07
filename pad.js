NUMROWS = 7;
NUMCOLS = 6;
GEMR = 50;
COLORS = ["red", "blue", "green", "yellow", "purple", "pink"];
ACTIVE = false;
ACTIVEGEM = 'black';

$(function() {
    for (col=0; col < NUMCOLS; col++) {
        var column = $("<div class='column'></div>");
        for (row=0; row < NUMROWS; row++) {
            var random = Math.floor(Math.random() * 6);
            var gem = $("<div class='gem'> </div>");
            gem.css("background-color", COLORS[random]);
            gem.css("top", row*GEMR+"px");
            gem.css("left", col*GEMR+"px");
            gem.appendTo(column);
            // if (ACTIVE) {
            //     gem.mouseover(move)
            // }
        }
        column.appendTo("#board");
    }
    $(".gem").mousedown(function() {
        ACTIVE = true;
        ACTIVEGEM = $(this);
        move();
    })
});

function move() {
    $(".gem").mouseover(function () {
        var tempcolor = $(this).css("background-color");
        var color = ACTIVEGEM.css('background-color')
        $(this).css("background-color", color);

    })
    $(".gem").mouseup(function() {
        ACTIVE = false;
        ACTIVEGEM = 'black';
        console.log(ACTIVE)
    })
}
