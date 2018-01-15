(function() {
	"use strict";
	/**
	 * Home controller
	 */
	angular.module("app").controller("homeController", [
		"$scope",
		"$state",
		"NodeModel",
		function($scope, $state, NodeModel) {
			/**
			 * Inicialização do controller
			 */
			$scope.init = function() {
				query();
			};
			/**
			 * Delete
			 * @param {*} scope
			 */
			$scope.remove = function(scope) {
				scope.remove();
			};
			/**
			 * Add
			 * @param {*} scope
			 */
			$scope.newSubItem = function(scope) {
				var nodeData = scope.$modelValue;
				nodeData.nodes.push({
					id: nodeData.id * 10 + nodeData.nodes.length,
					title: nodeData.title + "." + (nodeData.nodes.length + 1),
					nodes: []
				});
			};
			/**
			 *
			 * @param {*} item
			 */
			$scope.visible = function(item) {
				return !(
					$scope.query &&
					$scope.query.length > 0 &&
					item.title.indexOf($scope.query) === -1
				);
			};
			$scope.add = function() {
				$state.go("form");
			};
			/**
			 *
			 */
			$scope.findNodes = function() {};
			/**
			 * Dados
			 */
			var query = function() {
				var nodes = new NodeModel();
				nodes.query().$promise.then(function(response) {
					$scope.data = response.data.length > 0 ? response.data : [];
				}).catch(function(err) {
					console.error("warning", err);
				});
			};
		}
	]);
})();
