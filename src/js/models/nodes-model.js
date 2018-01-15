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
			 * Insert
			 */
			NodeModel.prototype.insert = function(Node) {
				return NodeResource.insert(Node);
			};
			/**
			 * Update
			 */
			NodeModel.prototype.update = function(Node) {
				return NodeResource.update(Node);
			};
			/**
			 * Delete
			 */
			NodeModel.prototype.delete = function(Node) {
				return NodeResource.delete(Node);
			};
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
