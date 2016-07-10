'use strict';

app.controllers.battleFieldCtrl = (function () {
    var initializeField = function () {
        for (var row = 0; row < app.battleField.getHeight(); row++) {
            for (var column = 0; column <= app.battleField.getWidth(); column++) {
                var cell = $('#row' + row).children('#column' + column);
                cell.append(createEmptyPict());
            }
        }
    };

    var changeCell = function (options) {
        var cell = $('#row' + options.row).children('#column' + options.column);
        if (options.opened) {
            if (options.element == -1) {
                cell.html('<i class="fa fa-bomb" aria-hidden="true"></i>');
            } else if (options.element == 0) {
                cell.html('<i class="fa fa-square-o" aria-hidden="true"></i>');
            } else {
                cell.html(options.element);
            }
        } else if (options.marked) {
            var pict = $('<i></i>')
                .addClass('fa')
                .addClass('fa-flag-checkered')
                .attr('aria-hidden', 'true')
                .attr('oncontextmenu','return false;')
                .mousedown(function (event) {
                    var cellRow = $(event.target).parent().parent().attr('id').replace('row', '');
                    var cellColumn = $(event.target).parent().attr('id').replace('column', '');
                    var eventArgs = {
                        row: cellRow,
                        column: cellColumn,
                        mouseButtonType: event.button
                    }
                    mediator.publish(app.eventNames.cellClickedEvent, eventArgs)
                });
            cell.html(pict);
        } else {
            cell.html(createEmptyPict());
        }
    };


    var createEmptyPict = function () {
        var pict = $('<i></i>')
            .addClass('fa')
            .addClass('fa-gift')
            .attr('aria-hidden', 'true')        
            .attr('oncontextmenu','return false;')        
            .mousedown(function (event) {
                event.preventDefault();
                var cellRow = $(event.target).parent().parent().attr('id').replace('row', '');
                var cellColumn = $(event.target).parent().attr('id').replace('column', '');
                var eventArgs = {
                    row: cellRow,
                    column: cellColumn,
                    mouseButtonType: event.button
                }
                mediator.publish(app.eventNames.cellClickedEvent, eventArgs)
            });
        return pict;
    };
    
    var showAllBombs = function(){
        for (var row = 0; row < app.battleField.getHeight(); row++) {
            for (var column = 0; column < app.battleField.getWidth(); column++) {                
                if(app.battleField.isBombOn(row,column)){
                    var cell = $('#row' + row).children('#column' + column);
                cell.html('<i class="fa fa-bomb" aria-hidden="true"></i>');
                }              
            }
        }
    }

    return {
        initializeField: initializeField,
        changeCell: changeCell,
        showAllBombs: showAllBombs
    };
})();