'use strict';

describe('Controller: Works', function() {
  beforeEach(module('portfolio'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('Hi', function () {
		it('Say Hello', function () {
			var scope = {};
			$controller('ContactController', { $scope: scope });
			expect(scope).to.not.be.undefined;
		});
	});
});
