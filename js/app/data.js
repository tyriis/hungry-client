define('app/data', ['lodash'], function(_) {
    return {
        getWeekDays: function(from) {
            if (from !== undefined) {
                from.setDate(from.getDate()+1)
            }
            var days = [from || new Date()];
            for (var i = 0; days.length < 8; i++) {
                var day = new Date;
                day.setDate(days[i].getDate() + 1);
                days.push(day);
            }
            return days;
        }
    };
});