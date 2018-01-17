"use strict";
const {
	exec,
	spawn
} = require('child_process');
/**
 *
 */
var server = () => {
	return spawn('node', ['server.js'], {
		stdio: 'pipe'
	});
};
/**
 *
 */
var protractor = () => {
	var e2e = spawn('./node_modules/.bin/protractor', ['protractor.conf.js'], {
		detached: true,
		stdio: 'pipe'
	});
	e2e.on('close', (code, signal) => {
		console.log(`Pressione CTRL + c para finalizar os testes`);
		exec(`kill ${e2e.pid}`);
	});
	e2e.stdout.on('data', data => {
		console.log(`${data.toString()}`);
	});
};
/**
 *
 */
new Promise(() => server()).then(out => {
	console.log(out);
}).catch(err => {
	console.log(err);
});
/**
 *
 */
new Promise(() => protractor()).then(() => {
	spawn('killall', ['-9 node server.js']);
});
