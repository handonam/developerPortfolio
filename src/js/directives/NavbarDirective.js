'use strict';

module.exports = [
  '$window', '$location',
  function($window, $location) {
    return {
      scope: true,
      controllerAs: 'navbar',
      controller: ['$scope', function($scope) {
        var me = this;
        me.activePath = $location.path();

        // watch the location change, which happens outside of this directive.
        $scope.$on('$locationChangeSuccess', function(){
          me.activePath = $location.path();
        });

        me.paths = [
          {
            name: 'Works',
            url: '/works'
          },
          {
            name: 'Contact',
            url: '/contact'
          }
        ];
      }],
      link: function($scope, $elem, attr) {},
      templateUrl: '/partials/directives/navbar.html'
    };
  }
];
