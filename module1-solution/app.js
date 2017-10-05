(function() {
    'use strict';

    angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);
    LunchCheckController.$inject = ["$scope"];

    function LunchCheckController($scope) {
        $scope.lunchItems = "";
        $scope.check = function() {
            if ($scope.lunchItems !== "") {
                console.log("not empty");
                var itemArray = $scope.lunchItems.split(",");
                if (itemArray.length > 3) {
                    $scope.message = "Too much!";
                }
                else {
                    $scope.message = "Enjoy!";
                }
            }
            else {
                console.log("empty");
                $scope.message = "Please enter data first.";
            }
        }
    }
})();