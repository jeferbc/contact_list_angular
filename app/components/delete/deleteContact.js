'use strict';
angular.module('myApp.delete', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/delete/:ID', {
    resolve: {
      load: function($location, $routeParams){
        let contactRef = firebase.database().ref("contacts");
        let contact = contactRef.child($routeParams.ID);
        contact.remove();
        $location.path('/');
      }
    }
  });
}]);
