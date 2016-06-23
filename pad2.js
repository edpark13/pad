var NUMROWS = 5;
var NUMCOLS = 6;
var GEMR = 75;
var COLORS = ["red", "blue", "green", "yellow", "purple", "pink"];
var ACTIVEGEM;
var ACTIVE = false;
var BOARD = [];
var ALL_MATCHED = [];

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

    this.switch = function(other) {
        var top = this.y;
        var left = this.x;
        var id = this.id;
        var gem = this.gem;
        gem.css("top", other.y*GEMR+"px");
        gem.css("left", other.x*GEMR+"px");
        gem.attr("id", other.id);
        this.id = other.id;
        this.x = other.x;
        this.y = other.y;
        other.gem.css("top", top*GEMR+"px");
        other.gem.css("left", left*GEMR+"px");
        other.gem.attr("id", id);
        other.id = id;
        other.x = left;
        other.y = top;

        BOARD[left][top] = other;
        BOARD[this.x][this.y] = this;
    }

    gem.on("mousedown", function() {
        ACTIVEGEM = self;
        ACTIVE = true;
    });

    gem.on('mouseover', function() {
        if (ACTIVE) {
            self.switch(ACTIVEGEM);
        }
    });

    gem.on('mouseup', function() {
        ACTIVE = false;
        matchGems();
    })
};


$(function() {
    for (x=0; x < NUMCOLS; x++) {
        BOARD[x] = []
        for (y=0; y < NUMROWS; y++) {
            var gem = new Gem(x, y);
            BOARD[x][y] = gem;
        }
    }
});


function matchGems() {
    var all_matched = [];
    for (y=0; y < NUMROWS; y++) {
        var gems = [];
        for (x=0; x < NUMCOLS; x++) {
            match(BOARD[x]);
            gems.push(BOARD[x][y]);
        }
        match(gems);
    }
    console.log(ALL_MATCHED);
}


function match(gems) {
    var color = "";
    var matched = [];
    for (i=0; i < gems.length; i++) {
        gem = gems[i];
        if (color == gem.color || color === "") {
            color = gem.color
            matched.push(gem);
        } else {
            if (matched.length >= 3) {
                ALL_MATCHED.push(matched);
            }
            color = gem.color;
            matched = [];
        }
    }
}
