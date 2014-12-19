define('app/data', ['lodash'], function(_) {
    return {
        getWeekDays: function(from) {
            if (from !== undefined) {
                from.setDate(from.getDate() + 1)
            }
            var days = [from || new Date()];
            while (days.length < 7) {
                var day = _.clone(days[days.length - 1]);
                day.setDate(day.getDate() + 1);
                days.push(day);
            }
            return days;
        }
    };
});