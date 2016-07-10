'use strict'

app.gameEndListener = (function(){
    
    var fireGameEndEvent = function(args){
        mediator.publish(app.eventNames.gameEndEvent, args);
    };
    
    var onPlayerDead = function(args){
        fireGameEndEvent({
            name: app.player.getName(),
            score: app.player.getPoints()
        });
    };
    
    var onTimeIsOver = function(args){
        fireGameEndEvent({
            name: app.player.getName(),
            score: app.player.getPoints()
        });
    };
    
    var onWin = function(args){
        fireGameEndEvent({
            name: app.player.getName(),
            score: app.player.getPoints()
        });
    };
    
    return {
        onPlayerDead: onPlayerDead,
        onTimeIsOver: onTimeIsOver,
        onWin: onWin
    };
})();