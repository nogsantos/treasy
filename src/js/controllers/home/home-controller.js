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
				/**
				 * Loading para a consulta
				 */
				$scope.loading = false;
				/**
				 * Realiza a consulta
				 */
				queryData();
				/**
				 * Evento toggle
				 */
				$scope.toggle = {
					expanded: true,
					title: 'Fechar'
				};
				/**
				 * Usando popover como tooltip
				 */
				$scope.dynamicPopover = {
					templateUrl: 'myPopoverTemplate.html',
					title: 'Dados do nó'
				};
			};
			/**
			 * Delete
			 * @param {*} scope Item a ser removido
			 */
			$scope.remove = function (scope) {
				scope.remove();
			};
			/**
			 * Toggle para abrir ou fechar todos os nós
			 */
			$scope.nodeToggle = function () {
				$scope.toggle.state = !$scope.toggle.state;
				if ($scope.toggle.state) {
					$scope.$broadcast("angular-ui-tree:collapse-all");
					$scope.toggle.title = 'Expandir';
				} else {
					$scope.$broadcast("angular-ui-tree:expand-all");
					$scope.toggle.title = 'Fechar';
				}
			};
			/**
			 * Busca por nós (estático)
			 *
			 * @todo A biblioteca apresenta o resultado da busca somente
			 * 		 até o segundo nível do nó. O correto seria a busca
			 * 		 pelo termo em todos os níveis.
			 *
			 * @param {*} item Descrição
			 */
			$scope.visible = function (item) {
				var descricao = item.title ? item.title.toLowerCase() : '';
				var query = $scope.query ? $scope.query.toLowerCase() : '';
				return (query && query.length > 0 && descricao.indexOf(query) === -1);
			};
			/**
			 * Pode realizar uma busca pelos nós, dinamicamente em um
			 * recurso remoto...
			 */
			$scope.findNodes = function (e) {
				// $log.info(e.query);
			};
			/**
			 * Carrega os dados iniciais
			 */
			var queryData = function () {
				var nodes = new NodeModel();
				$scope.loading = true;
				nodes.query().$promise.then(function (response) {
					$scope.loading = false;
					$scope.data = response.data.length > 0 ? response.data : [];
				}).catch(function (err) {
					$scope.loading = false;
					$log.error(err);
				});
			};
			/**
			 * Formulário para cadastro de novos nós
			 *
			 * @param {*} scope Dados do nó
			 * @param {*} edit Define edição
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
			 * @param {*} node Dados do nó a ser adicionado
			 */
			var addNoPai = function (node) {
				$scope.data.unshift({
					id: idGenerator(),
					title: node.title,
					observacao: node.observacao,
					nodes: []
				});
			};
			/**
			 * Adiciona um nó filho
			 *
			 * @param {*} pai Dados do nó pai
			 * @param {*} node Dados do nó filho
			 */
			var addNoFilho = function (pai, node) {
				pai.nodes.unshift({
					id: idGenerator(),
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
			 * @param {*} node dados para edição do array
			 */
			var nodeEdit = function (node) {
				if (typeof node === 'object' && Object.keys(node).length > 0) {
					nodeEditAction($scope.data, node);
				}
			};
			/**
			 * Busca recursiva para edição do nó
			 *
			 * @param {*} data Array à ser editado
			 * @param {*} node_edited Dados para edição do array
			 */
			var nodeEditAction = function (data, node_edited) {
				data.forEach(function (item) {
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
			/**
			 * Gerado de ids aleatórios
			 */
			var idGenerator = function () {
				return Math.floor(Math.random() * 10000);
			};
		}
	]);
})();
