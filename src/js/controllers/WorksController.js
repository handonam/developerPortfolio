'use strict';

module.exports = [
  'worksResolver', 'ImageLoaderFactory',
  function(worksResolver, ImageLoaderFactory) {
    var me = this;
    me.works = worksResolver;
    me.isLoading = false;

    // create a counter of each work's accomplishments.
    me.counter = [];
    me.status = [];
    me.works.forEach(function(work, workId) {
      // initialize by starting the work accomplishments at index 0
      me.counter[workId] = 0;

      // Set the status messages of each work
      me.status[workId] = {};
      switch(work.statusId) {
        case 1:
          me.status[workId].className = 'Work__Status--Inactive';
          me.status[workId].name = 'Previously Developed';
          break;
        case 2:
          me.status[workId].className = 'Work__Status--Active';
          me.status[workId].name = 'Actively Developing';
          break;
        default:
          me.status[workId].className = '';
          me.status[workId].name = 'On Hold';
          break;
      }
    });

    // Preload the images before updating the counter for these carousel buttons
    me.carouselPrev = function(workId) {
      me.isLoading = true;

      var imageUrl = me.works[workId].accomplishments[me.counter[workId] - 1].image.url;
      ImageLoaderFactory.loadImage(imageUrl).then(function() {
        me.isLoading = false;
        me.counter[workId]--;
      });
    }
    me.carouselNext = function(workId) {
      me.isLoading = true;

      var imageUrl = me.works[workId].accomplishments[me.counter[workId] + 1].image.url;
      ImageLoaderFactory.loadImage(imageUrl).then(function() {
        me.isLoading = false;
        me.counter[workId]++;
      });
    }
  }
];
