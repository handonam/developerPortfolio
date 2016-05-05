'use strict';

module.exports = [
  '$http', 'API_ROUTE',
  function($http, API_ROUTE)
  {
    return  {
      getWorks: function() {
        return $http.get(API_ROUTE.WORKS);
      }
    };
  }
];
