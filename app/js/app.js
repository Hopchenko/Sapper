'use strict'

$(function(){
    
    //config events
    
    //mediator.subscribe('',);
    mediator.subscribe(app.eventNames.timeTillTheEndEvent, function(eventArgs){
        console.log('i work!');
        console.log(eventArgs.timeTillTheEnd);
    });
    
    mediator.subscribe(app.eventNames.timeTillTheEndEvent,
                       app.controllers.statsPanelCtrl.showCurrentTime);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //Load main menu
    app.routeConfig.loadMainMenu();
});