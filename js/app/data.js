define('app/data', ['lodash'], function(_) {
    return {
        getWeekDays: function(from) {
            var days = [from || new Date()];
            while (days.length < 7) {
                var day = _.clone(days[days.length - 1]);
                day.setDate(day.getDate() + 1);
                days.push(day);
            }
            return days;
        },
        navigation: [
            {
                name: 'planing',
                url: '/planing'
            },
            {
                name: 'cookbook',
                url: '/cookbook'
            },
            {
                name: 'groceries',
                url: '/groceries'
            }
        ],
        groups: [
            {
                name: 'meat'
            },
            {
                name: 'cake'
            },
            {
                name: 'soup'
            }
        ],
        recipes: [
            {
                "title": "Onion Soup",
                "info": {
                    "blurb": "blabla",
                    "author": "user24",
                    "yield": "8 Servings"
                },
                "indregients": [
                    {
                        "quantity": 1,
                        "unit": "deca",
                        "item": "butter or oil"
                    },
                    {
                        "quantity": 1,
                        "unit": "cloves",
                        "item": "garlic"
                    }
                ],
                "preparation": "this is how you can make this delicious bla bla....",
                "serving": "some more instructions for the serving",
                "notes": "and here the notes",
                "groups": ["soup"]
            },
            {
                "title": "Apple pie",
                "info": {
                    "blurb": "blabla",
                    "author": "user24",
                    "yield": "8 Servings"
                },
                "indregients": [
                    {
                        "quantity": 1,
                        "unit": "deca",
                        "item": "butter or oil"
                    },
                    {
                        "quantity": 1,
                        "unit": "cloves",
                        "item": "garlic"
                    }
                ],
                "preparation": "this is how you can make this delicious bla bla....",
                "serving": "some more instructions for the serving",
                "notes": "and here the notes",
                "groups": ["cake", "dessert"]
            }
        ]
    };
});