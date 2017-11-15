'use strict';
angular.module('myApp.home', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function($scope, $firebaseObject, $location) {
  let contactListRef = firebase.database().ref("contacts");
  let obj = new $firebaseObject(contactListRef);
  contactListRef.on('value', function(snapshot) {
    $scope.contactList = [];
    snapshot.forEach(function(childSnapshot) {
      let key = childSnapshot.key;
      var contact = childSnapshot.val();
      contact["id"] = key
      $scope.contactList.push(contact);
    });
  })
});
