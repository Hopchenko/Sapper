'use strict';

app.sapper = (function () {
    //CHeck cell
    var init = function (args) {
        //1. заполнить поле
        app.battleField.fill(app.player.getLevel())
            //2.Запустить таймер
        setTimer(app.player.getLevel());
    };

    var setTimer = function (level) {
        if (level === 'newbie') {
            app.timer.setTime(600)
        } else if (level === 'expierienced') {
            app.timer.setTime(1200)
        } else if (level === 'master') {
            app.timer.setTime(1800)
        }

        app.timer.start();
    };
    //Обрабатывает нажатие на ячейку
    var onCellClicked = function (args) {
        var options = {
            row: args.row,
            column: args.column
        }
        if (args.mouseButtonType == 1){
            //
        } else if ( args.mouseButtonType == 3){
           // 
        }
        app.controllers.battleFieldCtrl.changeCell(options);
    };
    var leftButtonClick = function(){
        
    };
    var rightButtonClick = function(){
        
    };

    return {
        init: init,
        onCellClicked: onCellClicked,
    };
})();