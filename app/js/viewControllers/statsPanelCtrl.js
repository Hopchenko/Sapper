'use strict'

app.controllers.statsPanelCtrl = (function () {

    var showCurrentTime = function (args) {
        $('#time-info').html('<i class="fa fa-clock-o" ></i> : ' + args.timeTillTheEnd);
    };
    var showCurrentScore = function (args) {
        $('#score-info').html('<i class="fa fa-copyright" ></i> : ' + args.currentPlayerScore);
    };
    var showCurrentBombQuantity = function (args) {
        $('#bombs-info').html('<i class="fa fa-bomb" ></i> : ');
    };
    var showCurrentHitPoints = function (args) {
        $('#live-info').html('<i class="fa fa-heart" ></i> : ' + args.currentHitPoints);
    };
    var showCurrentPlayerName = function (args) {

        var lbl = $('#panel-player-name');
        
        //dont work for default name !need to fix
        //lbl.empty();
        lbl.text(args.playerName);
        

    };
    var initializePanel = function (args) {
        showCurrentPlayerName(args);
        showCurrentScore(args);
        showCurrentHitPoints(args);
    }
    return {
        showCurrentTime: showCurrentTime,
        showCurrentScore: showCurrentScore,
        showCurrentBombQuantity: showCurrentBombQuantity,
        showCurrentHitPoints: showCurrentHitPoints,
        showCurrentPlayerName: showCurrentPlayerName,
        initializePanel: initializePanel
    };
})();