require.config({
    paths: {
        'angular': 'lib/angular/angular',
        'jquery': 'lib/jquery/jquery',
        'bootstrap' :  'lib/bootstrap/js/bootstrap.amd',
        'lodash' : 'lib/lodash/lodash',
        'angular-de' : 'lib/angular/angular-locale_de-de.amd',
        'angular-route' : 'lib/angular/angular-route.amd'
    },
    map: {
        '*': {
            'jquery': 'lib/jquery/jquery.amd.private'
        },
        'lib/jquery/jquery.amd.private': {
            'jquery': 'jquery'
        }
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'jquery': {
            exports: 'jQuery'
        }
    }
});

define('main', ['angular', 'angular-de', 'angular-route', 'app/main'], function (ng, locale) {
    'use strict';
    ng.module("ngLocale", [], ["$provide", locale]);
    ng.bootstrap(document, ['app']);
});