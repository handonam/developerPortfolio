'use strict';

var angular = require('angular');

module.exports = [
  '$scope', 'worksResolver', 'ImageLoaderFactory',
  function ($scope, worksResolver, ImageLoaderFactory) {
    $scope.works = worksResolver;
    $scope.isLoading = false;

    // create a counter of each work's accomplishments.
    $scope.counter = [];
    $scope.status = [];
    $scope.works.forEach(function(work, workId) {
      // initialize by starting the work accomplishments at index 0
      $scope.counter[workId] = 0;

      // Set the status messages of each work
      $scope.status[workId] = {};
      switch(work.statusId) {
        case 1:
          $scope.status[workId].className = 'Work__Status--Inactive';
          $scope.status[workId].name = 'Previously Developed';
          break;
        case 2:
          $scope.status[workId].className = 'Work__Status--Active';
          $scope.status[workId].name = 'Actively Developing';
          break;
        default:
          $scope.status[workId].className = '';
          $scope.status[workId].name = 'On Hold';
          break;
      }
    });

    // Preload the images before updating the counter for these carousel buttons
    $scope.carouselPrev = function(workId) {
      $scope.isLoading = true;

      var imageUrl = $scope.works[workId].accomplishments[$scope.counter[workId] - 1].image.url;
      ImageLoaderFactory.loadImage(imageUrl).then(function(){
        $scope.isLoading = false;
        $scope.counter[workId]--;
      });
    }
    $scope.carouselNext = function(workId) {
      $scope.isLoading = true;

      var imageUrl = $scope.works[workId].accomplishments[$scope.counter[workId] + 1].image.url;
      ImageLoaderFactory.loadImage(imageUrl).then(function(){
        $scope.isLoading = false;
        $scope.counter[workId]++;
      });
    }
  }
];
