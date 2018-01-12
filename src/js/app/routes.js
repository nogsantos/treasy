/**
 * Configuração das rotas do sistema
 */
(function () {
	"use strict";

	function App() {}

	App.prototype.routes = function (
		$stateProvider,
		$urlRouterProvider,
		$locationProvider
	) {
		$locationProvider.html5Mode(true);
		// $urlRouterProvider.otherwise("error");
		$stateProvider
			.state('home', {
				url: "/",
				templateUrl: "index.html",
				controller: "homeController",
				controllerAs: "ctrl",
				data: {
					requireLogin: false
				}
			})
			// .state('error', {
			// 	url: "/error",
			// 	templateUrl: "error.html",
			// 	controller: 'errorController',
			// 	controllerAs: 'ctrl',
			// 	data: {
			// 		requireLogin: false
			// 	}
			// })
			;
			console.log('routes');
	};
	/**
	 * Module
	 */
	angular.module('app').config(App.prototype.routes);
}());
