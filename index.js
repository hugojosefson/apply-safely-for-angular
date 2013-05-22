// Uses $apply() if not already inside one invocation of it
angular.module("applySafely", []).value("applySafely", function (scope, func) {
    if (scope.$$phase) {
        func();
    } else {
        scope.$apply(func);
    }
});
