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
            gem.attr("id", number_id);
            gem.addClass(COLORS[random]);
            // gem.css("background-color", COLORS[random]);
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
        console.log(LIST);
        gemFall();
        ACTIVE = false;
    });
});


function move() {
    if (ACTIVE) {
        moveGem(this, ACTIVEGEM);
    }
}

function moveGem(to, from) {
    var top = $(to).css("top");
    var left = $(to).css("left");
    var id_swap = $(to).attr("id");
    $(to).css("top", from.css("top"));
    $(to).css("left", from.css("left"));
    $(to).attr("id", from.attr('id'));
    from.css("top", top);
    from.css("left", left);
    from.attr('id', id_swap);
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

function gemFall(){

}
