'use strict'

app.controllers.statsPanelCtrl = (function(){
    return {
        showCurrentTime: function(args) {
            
            if(args.timeTillTheEnd < 0){
                args.timeTillTheEnd = 0;
            }
            
            $('#time-info').text(' : ' + args.timeTillTheEnd);
        },
        showCurrentScore: function (args) {
            $('#score-info').text(' : ' );
        },
        showCurrentBombQuantity: function (args) {
            $('#bombs-info').text(' : ' );
        },
        showCurrentHitPoints: function(args) {
            $('#live-info').text(' : ' );
        },
        showCurrentPlayerName: function(args) {
            $('#player-info').text(' ');
        }
    };
})();