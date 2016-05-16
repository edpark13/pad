var NUMROWS = 5;
var NUMCOLS = 6;
var GEMR = 75;
var COLORS = ["red", "blue", "green", "yellow", "purple", "pink"];
var ACTIVEGEM;
var ACTIVE = false;

function Gem(x, y) {
    var gem = $("<div class='gem'> </div>");
    var self = this;
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
        ACTIVEGEM = $(this);
        var x = this.color;
        console.log(x);
        console.log(ACTIVEGEM.x);
        ACTIVE = true;
    });

    gem.on('mouseenter', function() {
        self.move();
    });

    gem.on('mouseup', function() {
        ACTIVE = false;
    })

    this.move = function() {
        if (ACTIVE) {
            var top = this.y;
            var left = this.x;
            // console.log(top.toString() + left.toString());
            var id_swap = this.id;
            console.log(ACTIVEGEM.y*GEMR+"px");
            $(this).css("top", ACTIVEGEM.y*GEMR+"px");
            $(this).css("left", ACTIVEGEM.x*GEMR+"px");
            $(this).id =  ACTIVEGEM.id;
            ACTIVEGEM.css("top", top*GEMR+"px");
            ACTIVEGEM.css("left", left*GEMR+"px");
            ACTIVEGEM.id = id_swap;
        }
    };
};


$(function() {
    for (x=0; x < NUMCOLS; x++) {
        for (y=0; y < NUMROWS; y++) {
            var gem = new Gem(x, y);
        }
    }
});
