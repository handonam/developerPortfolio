'use strict';

angular.module('portfolio')
.config([
  '$routeProvider', '$locationProvider', '$animateProvider',
  function($routeProvider, $locationProvider, $animateProvider) {
    $locationProvider.html5Mode(true);

    // prevent ng-animate on elements that toggle between show/hide
    $animateProvider.classNameFilter(/^(?:(?!ng-animate-disabled).)*$/);

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
