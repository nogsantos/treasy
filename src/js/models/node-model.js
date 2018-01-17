(function() {
	"use strict";
	/**
	 * Modelo
	 */
	angular.module("app").factory("NodeModel", [
		"NodeResource",
		function(NodeResource) {
			function NodeModel() {}
			/**
			 * Query
			 */
			NodeModel.prototype.query = function(Node) {
				return NodeResource.query(Node);
			};
			return NodeModel;
		}
	]);
})();
