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
                    
                    console.log(this);
                    
                    $('#btn-play').click(that.loadAuthorizationTemplate);
                    $('#btn-rules').click(that.loadRulesTemplate);
                },
                error: that.showErrors
            })
        },

        loadAuthorizationTemplate: function (event) {
            var that = this;
            $.ajax({
                type: 'GET',
                url: '/app/templates/authorization.html',
                success: function (data) {
                    gameBox.empty();
                    gameBox.append(data);
                },
                error: that.showErrors
            })
        },
////////SLOMANO
        loadRulesTemplate: function (event) {
            var that = this;
            $.ajax({
                type: 'GET',
                url: '/app/templates/rules.html',
                success: function (data) {
                    gameBox.empty();
                    gameBox.append(data);
                    $('#btn-play-game').click(that.loadAuthorizationTemplate);
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
                }
    };
})();