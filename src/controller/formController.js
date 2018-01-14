app.controller('formController', function($scope, $rootScope) {
    $scope.email = "xyz@gmail.com";
    $scope.submitForm = function(val) {
        $rootScope.$broadcast("onFormSubmit", { data: $scope.email });
    }
    $rootScope.$on("onResponse", function(event, args) {
        console.log(args.message);
    });
});