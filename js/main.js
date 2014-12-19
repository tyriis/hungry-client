require.config({
    paths: {
        'angular': 'lib/angular/angular',
        'jquery': 'lib/jquery/jquery',
        'bootstrap' :  'lib/bootstrap/js/bootstrap.amd',
        'lodash' : 'lib/lodash/lodash'
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

define('main', ['angular', 'jquery', 'lodash', 'bootstrap', 'app/main'], function (ng, $, _, bs) {
    'use strict';
    console.log('Require version ' + requirejs.version);
    console.log('Angular version: ' + ng.version.full);
    console.log('jQuery version: ' + $.fn.jquery);
    console.log('Bootstrap version: ' +  bs.version);
    console.log('Lodash version: ' + _.VERSION);
    ng.bootstrap(document, ['app']);
});