'use strict';
angular.module('myApp.show', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/show/:ID', {
    templateUrl: 'views/show/showContact.html',
    controller: 'ShowCtrl'
  });
}])

.controller('ShowCtrl', function($scope, $location, $firebaseObject, $routeParams) {
  let contactRef = firebase.database().ref("contacts").child($routeParams.ID);
  let obj = new $firebaseObject(contactRef);
  contactRef.on('value', function(snapshot) {
    $scope.contact = snapshot.val();
  })
});
