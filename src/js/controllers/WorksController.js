'use strict';

var angular = require('angular');

module.exports = [
  '$scope', 'worksResolver',
  function ($scope, worksResolver) {
    $scope.works = worksResolver;

    // create a counter of each work's accomplishments.
    $scope.counter = [];
    $scope.status = [];
    $scope.works.forEach(function(work, workId) {
      // initialize by starting the work accomplishments at index 0
      $scope.counter[workId] = 0;

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

    $scope.carouselPrev = function(workId) {
      $scope.counter[workId]--;
    }
    $scope.carouselNext = function(workId) {
      $scope.counter[workId]++;
    }
  }
];
