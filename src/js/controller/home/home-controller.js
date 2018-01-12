/**
 * Home controller
 */
(function () {
	"use strict";

	function Home() {}
	Home.prototype.controller = function () {

	};
	/**
	 * Module
	 */
	angular.module('app').controller('homeController', Home.prototype.controller);
	console.log('homeController');
}());
