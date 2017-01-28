'use strict';

(function(){
	angular
		.module('admin')
		.provider('AdminService', function($q){
			var dataSourceToggle = false;
			this.setDataSourceToggle = function(value){
				dataSourceToggle = value;
			};
			var _questions = [],
				_addQuestion = function(question){
					if(!question) throw new Error ({ code : 'QBS-001' , Error : 'Question is not passed' });
					if(!dataSourceToggle){
						_questions.push(question);
						return _questions;
					}else{
						// TODO : have to write service call
						console.log('service call');
					}
				};
			var _getQuestions = function(){
				if(!dataSourceToggle){
					return _questions.slice();
				}else{
					//TODO : have to write service call
					console.log('service call');
				}
   			};
   			var _removeByTitle = function(title){
   				if(!title) throw new Error ({ code : 'QBS-002' , Error : 'Title is not passed' });
   				if(!dataSourceToggle){
   					_questions.forEach(function(question,index){
   						if(title.indexOf(question.title) !== -1){
   							_questions.splice(index,1);
   							return true;
   						}
   					});
   				}else{
   					// TODO : have to write service call
   					console.log('service call');
   				}
   				
   			};
   			var _searchByTitle = function(title){
   				if(!title) throw new Error ({ code : 'QBS-003' , Error : 'Title is not passed' });
   				if(!dataSourceToggle){
   					_questions.forEach(function(question){
   						if(title.indexOf(question.title !== -1)){
   							return question;
   						}
   					});
   					return 'title not found';
   				}else{
   					// TODO : have to write service call
   					console.log('service call');
   				}
   			};
   			var _updateQuestionByTitle = function(title, updatableQuestion){
   				if(!title) throw new Error ({ code : 'QBS-004' , Error : 'Title is not passed' });
   				if(!updatableQuestion) throw new Error ({ code : 'QBS-005' , Error : 'UpdatableQuestion is not passed' });
   				if(!dataSourceToggle){
   					_questions.forEach(function(question){
   						if(title.indexOf(question.title !== -1)){
   							question.title = updatableQuestion;
   						}
   					});
   					return _questions;
   				}else{
   					// TODO : have to write service call
   					console.log('service call');
   				}
   			};

			this.$get = function(){
				return{
					addQuestion : _addQuestion,
					getQuestions : _getQuestions,
					removeByTitle : _removeByTitle,
					searchByTitle : _searchByTitle,
					updateQuestionByTitle : _updateQuestionByTitle
				};
			};
		});
})();
