define('app/config', [], function() {
    'use strict';
    var config = function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'pages/welcome.html',
                controller: 'RouteController'
            })
            .when('/planing', {
                templateUrl: 'pages/planing.html',
                controller: 'RouteController'
            })
            .when('/cookbook', {
                templateUrl: 'pages/cookbook.html',
                controller: 'RouteController'
            })
            .when('/groceries', {
                templateUrl: 'pages/groceries.html',
                controller: 'RouteController'
            })
            .when('/404', {
                templateUrl: 'pages/404.html',
                controller: 'RouteController'
            })
            .otherwise({
                redirectTo: '/404'
            });
    };
    config.$inject=['$routeProvider'];
    return config;
});