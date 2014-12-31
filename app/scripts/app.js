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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutCtrl'
      })
	.when('/consulta', {
        templateUrl: 'views/formulario.html',
        controller: 'formCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
