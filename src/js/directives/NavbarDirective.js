'use strict';

var angular = require('angular');

module.exports = [
  '$window', '$location',
  function($window, $location) {
    return {
      scope: true,
      link: function($scope, $elem, attr) {
        $scope.activePath = $location.path();
        $scope.$on('$locationChangeSuccess', function(){
          $scope.activePath = $location.path();
        });
        
        $scope.paths = [
          {
            name: 'Works',
            url: '/works'
          },
          {
            name: 'Contact',
            url: '/contact'
          }
        ];
      },
      templateUrl: '/partials/directives/navbar.html'
    };
  }
];
