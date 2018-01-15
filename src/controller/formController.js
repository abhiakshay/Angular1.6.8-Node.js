app.controller('formController', function($scope, $rootScope) {
    $scope.email = "";
    $scope.submitForm = function(val) {
        $rootScope.$broadcast("onFormSubmit", { data: val });
    }
    $rootScope.$on("onResponse", function(event, args) {
        console.log(args.message);
    });
});