$.fn.sakura = function (options) {
    const settings = $.extend(
        {
            blowAnimations: [
                "blow-soft-left",
                "blow-medium-left",
                "blow-hard-left",
                "blow-soft-right",
                "blow-medium-right",
                "blow-hard-right",
            ],
            className: "sakura",
            fallSpeed: 1,
            maxSize: 14,
            minSize: 9,
            newOn: 300,
            swayAnimations: [
                "sway-0",
                "sway-1",
                "sway-2",
                "sway-3",
                "sway-4",
                "sway-5",
                "sway-6",
                "sway-7",
                "sway-8",
            ],
        },
        options
    );

    const $body = $("body").css("overflow-x", "hidden");
    const $sakura = $("<div />").addClass(settings.className).appendTo($body);
    const screenHeight = $(window).height();
    const screenWidth = $(window).width();

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function createSakura() {
        const blowAnim =
            settings.blowAnimations[
            randomIntFromInterval(0, settings.blowAnimations.length - 1)
            ];
        const swayAnim =
            settings.swayAnimations[
            randomIntFromInterval(0, settings.swayAnimations.length - 1)
            ];
        const size = randomIntFromInterval(settings.minSize, settings.maxSize);
        const left = Math.random() * screenWidth - 100;
        const top = -(20 * Math.random() + 15);
        const fallTime =
            (Math.round(0.007 * screenHeight) + 5 * Math.random()) *
            settings.fallSpeed;
        const animTime = fallTime > 30 ? fallTime : 30;
        const animation = `fall ${fallTime}s linear 0s 1, ${blowAnim} ${animTime - 20 + randomIntFromInterval(0, 20)
            }s linear 0s infinite, ${swayAnim} ${randomIntFromInterval(
                2,
                4
            )}s linear 0s infinite`;

        $sakura.clone().css({
            "-webkit-animation": animation,
            "-moz-animation": animation,
            "-ms-animation": animation,
            "-o-animation": animation,
            animation: animation,
            height: size,
            width: size,
            left: left,
            marginTop: top,
        })
            .appendTo($body)
            .one("animationend", function () {
                $(this).remove();
            });

        setTimeout(createSakura, settings.newOn);
    }

    createSakura();
};
