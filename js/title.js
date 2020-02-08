var rev = "forward";
// R follow the mouse
function titlebar(val) {
    var msg = ".::RuM Projects::.";
    var res = " ";
    var speed = 50
    var position = val;
    msg = "" + msg + "";
    var length = msg.length;
    if (rev == "forward") {
        if (position < length) {
            position = position + 1;
            scroll = msg.substr(0, position);
            document.title = scroll;
            timer = window.setTimeout("titlebar(" + position + ")", speed);
        } else {
            rev = "backward";
            timer = window.setTimeout("titlebar(" + position + ")", speed);
        }
    } else {
        if (position > 0) {
            position = position - 1;
            var ale = length - position;
            scroll = msg.substr(ale, length);
            document.title = scroll;
            timer = window.setTimeout("titlebar(" + position + ")", speed);
        } else {
            rev = "forward";
            timer = window.setTimeout("titlebar(" + position + ")", speed);
        }
    }
}
titlebar(0);