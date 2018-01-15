(function() {
	"use strict";
	/**
	 * Resource centralizador para reguisições REST
	 */
	angular.module("app").service("NodeResource", [
		"$resource",
		function($resource) {
			var api = "http://localhost:8080/data/nodes.json";
			return $resource(api);
		}
	]);
})();
