'use strict';

(function(){
	angular
		.module('signup')
		.config(function($stateProvider){
				$stateProvider
					.state({
						name:'signup',
						url:'/signup',
						templateUrl:'modules/signup/client/views/signup.client.tpl.html'
					});
		});
})();

