'use strict';
(function(){
	angular
		.module('user')
		.config(function($stateProvider){
			$stateProvider
			.state({
				name:'user',
				url:'/user',
				templateUrl:'modules/user/client/views/user.client.tpl.html'
			});
		});
})();