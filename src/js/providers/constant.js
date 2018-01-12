/**
 * Constantes providers
 *
 */
(function () {
	"use strict";
	angular.module('app').provider('const_provider', function () {
		this.$get = function ($rootScope, $http) {
			$http.get('./package.json').then(function (conf) {
				$rootScope.configdata = conf.data;
			});
			console.log($rootScope.configdata);
			return {};
		};
	});

}());
