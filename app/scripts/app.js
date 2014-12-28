'use strict';

/**
 * @ngdoc overview
 * @name yeomanProjectsApp
 * @description
 * # yeomanProjectsApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanProjectsApp', [
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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
	.when('/consulta', {
        templateUrl: 'views/formulario.html',
        controller: 'FormCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
