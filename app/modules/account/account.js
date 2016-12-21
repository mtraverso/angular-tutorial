'use strict';

angular.module('app.account', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/account', {
    templateUrl: 'modules/account/account.html',
    controller: 'AccountController'
  });
}])

.controller('AccountController', [function() {

}]);