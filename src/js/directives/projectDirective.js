'use strict';

module.exports = [
  '$window',
  function($window) {
    return {
      scope: {},
      controllerAs: 'project',
      link: function($scope, $elem, attr) {}
    };
  }
];
