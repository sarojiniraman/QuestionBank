'use strict';
(function(){
	angular
		.module('admin')
		.config(function(AdminServiceProvider){
			AdminServiceProvider.setDataSourceToggle(false);
		})
		.config(function($stateProvider){
			$stateProvider
			.state({
				name:'admin',
				url:'/admin',
				abstract: true,
				template:'<ui-view/>'
			})
				.state({
					name:'admin.new',
					url:'/new',
					templateUrl:'modules/admin/client/views/new.client.tpl.html'
				})
				.state({
					name:'admin.login',
					url:'/login',
					templateUrl:'modules/admin/client/views/login.client.tpl.html'
				})
				.state({
					name:'admin.list',
					url:'/list',
					templateUrl:'modules/admin/client/views/list.client.tpl.html'
				});

		});
})();