"use strict";
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {
    SpecReporter
} = require('jasmine-spec-reporter');

exports.config = {
	allScriptsTimeout: 11000,
	specs: [
		'./e2e/**/*.e2e-spec.js'
	],
	capabilities: {
		'browserName': 'chrome'
	},
	directConnect: true,
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000,
		print: function () {}
	},
    onPrepare() {
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    }
};
