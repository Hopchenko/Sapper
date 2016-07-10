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
            column: args.column,
            element: app.battleField.getCell(args.row, args.column).value,
        };
        
        
        if (args.mouseButtonType == 1) {
            options.opened = true;
            app.battleField.open(args.row, args.column);
            app.player.addPoints(10 * options.element + 10);
        } else if (args.mouseButtonType == 3) {
            options.opened = false;
            if (app.battleField.getCell(args.row, args.column).marked) {
                app.battleField.unmark(args.row, args.column);
                options.marked = false;
            } else {
                app.battleField.mark(args.row, args.column);
                options.marked = true;
            };
        }
        app.controllers.battleFieldCtrl.changeCell(options);
    };

    return {
        init: init,
        onCellClicked: onCellClicked,
    };
})();