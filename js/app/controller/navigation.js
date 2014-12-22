define('app/controller/navigation', ['app/data'], function(data) {
    'use strict';
    var NavigationController = function($scope, $location) {
        $scope.items = data.navigation;
        $scope.isActive = function(item) {
            return item.url === $location.path();
        }
    };
    NavigationController.$inject=['$scope', '$location'];
    return NavigationController;
});