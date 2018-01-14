app.factory('responseFactory', function($q, $timeout, $http) {
    return {
        getUserDetais(email) {
            //return $http.get('http://127.0.0.1:8082/login');
            return $http({
                method: 'POST',
                url: 'http://127.0.0.1:8082/login',
                data: { id: email.toString() },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        }
    }
});