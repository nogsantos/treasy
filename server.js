"use strict";
var exec = require('child_process').exec;
var pkg = require("./package.json");
var child = exec(`node_modules/.bin/serve ./dist/${pkg.name}-v${pkg.version}/ --open -p 8080 .`, (error, stdout, stderr) => {
	if (error !== null) {
		console.log('exec error: ' + error);
	}
});
// console.log(child);
// child.on(``, (a) => {
// 	console.table(s);
// 	console.table(a);
// });
