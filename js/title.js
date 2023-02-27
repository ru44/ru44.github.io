let direction = "forward";
function animateTitleText(position) {
    const message = ".::RuM Projects::.";
    const spaces = " ".repeat(position);
    const scroll = message.substring(position);
    const titleText = spaces + scroll;
    document.title = titleText;
    const length = message.length;
    const speed = 50;
    if (direction === "forward") {
        if (position < length) {
            position++;
            window.setTimeout(() => {
                animateTitleText(position);
            }, speed);
        } else {
            direction = "backward";
            window.setTimeout(() => {
                animateTitleText(position);
            }, speed);
        }
    } else {
        if (position > 0) {
            position--;
            window.setTimeout(() => {
                animateTitleText(position);
            }, speed);
        } else {
            direction = "forward";
            window.setTimeout(() => {
                animateTitleText(position);
            }, speed);
        }
    }
}
animateTitleText(0);