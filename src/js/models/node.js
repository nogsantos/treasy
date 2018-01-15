(function() {
	"use strict";
	/**
	 *
	 * Node entity
	 */
	angular.module("app").factory("Node", function() {
		function Node() {}
		var id;
		var descricao;
		var observacao;

		Node.prototype.setId = function(id) {
			this.id = id;
		};

		Node.prototype.setDescricao = function(descricao) {
			this.descricao = descricao;
		};

		Node.prototype.setObservacao = function(observacao) {
			this.observacao = observacao;
		};

		return Node;
	});
})();
