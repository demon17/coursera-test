(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.message = "";

    $scope.hasTooMuch = function () {
      $scope.message = calculateLunches($scope.lunch)
    };

    function calculateLunches(stringToSplit) {
        var separator = ',';
        var arrayOfStrings = stringToSplit.split(separator);
        var lunchNumber = arrayOfStrings.length;
        if (lunchNumber <= 1 && arrayOfStrings[0] == "") {
            return 'Empty';
        }
        if (lunchNumber < 4) {
            return 'Enjoy!';
        } else {
            return 'Too much!';
        }
    }
  }

})();
