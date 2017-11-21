'use strict';
angular.module('myApp.firebase', [])

.service('firebaseService', function($firebaseObject){
  return {
    createEditContact: function(contactData, id) {
      let contactListRef = firebase.database().ref("contacts");
      if (id === undefined)
        var contact = contactListRef.push();
      else
        var contact = contactListRef.child(id);
      contact.set({
        name: contactData.name,
        email: contactData.email,
        mobile: contactData.mobile,
        notes: contactData.notes || ""
      });
    },
    deleteContact: function(id) {
      let contactRef = firebase.database().ref("contacts");
      let contact = contactRef.child(id);
      contact.remove();
    }
  };
});
