'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'templates/main-menu.html'
        })
        .when('/rules', {
            templateUrl: 'templates/rules.html'
        })
        .when('/play-game', {
            templateUrl: 'templates/authorization.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

var playerModule = (function () {
    var playerName = 'player one',
        playerPoint = 0,
        playerLives = 3,
        playerLevel = 'newbie';
    return {
        setName: function (name) {
            playername = name;
        },
        getName: function () {
            return playerName;
        },
        setPoint: function (point) {
            playerPoint = point;
        },
        getPoint: function () {
            return playerPoint;
        },
        decreaseLives: function () {
            playerLives -= 1;
        },
        getLives: function () {
            return playerLives;
        },
        setLevel: function (level) {
            playerLevel = level;
        },
        getLevel: function () {
            return playerLevel;
        },
        resetPlayer: function () {
            playerName = 'player one';
            playerPoint = 0;
            playerLives = 3;
            playerLevel = 'newbie';
        }
    };
})();

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
})();

var fieldModule = (function(){
    var field = [];
    
    return {
        generateField: function(level) {
            if (level === 'newbie') {
                for(var i = 0; i < 9; i++) {
                    field.append(new Array(9))
                }
            } else if (level === 'expierienced') {
                for(var i = 0; i < 16; i++) {
                    field.append(new Array(16))
                }
            } else if (level === 'master') {
                for(var i = 0; i < 16; i++) {
                    field.append(new Array(32))
                }
            }
        }
    }
})();
