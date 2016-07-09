'use strict';

var player = (function () {
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
})()