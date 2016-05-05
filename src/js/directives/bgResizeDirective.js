'use strict';

var angular = require('angular');

module.exports = [
  '$window',
  function($window) {
    return {
      scope: {},
      link: function(scope, $elem, attr) {
        var heightPercentage = (attr.bgSize || 100) / 100;

        if (attr.imgSrc) {
          $elem.css({
            'background':
            'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),'
            + 'url(' + attr.imgSrc + ') no-repeat center',
            'background-size': 'cover'
          });
        }

        scope.onResize = function() {
          $elem.css({
            'min-height': ($window.innerHeight * heightPercentage) + 'px' ,
            'width': '100%'
          });
        };

        scope.onResize();
        angular.element($window).bind('resize', function() {
          scope.onResize();
          scope.$apply();
        });
      }
    };
  }
];
