'use strict';
//for evading syntax errors registrate there events
app.eventNames = (function(){
    return {
        //game
        gameStartEvent: 'gameStartEvent',
        gameEndEvent: 'gameEndEvent',
        gameWinEvent: 'gameWinEvent',
        //cell
        cellClickedEvent: 'cellClickedEvent',
        showSafeCellsEvent: 'showSafeCellsEvent',
        //bomb
        bombExplodedEvent: 'bombExplodedEvent',
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