'use strict';

describe('Directive: BgResize', function() {
  var $compile,
      $rootScope,
      template;

  // include the ng-html2js module along with the angular app
  beforeEach(module('portfolio'));

  // load the template cache with the ng-html2js content
  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('adds min-height', function() {
    // Compile a piece of HTML containing the directive
    var element = $compile('<div bg-resize></div>')($rootScope);

    // fire all the watches so scopes can be evaluated
    $rootScope.$digest();

    expect(element[0].outerHTML).to.contain('style="min-height:');
  });

  it('adds background', function() {
    var imgSrc = 'test.jpg';

    // Compile a piece of HTML containing the directive
    var element = $compile('<div bg-resize img-src="' + imgSrc + '"></div>')($rootScope);

    // fire all the watches so scopes can be evaluated
    $rootScope.$digest();

    expect(element[0].outerHTML).to.contain('background');
    expect(element[0].outerHTML).to.contain('linear-gradient(rgba(0, 0, 0, ');
    expect(element[0].outerHTML).to.contain('cover');
    expect(element[0].outerHTML).to.contain('width: 100%');
    expect(element[0].outerHTML).to.contain(imgSrc);
  });
});
