'use strict';

/**
 * @ngdoc function
 * @name yeomanProjectsApp.controller:AboutCtrl
 * @description
 * # FormCtrl
 * Controller of the yeomanProjectsApp
 */
angular.module('yeomanProjectsApp')
  .controller('FormCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
