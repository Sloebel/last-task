(function(){

    var app = angular.module('itemStore', ['ngSanitize']);

    app.run(function() {
        FastClick.attach(document.body);
    });

    app.controller('StoreController', ['$log','$scope','dataService', function($log, $scope, dataService) {

        //var store = this;
        //store.items = [];
        dataService.success(function(data) {
           $scope.items = data;
           $log.debug(data);
        });

        $scope.quantity = 1;


    }]);

})();
