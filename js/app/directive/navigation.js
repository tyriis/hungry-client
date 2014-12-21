define('app/directive/navigation', ['app/controller/navigation'], function(NavigationController) {
    'use strict';
    return function() {
        return {
            restrict: "E",
            templateUrl: "tpl/navigation.html",
            controller: NavigationController
        };
    };
});