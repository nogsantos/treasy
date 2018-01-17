(function () {
	"use strict";
	/**
	 * Resource centralizador para reguisições REST
	 */
	angular.module("app").service("NodeResource", ["$resource", "$location", function ($resource, $location) {
		var api = $location.absUrl() + "data/nodes.json";
		return $resource(api);
	}]);
})();
