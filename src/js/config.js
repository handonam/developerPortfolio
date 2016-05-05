'use strict';

var app = require('angular').module('portfolio');

app.config([
  '$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    // Specify routes to load our partials upon the given URLs
    $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'ContactController'
    })
    .when('/works', {
      templateUrl: 'partials/work.html',
      controller: 'WorksController',
      resolve: {
        worksResolver: [
          'WorksFactory',
          function(WorksFactory) {
            return WorksFactory.getWorks().then(function(response) {
              return response.data;
            });
          }
        ]
      }
    })
    .otherwise({redirectTo: '/'});
}]);
