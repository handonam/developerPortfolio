'use strict';

require('angular/angular');
require('angular-animate/angular-animate');
require('angular-route/angular-route');

angular.module('portfolio', ['ngRoute', 'ngAnimate']);

require('./constants');
require('./factories');
require('./config');
require('./controllers');
require('./directives');
