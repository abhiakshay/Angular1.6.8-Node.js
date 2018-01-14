let app = angular.module('node-angular', []);
app.controller("appController", ["$scope", function($scope) {
    $scope.email = "";
    $scope.myStyle = {
        "color": "green",
        "font-weight": "bold"
    }
}]);
app.controller('formController', ["$scope", "$rootScope", function($scope, $rootScope) {
    $scope.email = "xyz@gmail.com";
    $scope.submitForm = function(val) {
        $rootScope.$broadcast("onFormSubmit", { data: $scope.email });
    }
    $rootScope.$on("onResponse", function(event, args) {
        console.log(args.message);
    });
}]);
app.controller('responseController', ["$scope", "$rootScope", "responseFactory", function($scope, $rootScope, responseFactory) {

    /*
        (function() {
            return $q(function(resolve, reject) {
                $timeout(function() {
                    resolve('success');
                }, 2000);
            });
        })().then(function() {
            $scope.response = responseFactory.getUserDetais();
            $scope.responseReceived = true;
        });

        */


    $rootScope.$on("onFormSubmit", function(event, args) {
        responseFactory.getUserDetais(args.data).then(function(res) {
            $scope.response = res.data;
            $scope.responseReceived = true;
            $rootScope.$emit('onResponse', { message: "data received" });
        });
    });

}]);
app.directive('replaceContent', function() {
    return {
        require: 'ngInclude',
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.replaceWith(element.children());
        }
    }
});
