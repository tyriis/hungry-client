define('app/config', [], function() {
    'use strict';
    var config = function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'page/welcome.html',
                controller: 'RouteController'
            })
            .when('/planing', {
                templateUrl: 'page/planing.html',
                controller: 'RouteController'
            })
            .when('/cookbook', {
                templateUrl: 'page/cookbook.html',
                controller: 'RouteController'
            })
            .when('/groceries', {
                templateUrl: 'page/groceries.html',
                controller: 'RouteController'
            })
            .when('/404', {
                templateUrl: 'page/404.html',
                controller: 'RouteController'
            })
            .otherwise({
                redirectTo: '/404'
            });
    };
    config.$inject=['$routeProvider'];
    return config;
});