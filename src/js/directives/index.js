'use strict';

angular.module('portfolio')
.directive('bgImage', require('./BgImageDirective'))
.directive('bgResize', require('./BgResizeDirective'))
.directive('navbar', require('./NavbarDirective'));
