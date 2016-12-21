'use strict';

angular.module('app.menu', ['ngRoute', 'ui.bootstrap', 'app.core', 'app.user','app.profile','app.account'])
    .config(function ($routeProvider, $locationProvider) {
        //This (hashbang) is just because of Plunker!
        $locationProvider.html5Mode(false).hashPrefix('!');
    })


angular.module('app.core', []).provider('Menu', function () {
    var _menu = [];

    this.$get = function () {
        return {
            getItems: function () {
                return _menu;
            }
        };
    };

    this.add = function (item) {
        _menu.push(item);
    };
});

angular.module('app.user', ['app.core']).config(function ($routeProvider) {
})
    .config(function (MenuProvider) {

        MenuProvider.add({
            url: '#',
            title: 'Health app',
            type: 'brand'
        });
        MenuProvider.add({
            type: 'separator'
        });

        MenuProvider.add({
            url: '/turnos',
            title: 'Turnos',
            icon: 'glyphicon-plus',
            type: 'item'
        });

        MenuProvider.add({
            url: '/historia',
            title: 'Historia',
            icon: 'glyphicon-list-alt',
            type: 'item'
        });
        MenuProvider.add({
            type: 'separator'
        });
        MenuProvider.add({
            url: '/profile',
            title: 'Profile',
            icon: 'glyphicon-user',
            type: 'item'
        });
        MenuProvider.add({
            url: '/account',
            title: 'Account',
            icon: 'glyphicon-th-large',
            type: 'item'
        });
    })
    .controller('MenuController', function ($scope, Menu) {
        $scope.menu = Menu.getItems();
    })