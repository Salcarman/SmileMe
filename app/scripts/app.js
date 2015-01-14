'use strict';

/**
 * @ngdoc overview
 * @name smileMeApp
 * @description
 * # smileMeApp
 *
 * Main module of the application.
 */
var smileMeApp = angular.module('smileMeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutCtrl'
      })
	.when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'formCtrl'
      })
	.when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'galleryCtrl'
      })
	.when('/services', {
        templateUrl: 'views/services.html',
        controller: 'servicesCtrl'
      })
      .otherwise({
        redirectTo: '/index.html'
      });
  });
