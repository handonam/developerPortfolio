'use strict';

/**
 * Fetch the work data
 */
module.exports = [
  '$http', 'API_ROUTE',
  function($http, API_ROUTE) {
    return  {
      /**
       * @return {Object} JSON data of my work portfolio
       */
      getWorks: function() {
        return $http.get(API_ROUTE.WORKS);
      }
    };
  }
];
