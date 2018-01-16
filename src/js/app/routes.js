(function () {
	"use strict";
	/**
	 * Configuração das rotas do sistema
	 */
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
			controllerAs: "$ctrl"
		});
		$stateProvider.state('sobre', {
			url: "/sobre",
			templateUrl: "sobre.html",
			controller: "sobreController"
		});
	});
}());
