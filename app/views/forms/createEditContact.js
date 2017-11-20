'use strict';

angular.module('myApp.createEditContact', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts/new', {
    templateUrl: 'views/forms/contactForm.html',
    controller: 'EditContactCtrl'
  });
  $routeProvider.when('/contacts/edit/:ID', {
    templateUrl: 'views/forms/contactForm.html',
    controller: 'EditContactCtrl'
  });
}])

.controller('EditContactCtrl', function($scope, $location, $firebaseObject, $routeParams) {
  let contactListRef = firebase.database().ref("contacts");
  if ($routeParams.ID !== undefined){
    let contactRef = contactListRef.child($routeParams.ID);
    contactRef.on('value', function(snapshot) {
      $scope.name = snapshot.val()['name'];
      $scope.email = snapshot.val()['email'];
      $scope.mobile = snapshot.val()['mobile'];
      $scope.notes = snapshot.val()['notes'];
    });
  }

  $scope.cancel = function () {
    $location.path('/');
  }

  $scope.createEditContact = function () {
    let contactListRef = firebase.database().ref("contacts");
    if ($routeParams.ID === undefined)
      var contact = contactListRef.push();
    else
      var contact = contactListRef.child($routeParams.ID);
    let name = $scope.name;
    let email = $scope.email;
    let mobile = $scope.mobile;
    let notes = $scope.notes || "";
    contact.set({
      name: name,
      email: email,
      mobile: mobile,
      notes: notes
    });
    $location.path('/');
  }
});
