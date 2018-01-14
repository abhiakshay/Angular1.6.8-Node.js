app.controller('responseController', function($scope, $rootScope, responseFactory) {

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

});