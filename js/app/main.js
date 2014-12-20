define('app/main', ['angular', 'app/config', 'app/controller/route', 'app/controller/calendar'], function(ng, config, RouteController, CalendarController) {
    'use strict';
    var app = ng.module('app', ['ngLocale', 'ngRoute']);
    app.config(config);
    app.controller('RouteController', RouteController);
    app.controller('CalendarController', CalendarController);
});