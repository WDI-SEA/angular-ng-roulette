var app = angular.module("MyApp", []);
app.controller("MyController", ["$scope", function($scope) {
  $scope.message = "";
  $scope.clicks = 0;
  $scope.losses = 0;

  $scope.click = function() {
    $scope.clicks++;

    var choice = Math.random();
    if (choice < 1/6) {
      $scope.losses++;
      $scope.message = "BANG!";
    } else {
      $scope.message = "click";
    }
  };
}]);
