(function () {
	"use strict";
	/**
	 * Configura a inicialização do sistema
	 */
	angular.module("app").run(function ($rootScope, $location, config, $state) {
		/**
		 * Nome do sistema
		 */
		$rootScope.sysname = config.appName + " [" + config.appVersion + "]";
		/**
		 * StateChangeStart
		 * Evento ao mudar a pagina
		 */
		$rootScope.$on("$locationChangeSuccess", function (events, toState, toParams, fromState, fromParams) {
			/**
			 * Título da página
			 */
			var title = toState.split('/').pop();
			$rootScope.page = title !== '' ? title.charAt(0).toUpperCase() + title.slice(1) : 'Home';
		});
		/**
		 * StateChangeError
		 * Captura erro na mudança de página
		 */
		$rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
			$state.go("erro");
		});
	});
})();
