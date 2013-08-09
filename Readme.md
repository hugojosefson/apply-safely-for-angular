# apply-safely-for-angular

  Calls `fn` with or without `scope.$apply()`, depending on if current thread is already inside `$apply()`. For AngularJS.

## Installation

### As a [component](https://github.com/component/component)

    $ component install hugojosefson/apply-safely-for-angular

### With [Bower](http://bower.io/)

    $ bower install hugojosefson-apply-safely-for-angular

## API

    require('apply-safely-for-angular');

    // Example use
    angular.module("yourModule", ["applySafely"]).controller("yourController", function($scope, applySafely) {

      someNonAngularCodeWhichCallsBack("params", function callback(result) {
        applySafely($scope, function() {
          $scope.result = result;
        });
      });

    }); 

## License

  MIT
