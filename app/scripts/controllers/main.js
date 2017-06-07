'use strict';

/**
 * @ngdoc function
 * @name petaloAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the petaloAppApp
 */
angular.module('petaloAppApp')
  .controller('MainCtrl', ['productsFactory', function (productsFactory) {

    var main = this;

    main.listProducts = [];

    activate();

    ////////////////////////////

    function activate () {
      main.listProducts = productsFactory.getAllProducts();
    }

  }]);
