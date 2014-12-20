define('app/controller/calendar', ['app/data', 'lodash'], function(data, _) {
    'use strict';
    var CalendarController = function($scope, $filter) {
        $scope.days = data.getWeekDays();
        $scope.next = function() {
            var day = _.clone(_.last($scope.days));
            day.setDate(day.getDate() + 1);
            $scope.days = data.getWeekDays(day);
        };
        $scope.prev = function() {
            var day = _.clone(_.first($scope.days));
            day.setDate(day.getDate() - 7);
            $scope.days = data.getWeekDays(day);
        };
        $scope.current = function() {
            $scope.days = data.getWeekDays();
        };
        $scope.isToday = function(day) {
            return $filter('date')(new Date(), 'fullDate') === $filter('date')(day, 'fullDate');
        }
    };
    CalendarController.$inject=['$scope', '$filter'];
    return CalendarController;
});