define('app/controller/route', [], function() {
    'use strict';
    var RouteController = function($scope, $routeParams) {
        $scope.param = $routeParams.param;
    };
    RouteController.$inject=['$scope', '$routeParams'];
    return RouteController;
});