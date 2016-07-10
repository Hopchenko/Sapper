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



        if (args.mouseButtonType == 0) {
            //Рекурсивная проверка клеток
            var cellsToChange = handleCell(args.row, args.column);

            for (var i = 0; i < cellsToChange.length; i++) {
                var options = {
                    opened: true,
                    row: cellsToChange[i].row,
                    column: cellsToChange[i].column,
                    element: app.battleField.getCell(cellsToChange[i].row, cellsToChange[i].column).value
                };
                
                app.battleField.open(cellsToChange[i].row, cellsToChange[i].column);
                app.player.addPoints(10 * options.element + 10);
                app.controllers.battleFieldCtrl.changeCell(options);
            }

        } else if (args.mouseButtonType == 2) {
            var options = {
                row: args.row,
                column: args.column,
                element: app.battleField.getCell(args.row, args.column).value,
                opened: false
            };

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

    var handleCell = function (row, column) {
        var cellsToChange = [{
            row: row,
            column: column
        }];

        var reqFunc = function () {

        }
        reqFunc();
        return cellsToChange;
    };

    return {
        init: init,
        onCellClicked: onCellClicked,
    };
})();