'use strict';

app.eventNames = (function(){
    return {
        gameStartEvent: 'gameStartEvent',
        gameEndEvent: 'gameEndEvent',
        gameWinEvent: 'gameWinEvent',
        
        //
        cellClickedEvent: 'cellClickedEvent',
        //
        bombExplodedEvent: 'bombExplodedEvent',
        showSafeCellsEvent: 'showSafeCellsEvent',
        //time
        timeIsOverEvent: 'timeIsOverEvent',
        timeTillTheEndEvent: 'timeTillTheEndEvent',
        //player
        playerHitPointsOverEvent: 'playerHitPointsOverEvent',
        playerCurrentScoreEvent: 'playerCurrentScoreEvent',
        playerCurrentHitPointsEvent: 'playerCurrentHitPointsEvent',
        playerCreatedEvent: 'playerCreatedEvent',
        
        //battleField
        battleFieldCreatedEvent: 'battleFieldCreatedEvent'
    }
})();