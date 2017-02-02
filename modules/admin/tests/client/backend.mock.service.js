'use strict';

angular
	.module('admin')
	.run(function($httpBackend){

		var questions = [];

		$httpBackend.whenGET(/modules/).passThrough();

		$httpBackend.whenGET('/questions').respond(questions);

		$httpBackend.whenPOST('/questions')
			.respond(function(method, url, data, headers, params){
				questions.push(angular.fromJson(data));
				console.log(JSON.stringify(questions));
				return [200, questions];
			});

		$httpBackend.whenDELETE('/questions')
			.respond(function(method, url, data, headers, params){
				questions.forEach(function(q,index){
					console.log(data);
					if(data.indexOf(q.title) !== -1){
						questions.splice(index,1);
						return true;
					}
				});
		});
	});	