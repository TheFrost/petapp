'use strict';

/**
 * @ngdoc service
 * @name petaloAppApp.productsFactory
 * @description
 * # productsFactory
 * Factory in the petaloAppApp.
 */
angular.module('petaloAppApp')
  .factory('productsFactory', function () {

    var products = [
      {
        id: 0,
        slug: 'ultra-care',
        title: 'Ultra Care',
        extract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum?',
        backgroundColor: '#27bcb5',
        properties: [
          {
            icon: 'vitaminae',
            text: 'Vitamina E'
          },
          {
            icon: 'coco',
            text: 'Coco'
          }
        ],
        presentations: [
          {
            text: '4\'s',
            iconNav: 'single-paper',
            artId: '4',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum?',
            stores: [
              'Walmart',
              'Bodega Aurrera',
              'Almacenes Zaragoza',
              'Amazon',
              'Comercial Mexicana',
              'HEB',
              'Soriana'
            ]
          },
          {
            text: '18\'s',
            iconNav: 'single-paper',
            artId: '18',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum?',
            stores: [
              'Almacenes Zaragoza',
              'Amazon',
              'Comercial Mexicana',
              'HEB',
              'Soriana'
            ]
          },
          {
            text: '32\'s',
            iconNav: 'single-paper',
            artId: '32',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum?',
            stores: [
              'Almacenes Zaragoza',
              'Amazon',
              'Comercial Mexicana'
            ]
          },
          {
            text: '40\'s',
            iconNav: 'single-paper',
            artId: '40',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum?',
            stores: [
              'Walmart',
              'Bodega Aurrera',
              'HEB',
              'Soriana'
            ]
          },
          {
            text: '40\'s Sábila',
            iconNav: 'single-paper-sabila',
            artId: '40-sabila',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum?',
            stores: [
              'Walmart',
              'Bodega Aurrera',
              'Almacenes Zaragoza',
              'Amazon'
            ]
          },
        ],
      },
      {
        id: 1,
        slug: 'rendimax',
        title: 'Rendimax',
        extract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum?',
        backgroundColor: '#e5354e',
        properties: [
          {
            icon: 'vitaminae',
            text: 'Vitamina E'
          },
          {
            icon: 'aloe',
            text: 'Aloe'
          }
        ],
        presentations: [
          {
            text: '4\'s',
            iconNav: 'single-paper',
            artId: '4',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum?',
            stores: [
              'Walmart',
              'Bodega Aurrera',
              'Almacenes Zaragoza',
              'Amazon',
              'Comercial Mexicana',
              'HEB',
              'Soriana'
            ]
          },
          {
            text: '18\'s',
            iconNav: 'single-paper',
            artId: '18',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum?',
            stores: [
              'Almacenes Zaragoza',
              'Amazon',
              'Comercial Mexicana',
              'HEB',
              'Soriana'
            ]
          },
          {
            text: '32\'s',
            iconNav: 'single-paper',
            artId: '32',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum?',
            stores: [
              'Almacenes Zaragoza',
              'Amazon',
              'Comercial Mexicana'
            ]
          },
          {
            text: '40\'s',
            iconNav: 'single-paper',
            artId: '40',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum?',
            stores: [
              'Walmart',
              'Bodega Aurrera',
              'HEB',
              'Soriana'
            ]
          },
          {
            text: '40\'s Sábila',
            iconNav: 'single-paper-sabila',
            artId: '40-sabila',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum?',
            stores: [
              'Walmart',
              'Bodega Aurrera',
              'Almacenes Zaragoza',
              'Amazon'
            ]
          },
        ],
      },
      {
        id: 1,
        slug: 'ultra-resistente',
        title: 'Ultra Resistente',
        extract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum?',
        backgroundColor: '#0a1a72',
        properties: [
          {
            icon: 'vitaminae',
            text: 'Vitamina E'
          }
        ],
        presentations: [
          {
            text: '4\'s',
            iconNav: 'single-paper',
            artId: '4',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum?',
            stores: [
              'Walmart',
              'Bodega Aurrera',
              'Almacenes Zaragoza',
              'Amazon',
              'Comercial Mexicana',
              'HEB',
              'Soriana'
            ]
          },
          {
            text: '18\'s',
            iconNav: 'single-paper',
            artId: '18',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum?',
            stores: [
              'Almacenes Zaragoza',
              'Amazon',
              'Comercial Mexicana',
              'HEB',
              'Soriana'
            ]
          },
          {
            text: '32\'s',
            iconNav: 'single-paper',
            artId: '32',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum?',
            stores: [
              'Almacenes Zaragoza',
              'Amazon',
              'Comercial Mexicana'
            ]
          },
          {
            text: '40\'s',
            iconNav: 'single-paper',
            artId: '40',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum?',
            stores: [
              'Walmart',
              'Bodega Aurrera',
              'HEB',
              'Soriana'
            ]
          },
          {
            text: '40\'s Sábila',
            iconNav: 'single-paper-sabila',
            artId: '40-sabila',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sapiente labore molestiae ab, obcaecati culpa, optio fugiat sit rem, ea necessitatibus! Cupiditate, ab provident blanditiis consequatur, incidunt neque sequi voluptatum?',
            stores: [
              'Walmart',
              'Bodega Aurrera',
              'Almacenes Zaragoza',
              'Amazon'
            ]
          },
        ]
      },
    ];

    return {
      getAllProducts: function () {
        return products;
      },
      getProduct: function (slug) {
        var product = {};

        angular.forEach(products, function (item) {
          if (item.slug === slug) {
            product = item;
            return true;
          }
        });

        return product;
      }
    };

  });
