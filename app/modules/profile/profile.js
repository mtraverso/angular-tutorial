'use strict';

angular.module('app.profile', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'modules/profile/profile.html',
    controller: 'ProfileController'
  });
}])

.controller('ProfileController', [function() {

}]);