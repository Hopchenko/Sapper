'use strict';

app.player = (function () {
    var playerName = 'player one',
        playerPoints = 0,
        playerHitPoints = 3,
        playerLevel = 'newbie';
    //function avilable because of closure
    var setUpNewPlayer = function (args) {
        playerName = args.playerName || 'player one';
        playerLevel = args.level;
        playerHitPoints = 3;
        playerPoints = 0;
        var eventArgs  = {
            playerName: playerName,
            currentPlayerScore: playerPoints,
            currentHitPoints: playerHitPoints,
            playerLevel: playerLevel
        };
        mediator.publish(app.eventNames.playerCreatedEvent, eventArgs)
    };
    
    mediator.subscribe(app.eventNames.gameStartEvent, setUpNewPlayer);
    

    return {
        setName: function (name) {
            playername = name;
        },
        getName: function () {
            return playerName;
        },
        addPoints: function (points) {
            playerPoints += points;
            mediator.publish(app.eventNames.playerCurrentScoreEvent, { currentPlayerScore: playerPoints });
        },
        getPoints: function () {
            return playerPoints;
        },
        decreaseHitPoints: function () {
            playerHitPoints -= 1;
            mediator.publish(app.eventNames.playerCurrentHitPointsEvent, {currentHitPoints: playerHitPoints});
            if (playerHitPoints == 0) {
                mediator.publish(app.eventNames.playerHitPointsOverEvent, {
                    name: playerName,
                    score: playerPoints
                })
            }
        },
        getPlayerHitPoints: function () {
            return playerLives;
        },
        setLevel: function (level) {
            playerLevel = level;
        },
        getLevel: function () {
            return playerLevel;
        }
    };
})()