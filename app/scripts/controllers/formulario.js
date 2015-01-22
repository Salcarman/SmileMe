'use strict';

/**
 * @ngdoc function
 * @name smileMeApp.controller:formCtrl
 * @description
 * # formCtrl
 * Controller of the smileMeApp
 */
smileMeApp.factory("Post", function($resource){
		var post = $resource('https://api.mongolab.com/api/1/databases/smileme/collections/smileme_contactform', {
						apiKey: 'Sqyp3__btaqcey97X5s9RRQmTH-2atf2',
						id: 'wylly'
						});
		return post;
	})
	.controller('formCtrl', function ($scope, Post)
	{
		$scope.postsent = false;
		$scope.post = function()
		{
			$scope.postsent = true;
			var post = new Post(
			{
				nombre: ""+$scope.nombre+"",
				email: ""+$scope.email+"",
				telefono: ""+$scope.telefono+"",
				texto: ""+$scope.texto+""
			});
			
			post.$save();
		}
  });
