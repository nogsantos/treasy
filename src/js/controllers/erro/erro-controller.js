(function () {
	"use strict";
	/**
	 * Erro controller
	 */
	angular.module("app").controller("erroController", [
		"$scope",
		"$state",
		function ($scope, $state) {
			/**
			 * Inicialização do controller
			 */
			$scope.init = function () {
				$scope.title = "Erro ";
			};
		}
	]);
})();
