'use strict';
angular.module('myApp.delete', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/delete/:ID', {
    resolve: {
      load: function($location, $routeParams, firebaseService){
        firebaseService.deleteContact($routeParams.ID);
        $location.path('/');
      }
    }
  });
}]);
