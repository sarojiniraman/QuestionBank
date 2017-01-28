'use strict';

(function(){
    describe('SampleConroller', function(){
        var scope, sampleController;

        beforeEach(module(ApplicationConfiguration.applicationModuleName));

        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();

            sampleController = $controller('AdminCtrl', {
                $scope: scope
            });
        }));

        it('Should match scope text message', function(){
            expect(scope.title).toBe('Hello World admin');
        });
    });
})();