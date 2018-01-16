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
		"$log",
		function ($scope, $state, NodeModel, $uibModal, $log) {
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
			 * @todo
			 * 
			 * @param {*} item
			 */
			$scope.visible = function (item) {
				return !(
					$scope.query &&
					$scope.query.length > 0 &&
					item.title.indexOf($scope.query) === -1
				);
			};
			/**
			 * @todo
			 */
			$scope.findNodes = function () {};
			/**
			 * Carrega os dados iniciais
			 */
			var queryData = function () {
				var nodes = new NodeModel();
				nodes.query().$promise.then(function (response) {
					$scope.data = response.data.length > 0 ? response.data : [];
				}).catch(function (err) {
					$log.error(err);
				});
			};
			/**
			 * Formulário para cadastro de novos nós
			 *
			 * @param {*} scope
			 */
			$scope.openComponentModal = function (scope) {
				var nodeData = scope.$modelValue;
				var modalInstance = $uibModal.open({
					component: 'modalComponent',
					resolve: {
						node: function () {
							return nodeData;
						}
					}
				});
				modalInstance.result.then(function (node) {
					if (node.pai) {
						addNoFilho(nodeData, node);
					} else {
						addNoPai(node);
					}
				}, function () {
					$log.info('modal-component dismissed at: ' + new Date());
				});
			};
			/**
			 * Adiciona um nó pai
			 *
			 * @param {*} node
			 */
			var addNoPai = function (node) {
				$scope.data.unshift({
					id: Math.floor(Math.random() * 10000),
					title: node.title,
					observacao: node.observacao,
					nodes: []
				});
			};
			/**
			 * Adiciona um nó filho
			 *
			 * @param {*} node
			 */
			var addNoFilho = function (pai, node) {
				pai.nodes.unshift({
					id: Math.floor(Math.random() * 10000),
					title: node.title,
					observacao: node.observacao,
					nodes: []
				});
			};
			/**
			 * Link para a página sobre
			 */
			$scope.about = function () {
				$state.go("sobre");
			};
			/**
			 * Edição de um nó
			 * 
			 * @param {*} node
			 */
			$scope.nodeEdit = function (node) {
				$log.info(node);
			};
		}
	]);
})();
