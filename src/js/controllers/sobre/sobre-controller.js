(function () {
	"use strict";
	/**
	 * Sobre controller
	 */
	angular.module("app").controller("sobreController", [
		"$scope",
		"$state",
		function ($scope, $state) {
			/**
			 * Inicialização do controller
			 */
			$scope.init = function () {
				$scope.title = "Sobre";
			};
		}
	]);
})();
