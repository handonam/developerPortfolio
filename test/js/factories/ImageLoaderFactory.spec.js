'use strict';

describe('Factory: ImageLoaderFactory', function() {
  beforeEach(module('portfolio'));

  var ImageLoaderFactory;

  beforeEach(inject(function(_ImageLoaderFactory_) {
    ImageLoaderFactory = _ImageLoaderFactory_;
  }));

  it('should return something', function() {
    expect(ImageLoaderFactory.loadImage('something.jpg')).to.be.an('object');
  });
})
