var NUMROWS = 5;
var NUMCOLS = 6;
var GEMR = 75;
var COLORS = ["red", "blue", "green", "yellow", "purple", "pink"];
var ACTIVEGEM = 0;
var ACTIVE = false;
var LIST = [];


$(function() {
    makeGems();
});


function makeGems() {
    var createdNewGems = false;
    for (col=0; col < NUMCOLS; col++) {
        for (row=0; row < NUMROWS; row++) {
            var test = $("#" + row.toString() + col.toString());
            if (test.length === 0) {
                var random = Math.floor(Math.random() * 6);
                var gem = $("<div class='gem'> </div>");
                var number_id = row.toString() + col.toString();
                gem.attr("id", number_id);
                gem.addClass(COLORS[random]);
                gem.css("top", row*GEMR+"px");
                gem.css("left", col*GEMR+"px");
                gem.appendTo("#board");
                createdNewGems = true;
                gem.mouseover(move);
                gem.mousedown(function() {
                    ACTIVEGEM = $(this);
                    ACTIVE = true;
                    LIST = [];
                });
                gem.mouseup(function() {
                    remove();
                    ACTIVE = false;
                });
            }
        }
    }
    if (createdNewGems) {
        remove();
    }
}


function move() {
    if (ACTIVE) {
        var top = $(this).css("top");
        var left = $(this).css("left");
        var id_swap = $(this).attr("id");
        $(this).css("top", ACTIVEGEM.css("top"));
        $(this).css("left", ACTIVEGEM.css("left"));
        $(this).attr("id", ACTIVEGEM.attr('id'));
        ACTIVEGEM.css("top", top);
        ACTIVEGEM.css("left", left);
        ACTIVEGEM.attr('id', id_swap);
    }
}


function remove() {
    removeCol();
    removeRow();
    if (LIST.length > 0) {
        gemFall();
        makeGems();
    }
}


function removeCol() {
    for (col=0; col < NUMCOLS; col++) {
        var count = 0;
        var collection = [];
        while (count <= NUMROWS) {
            var gem = $("#" + count.toString() + col.toString());
            try {
                if (gem.attr('class').split(" ")[1] !== collection[0].attr('class').split(" ")[1]) {
                    if (collection.length >= 3) {
                        LIST.push(collection);
                    }
                    collection = [];
                }
            } catch(err) {
                if (collection.length >= 3) {
                    LIST.push(collection);
                }
                collection = [];
            }
            collection.push(gem);
            count++;
        }
    }
}


function removeRow() {
    for (row=0; row < NUMROWS; row++) {
        var count = 0;
        var collection = [];
        while (count <= NUMCOLS) {
            var gem = $("#" + row.toString() + count.toString());
            try {
                if (gem.attr('class').split(" ")[1] !== collection[0].attr('class').split(" ")[1]) {
                    if (collection.length >= 3) {
                        LIST.push(collection);
                    }
                    collection = [];
                }
            } catch(err) {
                if (collection.length >= 3) {
                    LIST.push(collection);
                }
                collection = [];
            }
            collection.push(gem);
            count++;
        }
    }
}


function gemFall() {
    for (collection=0; collection < LIST.length; collection++) {
        for (igem=0; igem < LIST[collection].length; igem++) {
            var gem = LIST[collection][igem];
            gem.remove();
        }
    }
    for (col = 0; col < NUMCOLS; col++) {
        for (bottom = NUMROWS - 1; bottom > 0; bottom--) {
            var row = bottom;
            while (row > -1) {
                var gem = $("#" + row.toString() + col.toString());
                if (gem.length) {
                    gem.removeAttr("id");
                    gem.attr("id", bottom.toString() + col.toString());
                    gem.css("top", bottom*GEMR+"px");
                    break;
                } else {
                    row--;
                }
            }
        }
    }
}
