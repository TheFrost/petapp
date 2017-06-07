'use strict';

/**
 * @ngdoc overview
 * @name petaloAppApp
 * @description
 * # petaloAppApp
 *
 * Main module of the application.
 */
angular
  .module('petaloAppApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/detalle/:slug', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl',
        controllerAs: 'detail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
