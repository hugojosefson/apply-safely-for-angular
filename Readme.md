# apply-safely-for-angular

  Calls `fn` with or without `scope.$apply()`, depending on if current thread is already inside `$apply()`. For AngularJS.

## Installation

    $ component install hugojosefson/apply-safely-for-angular

## API

    require("applySafely");

    // Example use
    angular.module("yourModule", []).controller("yourController", function($scope, applySafely) {

      someNonAngularCodeWhichCallsBack("params", function callback(result) {
        applySafely($scope, function() {
          $scope.result = result;
        });
      });

    }); 

## License

  MIT
