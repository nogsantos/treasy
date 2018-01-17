(function () {
	"use strict";
	/**
	 * Configuração das rotas do sistema
	 */
	angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise("erro");
		$stateProvider
			.state('home', {
				url: "/",
				templateUrl: "home.html",
				controller: "homeController",
				controllerAs: "$ctrl"
			})
			.state('sobre', {
				url: "/sobre",
				templateUrl: "sobre.html",
				controller: "sobreController"
			})
			.state('erro', {
				url: "/erro",
				templateUrl: "erro.html",
				controller: "erroController"
			});
	});
}());
