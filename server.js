var exec = require('child_process').exec;
var pkg = require("./package.json");
var child;

child = exec(`serve ./dist/${pkg.name}-v${pkg.version}/ --open -p 8080 .`, (error, stdout, stderr) => {
	"use strict";
	if (error !== null) {
		console.log('exec error: ' + error);
	}
	console.log(stdout);
});
