'use strict';

app.sapper = (function () {
    //CHeck cell
    var init = function (args) {
        //1.Fill field
        app.battleField.fill(app.player.getLevel())
        //2.Set timer
        setTimer(app.player.getLevel());
    };
    //Choose level of game and set appropriate time
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
    //Process click on cell by rows and columns
    var onCellClicked = function (args) {
        //left click check cell and change in view and model
        if (args.mouseButtonType == 0) {

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
        //right click put flag 
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
        //Process empty cells by recursion ! need to realize
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