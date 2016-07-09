'use strict';

var timerModule = (function () {
    var endGame = false,
        timeForGame = 0;
    return {
        setTime: function (level) {
            if (level === 'newbie') {
                timeForGame = 6;
                setTimeout(function () {
                    endGame = true;
                }, timeForGame * 1000);
            } else if (level === 'expierienced') {
                timeForGame = 1200;
                setTimeout(function () {
                    endGame = true;
                }, 1200 * 1000);
            } else if (level === 'master') {
                timeForGame = 1800;
                setTimeout(function () {
                    endGame = true;
                }, 1800 * 1000);
            }
            var intervalId = setInterval(function () {
                timeForGame -= 1;
                if (endGame) {
                    clearInterval(intervalId);
                }
            }, 1000);

        },
        resetTimer: function () {
            endGame = false;
            timeForGame = 0;
        },
        getEndGame: function () {
            return endGame;
        },
        getTimeForGame: function () {
            return timeForGame;
        },
        endGame: function () {
            endGame = true;
        }
    };
})()