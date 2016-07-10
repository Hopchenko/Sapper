'use strict';

app.timer = (function () {
    var timeIsOver = true,
        time = 0;
    return {
        //time measured in seconds
        setTime: function (num) {
            if (typeof num !== 'number') {
                throw new TypeError();
            }
            time = num;
            timeIsOver = false;
        },
        start: function () {
            if (time === 0) return;
            var that = this;
            var intervalId = setInterval(function () {
                if (timeIsOver || time === 0) {
                    //broadcast event for end game
                    mediator.publish(app.eventNames.timeIsOverEvent, null);
                    clearInterval(intervalId);
                    that.reset();
                    return;
                }
                time -= 1;
                mediator.publish(app.eventNames.timeTillTheEndEvent, {
                    timeTillTheEnd: time
                });
            }, 1000);
        },
        reset: function () {
            timeIsOver = true;
            time = 0;
        }
    };
})()