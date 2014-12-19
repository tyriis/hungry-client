define('app/controller/calendar', ['app/data', 'lodash'], function(data, _) {
    'use strict';
    var CalendarController = function($scope, $filter) {
        $scope.days = data.getWeekDays();
        $scope.next = function() {
            console.log('we are here');
            $scope.days = data.getWeekDays(_.last($scope.days));
        };
        $scope.isToday = function(day) {
            return $filter('date')(new Date(), 'fullDate') === $filter('date')(day, 'fullDate');
        }
    };
    CalendarController.$inject=['$scope', '$filter'];
    return CalendarController;
});