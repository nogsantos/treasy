/**
 * Configura a inicialização do sistema
 *
 * @author: Fabricio Nogueira
 * @since: 19/08/2016
 */
(function () {
	"use strict";

	function AppRun(
		$rootScope,
		$location,
		config,
		$state
	) {
		/*
		 * Nome do sistema
		 */
		$rootScope.sysname = config.appName + ' [' + config.appVersion + ']';
		/*
		 * StateChangeStart
		 * Evento ao mudar a pagina
		 */
		$rootScope.$on('$stateChangeStart', function (event, toState) {
			/*
			 * Título da página
			 */
			$rootScope.page = toState.name;
		});
		/*
		 * StateChangeError
		 * Captura erro na mudança de página
		 */
		$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
			$state.go('erro');
		});
		console.log('run');
	}
	/**
	 * Module
	 */
	angular.module('app').run(AppRun);
}());
