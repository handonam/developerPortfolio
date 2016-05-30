'use strict';

angular.module('portfolio')
.directive('bgImage', require('./BgImageDirective'))
.directive('bgResize', require('./BgResizeDirective'))
.directive('project', require('./ProjectDirective'))
.directive('navbar', require('./NavbarDirective'));
