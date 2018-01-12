/**
 * Configurações iniciais dos módulos
 */
(function () {
	"use strict";

	function App() {}

	App.prototype.config = function () {
		console.log('config');
	};
	/*
	 * Module
	 */
	angular.module('app').config(App.prototype.config);
}());
