'use strict';
app.routeConfig = (function () {
    var gameBox = $('#game-box');

    return {
        loadMainMenu: function () {
            var that = this;

            $.ajax({
                type: 'GET',
                url: '/app/templates/main-menu.html',
                success: function (data) {
                    gameBox.empty();
                    gameBox.append(data);
                    $('#btn-play').click(function (event) {
                        that.loadAuthorizationTemplate();
                    });
                    $('#btn-rules').click(function (event) {
                        that.loadRulesTemplate();
                    });
                },
                error: that.showErrors
            })
        },

        loadAuthorizationTemplate: function () {
            var that = this;
            $.ajax({
                type: 'GET',
                url: '/app/templates/authorization.html',
                success: function (data) {
                    gameBox.empty();
                    gameBox.append(data);
                    $('#btn-start').click(function (event) {
                        that.loadGameFieldTemplate()
                    });
                },
                error: that.showErrors
            })
        },

        loadRulesTemplate: function () {
            var that = this;

            $.ajax({
                type: 'GET',
                url: '/app/templates/rules.html',
                success: function (data) {
                    gameBox.empty();
                    gameBox.append(data);
                    $('#btn-play-game').click(function (event) {
                        that.loadAuthorizationTemplate();
                    });
                },
                error: that.showErrors
            })
        },
        showErrors: function (error) {
            var message = $('<h1>Connection lost,try again</h1>'),
                btn = $('<button>reload</button>').click(function () {
                    this.loadMainMenu();
                });
            gameBox.empty();
            gameBox.append(message).append(btn);
        },
        loadGameFieldTemplate: function () {
            var that = this,
                url = '/app/templates/';

            var playerEventArgs = {
                playerName: $('#player-name').val()
            }

            //В зависимости от ввода взять нужный темплейт
            if ($('#newbie').prop('checked')) {
                url += 'small-field.html';
                playerEventArgs.level = 'newbie';
            } else if ($('#expierienced').prop('checked')) {
                url += 'medium-field.html';
                playerEventArgs.level = 'expierienced';
            } else if ($('#master').prop('checked')) {
                url += 'large-field.html';
                playerEventArgs.level = 'master';
            }

            $.ajax({
                type: 'GET',
                url: url,
                success: function (data) {
                    gameBox.empty();
                    gameBox.append(data);
                    //Запустить событие начала игры
                    mediator.publish(app.eventNames.gameStartEvent, playerEventArgs);
                },
                error: that.showErrors
            });
        },
        loadScoreBoardTemplate: function (args) {
            var that = app.routeConfig;
            setTimeout(function () {
                $.ajax({
                    type: 'GET',
                    url: '/app/templates/score-board.html',
                    success: function (data) {
                        gameBox.empty();
                        gameBox.append(data);
                        $('#play-again').click(function (event) {
                            that.loadAuthorizationTemplate();
                        });
                        $('#winner-name').append(args.name);
                        $('#score-info').append(args.score);
                    },
                    error: that.showErrors
                });
            }, 2000)
        }
    };
})();