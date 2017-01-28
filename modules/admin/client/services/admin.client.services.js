'use strict';

(function(){
	angular
		.module('admin')
		.provider('AdminService', function(){ // Dependency injection for Promise
			
         var dataSourceToggle = false;
			this.setDataSourceToggle = function(value){
				dataSourceToggle = value;
			};
			var _questions = [],
				_addQuestion = function(q, timeout){
               return function(question){
                  var defer = q.defer();

                  // Biz logic
                  timeout(function(){ // Callback executes on separate thread. Async processor
                     if(!question) 
                        defer.reject( { code : 'QBS-001' , Error : 'Question is not passed' } ); // invokes failure callback
                     if(!dataSourceToggle){
                        _questions.push(question);
                         defer.resolve(_questions); // invokes success callback
                     }else{
                        // TODO : have to write service call
                        console.log('service call');
                     }
                  }, 5000); // Hold current processing thread for 2 secs
                  
                  return defer.promise; // Return promise to caller
               };      
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

			this.$get = function($q,$timeout){
				return{
					addQuestion : _addQuestion($q,$timeout),
					getQuestions : _getQuestions,
					removeByTitle : _removeByTitle,
					searchByTitle : _searchByTitle,
					updateQuestionByTitle : _updateQuestionByTitle
				};
			};
		});
})();
