"use strict";
/**
 * Configuração das rotas do sistema
 */
(function () {
	angular.module('app').config(function (
		$stateProvider,
		$urlRouterProvider,
		$locationProvider
	) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise("error");
		$stateProvider.state('home', {
			url: "/",
			templateUrl: "home.html",
			controller: "homeController",
			controllerAs: "ctrl",
			data: {
				requireLogin: false
			}
		});
	});
}());
