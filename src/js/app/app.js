(function() {
	"use strict";
	/**
	 * Configurações gerais do sistema
	 */
	var initModules = ["ngResource", "ui.router", "ngSanitize", "ui.tree"];
	angular.module("app", initModules).constant("config", {
			appName: "Treasy",
			appVersion: "0.1.0"
	}).config(function($httpProvider, $resourceProvider) {
		/**
		 * Configurando o ngResource
		 */
		$resourceProvider.defaults.actions = {
			query: { method: "GET", isArray: false },
			insert: { method: "POST" },
			update: { method: "PUT" },
			delete: { method: "DELETE" }
		};
	});
})();
