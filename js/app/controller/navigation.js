define('app/controller/navigation', [], function() {
    'use strict';
    var NavigationController = function($scope, $location) {
        $scope.isActive = function(route) {
            return route === $location.path();
        }
    };
    NavigationController.$inject=['$scope', '$location'];
    return NavigationController;
});