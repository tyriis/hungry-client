define('app/main',
    [
        'angular',
        'app/config',
        'app/controller/route',
        'app/controller/navigation',
        'app/controller/calendar'
    ], function(ng, config, RouteController, NavigationController, CalendarController) {
        'use strict';
        var app = ng.module('app', ['ngLocale', 'ngRoute']);
        app.config(config);
        app.controller('RouteController', RouteController);
        app.controller('NavigationController', NavigationController);
        app.controller('CalendarController', CalendarController);
    }
);