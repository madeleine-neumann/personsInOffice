// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require angular

angular.module('userInOffice', [])
  .controller('UsersCtrl', function($scope, $http){
    $http.get('/users.json').then(function(usersResponse){
      console.log(usersResponse.data)
      $scope.users = usersResponse.data
    })

    $scope.togglePresent = function(user){
      user.present = !user.present;
      $http.put('/users/' + user.id + '.json', { user: { present: user.present } } );
    }
  });