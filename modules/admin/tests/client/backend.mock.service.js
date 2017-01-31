'use strict';

angular
	.module('admin')
	.run(function($httpBackend){
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

	});	