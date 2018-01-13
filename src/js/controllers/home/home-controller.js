/**
 * Home controller
 */
(function () {
	"use strict";
	angular.module('app').controller('homeController', function ($scope) {
		/**
		 * Delete
		 * @param {*} scope
		 */
		$scope.remove = function (scope) {
			scope.remove();
		};
		/**
		 * Add
		 * @param {*} scope
		 */
		$scope.newSubItem = function (scope) {
			var nodeData = scope.$modelValue;
			nodeData.nodes.push({
				id: nodeData.id * 10 + nodeData.nodes.length,
				title: nodeData.title + '.' + (nodeData.nodes.length + 1),
				nodes: []
			});
		};
		/**
		 *
		 * @param {*} item
		 */
		$scope.visible = function (item) {
			return !($scope.query && $scope.query.length > 0 &&
				item.title.indexOf($scope.query) === -1);

		};
		/**
		 *
		 */
		$scope.findNodes = function () {};
		/**
		 * Dados
		 */
		$scope.data = [{
			'id': 1,
			'title': 'node1',
			'nodes': [{
					'id': 11,
					'title': 'node1.10',
					'nodes': [{
						'id': 111,
						'title': 'node1.1.111',
						'nodes': []
					}]
				},
				{
					'id': 12,
					'title': 'node1.225',
					'nodes': []
				}
			]
		}, {
			'id': 2,
			'title': 'node2',
			'nodes': [{
					'id': 21,
					'title': 'node2.1',
					'nodes': []
				},
				{
					'id': 22,
					'title': 'node2.2',
					'nodes': []
				}
			]
		}, {
			'id': 3,
			'title': 'node3',
			'nodes': [{
				'id': 31,
				'title': 'node3.1',
				'nodes': []
			}]
		}, {
			'id': 4,
			'title': 'node4',
			'nodes': [{
				'id': 41,
				'title': 'node4.1121',
				'nodes': []
			}]
		}];
	});
}());
