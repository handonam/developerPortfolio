'use strict';

/**
 * Used to place an image as a background style
 */
module.exports = [
  '$q',
  function($q) {
    return {
      controllerAs: 'bgImage',
      link: function($scope, $elem, attr) {
        if (attr.img) {
          var deferred = $q.defer();

          var image = new Image();

          // load a backup image
          image.onerror = function() {
            var imageBkp = new Image();
            imageBkp.src = attr.imgBkp;
            imageBkp.onload = function() {
              deferred.resolve(attr.imgBkp);
            }

            imageBkp.onerror = function() {
              deferred.reject();
            }
          };

          image.onload = function() {
            deferred.resolve(attr.img)
          };

          image.src = attr.img;

          deferred.promise.then(function(imageUrl) {
            $elem.css({
              'background': 'url(' + imageUrl + ') no-repeat center',
              'background-size': 'cover'
            });
          })
        }
      }
    };
  }
];
