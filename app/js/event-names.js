'use strict';

app.eventNames = (function(){
    return {
        gameStartEvent: 'gameStartEvent',
        gameEndEvent: 'gameEndEvent',
        
        //
        cellClickedEvent: 'cellClickedEvent',
        //
        bombExplodedEvent: 'bombExplodedEvent',
        showSafeCellsEvent: 'showSafeCellsEvent',
        //time
        timeIsOverEvent: 'timeIsOverEvent',
        timeTillTheEndEvent: 'timeTillTheEndEvent',
        playerHitPointsOverEvent: 'playerHitPointsOverEvent',
    }
})();