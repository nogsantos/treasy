/**
 * Main controller
 */
(function () {
	"use strict";

	function Main() {}
	Main.prototype.controller = function () {

	};
	/**
	 * Module
	 */
	angular.module('app').controller('mainController', Main.prototype.controller);
	console.log('mainController');
}());
