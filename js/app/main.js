define('app/main',
    [
        'angular',
        'app/config',
        'app/controller/route',
        'app/controller/calendar',
        'app/directive/navigation'
    ], function(ng, config, RouteController, CalendarController, navigation) {
        'use strict';
        var app = ng.module('app', ['ngLocale', 'ngRoute']);
        app.config(config);
        app.directive('nav', navigation);
        app.controller('RouteController', RouteController);
        app.controller('CalendarController', CalendarController);

    }
);