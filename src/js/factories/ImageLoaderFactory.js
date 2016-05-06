'use strict';

/**
 * Preloads the image into a promise.
 */
module.exports = [
  '$q', '$rootScope',
  function($q, $rootScope) {
    return {
      /**
       * @return {Promise}
       */
      loadImage: function(imageUrl) {
        var image = new Image();
        var deferred = $q.defer();

        image.onerror = function() {
          deferred.reject();
        }
        image.onload = function() {
          deferred.resolve()
        }
        image.src = imageUrl;

        return deferred.promise;
      }
    }
  }
];
