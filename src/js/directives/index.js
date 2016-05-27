'use strict';

var app = require('angular').module('portfolio');

app.directive('bgImage', require('./BgImageDirective'));
app.directive('bgResize', require('./BgResizeDirective'));
app.directive('project', require('./ProjectDirective'));
app.directive('navbar', require('./NavbarDirective'));
