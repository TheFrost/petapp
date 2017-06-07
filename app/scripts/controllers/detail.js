'use strict';

/**
 * @ngdoc function
 * @name petaloAppApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the petaloAppApp
 */
angular.module('petaloAppApp')
  .controller('DetailCtrl', ['$routeParams', 'productsFactory', function ($routeParams, productsFactory) {

    var detail = this;

    detail.content = {};

    activate();

    //////////////////////////////

    function activate() {
      var slug = $routeParams.slug;

      detail.content = productsFactory.getProduct(slug);
    }

  }]);
