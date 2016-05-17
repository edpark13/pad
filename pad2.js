var NUMROWS = 5;
var NUMCOLS = 6;
var GEMR = 75;
var COLORS = ["red", "blue", "green", "yellow", "purple", "pink"];
var ACTIVEGEM;
var ACTIVE = false;

function Gem(x, y) {
    var gem = $("<div class='gem'> </div>");
    var self = this;
    this.gem = gem;
    this.x = x;
    this.y = y;
    this.color = COLORS[Math.floor(Math.random()*COLORS.length)];
    this.id = y.toString() + x.toString();
    gem.attr("id", this.id);
    gem.addClass(this.color);
    gem.css("top", y*GEMR+"px");
    gem.css("left", x*GEMR+"px");
    gem.appendTo("#board");

    gem.on("mousedown", function() {
        ACTIVEGEM = self;
        ACTIVE = true;
    });

    gem.on('mouseover', function() {
        if (ACTIVE) {
            var top = self.y;
            var left = self.x;
            var id = self.id;
            $(this).css("top", ACTIVEGEM.y*GEMR+"px");
            $(this).css("left", ACTIVEGEM.x*GEMR+"px");
            $(this).attr("id", ACTIVEGEM.id);
            self.id = ACTIVEGEM.id;
            self.x = ACTIVEGEM.x;
            self.y = ACTIVEGEM.y;
            ACTIVEGEM.gem.css("top", top*GEMR+"px");
            ACTIVEGEM.gem.css("left", left*GEMR+"px");
            ACTIVEGEM.gem.attr("id", id);
            ACTIVEGEM.id = id;
            ACTIVEGEM.x = left;
            ACTIVEGEM.y = top;
        }
    });

    gem.on('mouseup', function() {
        ACTIVE = false;
    })
};


$(function() {
    for (x=0; x < NUMCOLS; x++) {
        for (y=0; y < NUMROWS; y++) {
            var gem = new Gem(x, y);
        }
    }
});
