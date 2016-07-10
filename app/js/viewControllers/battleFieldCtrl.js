'use strict';

app.controllers.battleFieldCtrl = (function () {    
    var initializeField = function () {
        for (var row = 0; row < app.battleField.getHeight(); row++) {
            for (var column = 0; column <= app.battleField.getWidth(); column++) {
                var cell = $('#row' + row).children('#column' + column);
                
                var pict = $('<i></i>')
                    .addClass('fa')
                    .addClass('fa-gift')
                    .attr('aria-hidden', 'true')
                    .click(function (event) {
                        var cellRow = $(event.target).parent().parent().attr('id').replace('row', '');
                        var cellColumn = $(event.target).parent().attr('id').replace('column', '');
                        var eventArgs = {
                            row: cellRow,
                            column: cellColumn,
                            mouseButtonType:event.which
                        }
                        mediator.publish(app.eventNames.cellClickedEvent, eventArgs)
                    });
                cell.append(pict);
            }
        }
    };
    
    var changeCell = function(options){
        
    };

    return {
        initializeField: initializeField,
        changeCell: changeCell
    };
})();