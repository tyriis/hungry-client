define('app/main', ['angular', 'app/controller/calendar'], function(ng, CalendarController) {
    'use strict';
    var app = ng.module('app', ["ngLocale"]);
    app.controller('CalendarController', CalendarController);
});