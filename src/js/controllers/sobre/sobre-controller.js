(function () {
	"use strict";
	/**
	 * Sobre controller
	 */
	angular.module("app").controller("sobreController", [
		"$scope",
		"$state",
		"$window",
		function ($scope, $state, $window) {
			/**
			 * Inicialização do controller
			 */
			$scope.init = function () {
				$scope.title = "Sobre";
			};
			/**
			 * Retornar para o controle anterior
			 */
			$scope.back = function () {
				$window.history.back();
			};
		}
	]);
})();
