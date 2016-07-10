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
    
    //
    
    mediator.subscribe(app.eventNames.playerCreatedEvent,
                       app.sapper.init);
    mediator.subscribe(app.eventNames.cellClickedEvent,
                      app.sapper.onCellClicked);
    
    
    //
    mediator.subscribe(app.eventNames.battleFieldCreatedEvent,
                       app.controllers.battleFieldCtrl.initializeField);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //Load main menu
    app.routeConfig.loadMainMenu();
});