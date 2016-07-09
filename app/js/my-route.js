'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'templates/main-menu.html'
        })
        .when('/rules', {
            templateUrl: 'templates/rules.html'
        })
        .when('/play-game', {
            templateUrl: 'templates/authorization.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
