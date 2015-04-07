NUMROWS = 7;
NUMCOLS = 6;
GEMR = 50;
COLORS = ["red", "blue", "green", "yellow", "purple", "pink"]

$(function() {
    for (row=0; row < NUMROWS; row++) {
        var column = $("<div class='column'></div>");
        for (col=0; col < NUMCOLS; col++) {
            var random = Math.floor(Math.random() * 6);
            console.log(COLORS[random])
            var gem = $("<div class='gem'> </div>");
            gem.css("background-color", COLORS[random]);
            gem.appendTo(column)
        }
        column.appendTo("#board")
    }
});
