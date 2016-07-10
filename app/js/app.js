'use strict'

$(function(){
    
    //config events
      
    mediator.subscribe(app.eventNames.timeTillTheEndEvent,
                       app.controllers.statsPanelCtrl.showCurrentTime);
    mediator.subscribe(app.eventNames.playerCurrentScoreEvent,
                        app.controllers.statsPanelCtrl.showCurrentScore);
    mediator.subscribe(app.eventNames.gameStartEvent,
                       app.controllers.statsPanelCtrl.showCurrentPlayerName);
    mediator.subscribe(app.eventNames.playerCurrentHitPointsEvent,
                       app.controllers.statsPanelCtrl.showCurrentHitPoints);
    mediator.subscribe(app.eventNames.playerCreatedEvent,
                        app.controllers.statsPanelCtrl.initializePanel);
    
    //player
    
    mediator.subscribe(app.eventNames.playerCreatedEvent,
                       app.sapper.init);
    mediator.subscribe(app.eventNames.cellClickedEvent,
                      app.sapper.onCellClicked);
    mediator.subscribe(app.eventNames.bombExplodedEvent,
                      app.player.decreaseHitPoints);
    
    
    //
    mediator.subscribe(app.eventNames.battleFieldCreatedEvent,
                       app.controllers.battleFieldCtrl.initializeField);
    
    //end game
    
    mediator.subscribe(app.eventNames.playerHitPointsOverEvent,
                       app.gameEndListener.onPlayerDead);
    mediator.subscribe(app.eventNames.timeIsOverEvent,
                       app.gameEndListener.onTimeIsOver);
    mediator.subscribe(app.eventNames.gameWinEvent,
                       app.gameEndListener.onWin);
    mediator.subscribe(app.eventNames.gameWinEvent,
                       app.controllers.battleFieldCtrl.showAllBombs);
    
    //
    mediator.subscribe(app.eventNames.gameEndEvent,
                       app.routeConfig.loadScoreBoardTemplate);

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //Load main menu
    app.routeConfig.loadMainMenu();
});