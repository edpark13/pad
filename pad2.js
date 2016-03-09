var NUMROWS = 5;
var NUMCOLS = 6;
var GEMR = 75;
var COLORS = ["red", "blue", "green", "yellow", "purple", "pink"];

var Gem = function(x, y) {
    var gem = $("<div class='gem'> </div>");
    this.x = x;
    this.y = y;
    this.color = COLORS[Math.floor(Math.random()*COLORS.length)];
    gem.addClass(this.color);
    gem.css("top", y*GEMR+"px");
    gem.css("left", x*GEMR+"px");
    gem.appendTo('#board');
    gem.on("click", function() {
        alert("sup");
    });
};

$(function() {
    for (x=0; x < NUMCOLS; x++) {
        for (y=0; y < NUMROWS; y++) {
            var gem = new Gem(x, y);
        }
    }
});
