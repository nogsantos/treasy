(function () {
	"use strict";
	/**
	 * Home controller
	 */
	angular.module("app").controller("homeController", [
		"$scope",
		"$state",
		"NodeModel",
		"$uibModal",
		function ($scope, $state, NodeModel, $uibModal) {
			/**
			 * Inicialização do controller
			 */
			$scope.init = function () {
				queryData();
			};
			/**
			 * Delete
			 * @param {*} scope
			 */
			$scope.remove = function (scope) {
				scope.remove();
			};
			/**
			 * Cadastrar nó pai
			 */
			$scope.newNode = function(){
				$state.go("form");
			};
			/**
			 * Add
			 * @param {*} scope
			 */
			$scope.newSubItem = function (scope) {
				var nodeData = scope.$modelValue;
				// console.log(scope);
				// $state.go("form", nodeData);

				$uibModal.open({
					ariaLabelledBy: 'modal-title-top',
					ariaDescribedBy: 'modal-body-top',
					templateUrl: 'myModalContent.html',
					size: 'sm',
					controller: function($scope) {
					  $scope.name = 'top';
					}
				  });

				// nodeData.nodes.push({
				// 	id: nodeData.id * 10 + nodeData.nodes.length,
				// 	title: nodeData.title + "." + (nodeData.nodes.length + 1),
				// 	nodes: []
				// });
			};

			$scope.cancel = function () {
				$uibModal.dismiss('cancel');
			  };
			/**
			 * Fecha todos os nós
			 */
			$scope.collapseAll = function () {
				$scope.$broadcast("angular-ui-tree:collapse-all");
			};
			/**
			 * Expande todos os nós
			 */
			$scope.expandAll = function () {
				$scope.$broadcast("angular-ui-tree:expand-all");
			};
			/**
			 *
			 * @param {*} item
			 */
			$scope.visible = function (item) {
				// console.log(item);
				return !(
					$scope.query &&
					$scope.query.length > 0 &&
					item.title.indexOf($scope.query) === -1
				);
			};
			/**
			 *
			 */
			$scope.add = function () {
				$state.go("form");
			};
			/**
			 *
			 */
			$scope.findNodes = function () {};
			/**
			 * Dados
			 */
			var queryData = function () {
				var nodes = new NodeModel();
				nodes.query().$promise.then(function (response) {
					$scope.data = response.data.length > 0 ? response.data : [];
				}).catch(function (err) {
					console.error("warning", err);
				});
			};
			//   $scope.toggle = function(scope) {
			// 	scope.toggle();
			//   };

			//   $scope.moveLastToTheBeginning = function() {
			// 	var a = $scope.data.pop();
			// 	$scope.data.splice(0, 0, a);
			//   };


		}
	]);
})();
