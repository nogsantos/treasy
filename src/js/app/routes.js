"use strict";
/**
 * Configuração das rotas do sistema
 */
(function () {

	function Route() {}

	Route.prototype.routes = function (
		$stateProvider,
		$urlRouterProvider,
		$locationProvider
	) {
		$locationProvider.html5Mode(true);
		// $urlRouterProvider.otherwise("error");
		$stateProvider
			.state('home', {
				url: "/",
				templateUrl: "home.html",
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
	};
	/**
	 * Module
	 */
	angular.module('app').config(Route.prototype.routes);
}());
