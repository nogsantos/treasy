(function () {
	"use strict";
	/**
	 * Form controller
	 */
	angular.module("app").controller("formController", [
		"$scope",
		"$state",
		"$stateParams",
		function ($scope, $state, $stateParams) {

			$scope.init = function () {
				if ($stateParams.id) {
					$scope.title = "Cadastro de nó filho " + $stateParams.id;
				} else {
					$scope.title = "Cadastro de nó Pai";
				}
			};

			$scope.cancel = function () {
				$state.go("home");
			};
		}
	]);
})();
