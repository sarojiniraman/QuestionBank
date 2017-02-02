'use strict';

angular
	.module('admin')
    .controller('AdminCtrl', function($scope,AdminService){
     
     $scope.save = function(question){
     	var promise = AdminService.addQuestion(question);
     	promise
     		.then(function(questions){
     			console.log('Success callback invoked');
     			console.log(JSON.stringify(questions));
     		},
     		function(error){
     			console.log('Error callback invoked');
     			console.log(JSON.stringify(error));
     		});
     	};


    })


    .controller('AdminListCtrl', function($scope,AdminService){
     	AdminService.getQuestions(function(questions){
     		$scope.questionsArray = questions;
     	});


     	$scope.delete = function(question){
     		var promise = AdminService.removeByTitle(question);
     		promise
     			.then(function(question){
     				console.log('Success callback invoked');
     			},
     			function(error){
     				console.log('Error callback invoked');
     			});

     	};
    });