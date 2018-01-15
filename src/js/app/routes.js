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
			controllerAs: "ctrl",
			data: {
				requireLogin: false
			}
		});
		$stateProvider.state('form', {
			url: "/form/node?id",
			templateUrl: "form.html",
			controller: "formController",
			controllerAs: "ctrl",
			data: {
				requireLogin: false
			}
		});
	});
}());
