describe('Directive: Navbar', function() {
  var $compile,
      $rootScope,
      template;

  // include the ng-html2js module along with the angular app
  beforeEach(module('portfolio', 'partials/directives/navbar.html'));

  // load the template cache with the ng-html2js content
  beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;

    template = _$templateCache_.get('partials/directives/navbar.html');
    _$templateCache_.put('/partials/directives/navbar.html', template);
  }));

  it('Replaces the element with the appropriate content', function() {
    // Compile a piece of HTML containing the directive
    var element = $compile('<div navbar></div>')($rootScope);

    // fire all the watches so scopes can be evaluated
    $rootScope.$digest();

    expect(element.html()).to.contain('<nav class="Nav">');
    expect(element.html()).to.contain('ng-class="{\'Nav__Item--Active\': (path.url === navbar.activePath)}"');
    expect(element.html()).to.contain('ng-repeat="path in navbar.paths"');
  });
});
