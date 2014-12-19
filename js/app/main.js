define('app/main', ['angular', 'app/controller/contact'], function(ng, ContactController) {
    'use strict';
    var app = ng.module('app', []);
    app.controller('ContactController', ContactController);
});