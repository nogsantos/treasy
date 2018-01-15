"use strict";
var { exec } = require("child_process");
var server = exec(`./node_modules/.bin/serve ./dist/ -p 8080 -C -s`, error => {
	if (error !== null) {
		console.error("exec error: " + error);
	}
});
console.log(`The servers starts on http://127.0.0.1:8080 ${server.pid}`);
