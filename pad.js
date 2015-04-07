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
    });
    $(".gem").mouseup(function() {
        remove()
        ACTIVE = false;
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

COL1 = [00, 10, 20, 30, 40, 50, 60]


function remove() {
    var list = [];
    for (x=0; x < COL1.length; x++) {
        var count = 1;
        while ($("#" + COL1[x]).css("background-color") == $("#" + COL1[x + 1]).css("background-color")) {
            count += 1;
            x += 1;
        }
        if (count >= 3) {
            for (y=0; y < count; y++) {
                list.push(COL1[x-y]);
            }
        }
    }
    console.log(list)
}
