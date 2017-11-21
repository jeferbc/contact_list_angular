'use strict';

angular.module('myApp.createEditContact', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts/new', {
    templateUrl: 'components/forms/contactForm.html',
    controller: 'EditContactCtrl'
  });
  $routeProvider.when('/contacts/edit/:ID', {
    templateUrl: 'components/forms/contactForm.html',
    controller: 'EditContactCtrl'
  });
}])

.controller('EditContactCtrl', function($scope, $location, $routeParams, firebaseService) {
  if ($routeParams.ID !== undefined){
    let contactListRef = firebase.database().ref("contacts");
    let contactRef = contactListRef.child($routeParams.ID);
    contactRef.on('value', function(snapshot){
      $scope.contact = snapshot.val();
    })
  }

  $scope.cancel = function () {
    $location.path('/');
  }

  $scope.createEditContact = function () {
    firebaseService.createEditContact($scope.contact, $routeParams.ID);
    $location.path('/');
  }
});
