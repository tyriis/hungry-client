define('app/controller/contact', [], function() {
    'use strict';
    var ContactController = function($scope) {
        $scope.contacts = ["hi@email.com", "hello@email.com"];

        $scope.add = function() {
            $scope.contacts.push($scope.contact);
            $scope.contact = "";
        }
    };
    ContactController.$inject=['$scope'];
    return ContactController;
});