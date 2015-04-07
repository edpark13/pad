var NUMROWS = 7;
var NUMCOLS = 6;
var GEMR = 50;
var COLORS = ["red", "blue", "green", "yellow", "purple", "pink"];
var ACTIVEGEM = 0;
var ACTIVE = false;
var LIST = [];


$(function() {
    for (col=0; col < NUMCOLS; col++) {
        for (row=0; row < NUMROWS; row++) {
            var random = Math.floor(Math.random() * 6);
            var gem = $("<div class='gem'> </div>");
            var number_id = row.toString() + col.toString();
            gem.attr("id", number_id)
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
        LIST = [];
    });
    $(".gem").mouseup(function() {
        removeCol();
        removeRow();
        ACTIVE = false;
        console.log(LIST);
    });
});


function move() {
    console.log(ACTIVE);
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

function removeCol() {
    for (col=0; col < NUMCOLS; col++) {
        for (row=0; row < NUMROWS; row++) {
            var count = 1;
            while ($("#" + row.toString() + col.toString()).css("background-color") == $("#" + (row + 1).toString() + col.toString()).css("background-color")) {
                count += 1;
                row += 1;
            }
            if (count >= 3) {
                for (y=0; y < count; y++) {
                    var number = (row-y).toString() + col.toString();
                    LIST.push(number);
                }
            }
        }
    }
}

function removeRow() {
    for (col=0; col < NUMCOLS; col++) {
        for (row=0; row < NUMROWS; row++) {
            var count = 1;
            while ($("#" + row.toString() + col.toString()).css("background-color") == $("#" + row.toString() + (col+1).toString()).css("background-color")) {
                count += 1;
                col += 1;
            }
            if (count >= 3) {
                for (y=0; y < count; y++) {
                    var number = row.toString() + (col-y).toString();
                    LIST.push(number);
                }
            }
        }
    }
}
