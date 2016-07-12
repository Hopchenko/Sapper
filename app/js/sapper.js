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

            console.log('args row: ' + args.row);
            console.log('args column  :' + args.column)

            var options = {
                opened: true,
                row: args.row,
                column: args.column,
                element: app.battleField.getCell(args.row, args.column).value
            };

            function openPict(r, c) {
                app.battleField.open(r, c);
                app.player.addPoints(10 * options.element + 10);
                app.controllers.battleFieldCtrl.changeCell(options);
            }

            function changeCell(row, column, arr) {
                if (row < 0 || column < 0 || row >= arr.length || column >= arr[0].length) {
                    return;
                }

                if (arr[row][column].opened) {
                    return;
                }

                if (arr[row][column].value == -1) {
                    openPict(row, column);
                    return;
                }
                if (arr[row][column].value >= 1) {
                    openPict(row, column);
                    return;
                }
                openPict(row,column)
                if (arr[row][column].value == 0) {
                    options.row = row;
                    options.column = column;
                    options.opened = true;
                    options.element = app.battleField.getCell(row, column).value
                    openPict(row, column)
                    changeCell(row - 1, column - 1, arr); // step up left
                    changeCell(row + 1, column - 1, arr); // step up right
                    changeCell(row - 1, column + 1, arr); // step down left
                    changeCell(row + 1, column + 1, arr); // step down right
                    changeCell(row + 1, column, arr); // step right
                    changeCell(row - 1, column, arr); // step left
                    changeCell(row, column + 1, arr); // step down
                    changeCell(row, column - 1, arr); // step up

                }
            }

            changeCell(args.row, args.column, app.battleField.field);

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

    return {
        init: init,
        onCellClicked: onCellClicked,
    };
})();