'use strict';

angular
	.module('admin')
	.run(function($httpBackend){

		var questions = [];

		$httpBackend.whenGET(/modules/).passThrough();

		$httpBackend.whenGET('/questions').respond([
			{
				language: 'Javascript',
				title: 'Question 1',
				option1: 'A',
				option2: 'B',
				option3: 'B',
				answer: 'B'
			}
		]);

		$httpBackend.whenPOST('/questions')
			.respond(function(method, url, data, headers, params){
				questions.push(angular.fromJson(data));
				console.log(JSON.stringify(questions));
				return [200, questions];
			})
	});	