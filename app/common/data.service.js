(function () {
    var app = angular.module('itemStore');

    app.factory('dataService', ['$log','$http', function ($log, $http) {
       // $log.debug('dataService');
        return  $http.get('data/items.json')
            .success(function (data) {
                return data;
            })
            .error(function (data) {
                $log.error(status, data);
            });
    }]);
}());