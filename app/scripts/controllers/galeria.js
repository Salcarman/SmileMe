'use strict';

/**
 * @ngdoc function
 * @name smileMeApp.controller:galleryCtrl
 * @description
 * # galleryCtrl
 * Controller of the smileMeApp
 */
angular.module('smileMeApp')
  .controller('galleryCtrl', function ($scope) {
     $('#carousel-example-generic').carousel('prev');
  });
