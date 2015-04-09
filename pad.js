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
            console.log($('#00').attr('class').split(" ")[1]);
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
        console.log(LIST)
        // removeGems("00", NaN, NaN);
        ACTIVE = false;
    });
});


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

function removeCol() {
    for (col=0; col < NUMCOLS; col++) {
        for (row=0; row < NUMROWS; row++) {
            var count = 1;
            try {
                while ($("#" + row.toString() + col.toString()).attr('class').split(" ")[1] == $("#" + (row + 1).toString() + col.toString()).attr('class').split(" ")[1]) {
                count += 1;
                row += 1;
                }
                if (count >= 3) {
                    for (y=0; y < count; y++) {
                        var number = (row-y).toString() + col.toString();
                        console.log(number);
                        LIST.push(number);
                        console.log(LIST);
                    }
                }
            } catch(error) {}
        }
    }
}

function removeRow() {
    for (col=0; col < NUMCOLS; col++) {
        for (row=0; row < NUMROWS; row++) {
            var count = 1;
            try {
                while ($("#" + row.toString() + col.toString()).attr('class').split(" ")[1] == $("#" + row.toString() + (col+1).toString()).attr('class').split(" ")[1]) {
                    count += 1;
                    col += 1;
                }
                if (count >= 3) {
                    for (y=0; y < count; y++) {
                        var number = row.toString() + (col-y).toString();
                        console.log(number);
                        LIST.push(number);
                        console.log(LIST);
                    }
                }
            } catch(error) {}
        }
    }
}

// function removeGems(id, color, list) {
//     var row = parseInt(id[0]);
//     var col = parseInt(id[1]);
//     if (row < NUMROWS && col < NUMCOLS) {
//         var gem = $("#"+id);
//         if (gem.css("background-color") === color) {
//             var newlist = list.slice();
//             newlist.push(id);
//             // console.log(newlist);
//             removeGems((row+1).toString() + col.toString(), color, newlist);
//             removeGems(row.toString() + (col + 1).toString(), color, newlist);
//         } else {
//             if (list.length >= 3) {
//                 // console.log("HOLY SHIT IT'S WORKING")
//                 // console.log(list.length)
//                 for (i=0; i < list.length; i++) {
//                     console.log("currently at " + id)
//                     console.log("id is " + list[i]);
//                     $("#" + list[i]).css("background-color", "black");
//                 }
//             }
//             removeGems((row+1).toString() + col.toString(), gem.css("background-color"), [id]);
//             removeGems(row.toString() + (col + 1).toString(), gem.css("background-color"), [id]);
//         }
//     } else {
//         for (i=0; i < list.length; i++) {
//                     console.log("currently at " + id)
//                     console.log("id is " + list[i]);
//                     $("#" + list[i]).css("background-color", "black");
//                 }
//     }
// }
