require.config({
    paths: {
        'angular': 'lib/angular/angular',
        'angular-de' : 'lib/angular/angular-locale_de-de.amd',
        'angular-route' : 'lib/angular/angular-route.amd',
        'jquery': 'lib/jquery/jquery',
        'bootstrap' :  'lib/bootstrap/js/bootstrap.amd',
        'lodash' : 'lib/lodash/lodash'
    },
    map: {
        '*': {
            'jquery': 'lib/jquery/jquery.amd.private',
            'lodash': 'lib/lodash/lodash.amd.private'
        },
        'lib/jquery/jquery.amd.private': {
            'jquery': 'jquery'
        },
        'lib/lodash/lodash.amd.private': {
            'lodash': 'lodash'
        }
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'jquery': {
            exports: 'jQuery'
        },
        'lodash': {
            exports: '_'
        }
    }
});

define('main', ['angular', 'angular-de', 'angular-route', 'app/main'], function (ng, locale) {
    'use strict';
    ng.module("ngLocale", [], ["$provide", locale]);
    ng.bootstrap(document, ['app']);
});