(function () {
	"use strict";
	/**
	 * Modal component
	 */
	angular.module('ui.bootstrap').component('modalComponent', {
		templateUrl: 'myModalContent.html',
		bindings: {
			resolve: '<',
			close: '&',
			dismiss: '&'
		},
		controller: function () {
			var $ctrl = this;
			/**
			 * Init
			 */
			$ctrl.$onInit = function () {
				$ctrl.node = $ctrl.resolve.node;
			};
			/**
			 * Salvar
			 *
			 * @param {*} form
			 * @param {*} node
			 */
			$ctrl.ok = function (form, node) {
				if (form.$valid) {
					try {
						node.pai = $ctrl.resolve.node.id;
					} catch (error) { }
					$ctrl.close({
						$value: node
					});
				}
			};
			/**
			 * Cancelar cadastro
			 */
			$ctrl.cancel = function () {
				$ctrl.dismiss({
					$value: 'cancel'
				});
			};
		}
	});
})();
