'use strict';

angular.module('myApp.contactForm', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts/new', {
    templateUrl: 'views/forms/contactForm.html',
    controller: 'FormContactCtrl'
  });
}])

.controller('FormContactCtrl', function($scope, $location, $firebaseObject) {
  $scope.cancel = function () {
    $location.path('/');
  }
  $scope.createContact = function () {
    let name = $scope.contact.name;
    let email = $scope.contact.email;
    let mobile = $scope.contact.mobile;
    let notes = $scope.contact.notes;
    let contactListRef = firebase.database().ref();
    let contact = contactListRef.push();
    contact.set({
      name: name,
      email: email,
      mobile: mobile,
      notes: notes
    });
    $location.path('/');
  }
});
