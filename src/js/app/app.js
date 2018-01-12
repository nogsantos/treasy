/**
 * Configurações gerais do sistema
 *
 */
(function () {
	"use strict";
	var initModules = [
		'ui.router',
		'ngSanitize',
		'ui.tree'
	];
	angular.module('app', initModules).constant('config', {
		appName: 'Treasy',
		appVersion: '0.1.0'
	});

}());
