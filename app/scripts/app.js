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
      .when('/acerca-de', {
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
    .when('/celebrations', {
        templateUrl: 'views/celebrations.html',
        controller: 'servicesCtrl'
      })
    .when('/renting', {
        templateUrl: 'views/renting.html',
        controller: 'servicesCtrl'
      })
    .when('/excursion', {
        templateUrl: 'views/excursion.html',
        controller: 'servicesCtrl'
      })
      .otherwise({
        redirectTo: '/index.html'
      });
  });
