'use strict';

angular.module('yeomanProjectsApp', ['ngResource'])
	.factory("dbFactory", function($resource){
		var contactForm  = $resource('https://api.mongolab.com/api/1/databases/smileme/collections/smileme_contactform/', {
						apiKey: 'Sqyp3__btaqcey97X5s9RRQmTH-2atf2',
						id: 'wylly'
						});
		return contactForm;
	})


	.controller('ContactCtrl', function($scope, dbFactory){
		$scope.post = function(){
			var npost = new dbFactory({nombre: $scope.nombre, email: $scope.email, telefono: $scope.telefono, texto: $scope.texto});
			npost.$save();
			$scope.info = "Mensaje enviado.";
		};	
	});