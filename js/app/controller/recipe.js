define('app/controller/recipe', ['app/data', 'lodash'], function(data, _) {
    'use strict';
    var RecipeController = function($scope) {
        $scope.groups = data.groups;
        $scope.addGroup = function() {
            $scope.groups.push(
                {
                    name: $scope.group
                }
            );
            $scope.group = "";
        };
        $scope.selectedGroup = undefined;
        $scope.filterByGroup = function(group) {
            $scope.selectedGroup = group;
            $scope.recipe = undefined;
        };
        $scope.recipes = data.recipes;
        $scope.isVisible = function(recipe) {
            if (!$scope.selectedGroup || $scope.recipe) {
                return false;
            }
            return _.indexOf(recipe.groups, $scope.selectedGroup.name) > -1;
        };
        $scope.numRecipes = function(group) {
            var count = 0;
            _.forEach($scope.recipes, function(recipe) {
                if (_.indexOf(recipe.groups, group.name) > -1) {
                    count++;
                }
            });
            return count;
        };
        $scope.setRecipe = function(recipe) {
            $scope.recipe = $scope.recipes[recipe];
            $scope.editIndex = recipe;
        };
        $scope.storeRecipe = function(recipe) {

        }
    };
    RecipeController.$inject=['$scope'];
    return RecipeController;
});