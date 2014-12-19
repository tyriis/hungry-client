require.config({
    paths: {
        'angular': 'lib/angular/angular',
        'jquery': 'lib/jquery/jquery',
        'bootstrap' :  'lib/bootstrap/js/bootstrap.amd',
        'lodash' : 'lib/lodash/lodash',
        'angular-de' : 'lib/angular/angular-locale_de-de'
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

define('main', ['angular', 'angular-de', 'app/main'], function (ng, locale) {
    'use strict';
    ng.module("ngLocale", [], ["$provide", locale]);
    ng.bootstrap(document, ['app']);
});