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
			 * Usando popover como tooltip
			 */
			$scope.dynamicPopover = {
				templateUrl: 'myPopoverTemplate.html',
				title: 'Dados do nó'
			};
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
			 * Busca por nós (estático)
			 *
			 * @todo A biblioteca apresenta o resultado da busca somente
			 * 		 até o segundo nível do nó. O correto seria a busca
			 * 		 pelo termo em todos os níveis.
			 *
			 * @param {*} item
			 */
			$scope.visible = function (item) {
				var descricao = item.title ? item.title.toLowerCase() : '';
				var query = $scope.query ? $scope.query.toLowerCase() : '';
				return !(query && query.length > 0 && descricao.indexOf(query) === -1);
			};
			/**
			 * Pode realizar uma busca pelos nós, dinamicamente em um
			 * recurso remoto...
			 */
			$scope.findNodes = function (e) {
				$log.info(e.query);
			};
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
			$scope.openComponentModal = function (scope, edit) {
				var nodeData = scope.$modelValue;
				if (nodeData) {
					nodeData.edit = edit;
				}
				var modalInstance = $uibModal.open({
					component: 'modalComponent',
					resolve: {
						node: function () {
							return nodeData;
						}
					}
				});
				modalInstance.result.then(function (node) {
					if (node.pai && !edit) {
						addNoFilho(nodeData, node);
					} else if (edit) {
						nodeEdit(node);
					} else {
						addNoPai(node);
					}
				}, function () {
					$log.info('Ação cancelada');
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
			var nodeEdit = function (node) {
				nodeEditAction(node);
			};
			/**
			 * Busca recursiva para edição do nó
			 *
			 * @param {*} node_edited
			 */
			var nodeEditAction = function (node_edited) {
				$scope.data.forEach(function (item) {
					if (item.id === node_edited.id) {
						item.title = node_edited.title;
						item.observacao = node_edited.observacao;
						return item;
					} else {
						var found = nodeEditAction(item.nodes, node_edited);
						if (found && found.edit) {
							found.title = node_edited.title;
							found.observacao = node_edited.observacao;
							return found;
						}
					}
				});
			};
		}
	]);
})();
