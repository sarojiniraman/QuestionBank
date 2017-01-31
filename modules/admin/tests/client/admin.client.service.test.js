'use strict';
(function(){

   describe('Test spec for Admin services',function () {

     var adminServiceProvider, question, question1;

       beforeEach(module(ApplicationConfiguration.applicationModuleName, function(AdminServiceProvider){
         console.log('Service :: ###################' +AdminServiceProvider);
         adminServiceProvider = AdminServiceProvider;
         }));
       beforeEach(function(){
         question = { language:'C',title:'born ?',options:'[1972,2007,2012]',answer:'1972' };
         question1 = { language:'C++',title:'when ?',options:'[1972,2007,2012]',answer:'1972' };
       });
        it('should use $http and return the questions when getQuestions function is invoked',function () {
           adminServiceProvider.setDataSourceToggle(true);
          var adminService = adminServiceProvider.$get();
            var questions = adminService.getQuestions();

           expect(adminService.getQuestions()).toEqual([
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
/*
        //add question
       it('should throw error when language is not passed as an argument to add function',inject(function($injector){
         adminServiceProvider.setDataSourceToggle(false);
         var adminServiceT = adminServiceProvider.$get();
          expect(function(){adminServiceT.addQuestion();}).toThrow(new Error({ code : 'QBS-001' , Error : 'Question is not passed' }));
       }));

      it('should add the question when question object is passed as an argument to add function and should return questions',function () {
           adminServiceProvider.setDataSourceToggle(false);
         var adminService = adminServiceProvider.$get();
           expect(adminService.addQuestion(question)).toEqual([question]);
       });

      it('should not add the question when question object is passed as an argument to add function when the toggle is true',function () {
           adminServiceProvider.setDataSourceToggle(true);
         var adminService = adminServiceProvider.$get();
           expect(adminService.addQuestion(question)).toEqual(console.log('service call'));
       });

      //getQuestions

      it('should return the questions when getQuestions function is invoked',function () {
           adminServiceProvider.setDataSourceToggle(false);
         	var adminService = adminServiceProvider.$get();
          	var questionTest = adminService.addQuestion(question);
           expect(adminService.getQuestions()).toEqual(questionTest);
       });
      it('should not return the questions when getQuestions function is invoked with toggle true',function () {
           adminServiceProvider.setDataSourceToggle(true);
           var adminService = adminServiceProvider.$get();
           expect(adminService.getQuestions()).toEqual(console.log('service call'));
       });

      //removeQuestion
       it('should throw error when title is not passed as an argument to remove function',function(){
         var adminService = adminServiceProvider.$get();
          expect(adminService.removeByTitle()).toThrow(new Error({ code : 'QBS-002' , Error : 'Title is not passed' }));
       });

      it('should remove the question when removeQuestion function is invoked',function () {
           adminServiceProvider.setDataSourceToggle(false);
         	var adminService = adminServiceProvider.$get();
          	adminService.addQuestion(question);
           expect(adminService.removeByTitle('born ?')).toBeTruthy();
       });
      it('should not remove the questions when removeQuestion function is invoked with toggle true',function () {
           adminServiceProvider.setDataSourceToggle(true);
           var adminService = adminServiceProvider.$get();
           expect(adminService.removeByTitle('born ?')).toEqual(console.log('service call'));
       });

      //searchQuestion
      it('should throw error when title is not passed as an argument to search function',function(){
         var adminService = adminServiceProvider.$get();
          expect(adminService.searchByTitle()).toThrow(new Error({ code : 'QBS-003' , Error : 'Title is not passed' }));
       });

*/     
 });
})();




