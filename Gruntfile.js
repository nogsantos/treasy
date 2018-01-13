/**
 * Módulos GRUNT ambiente de desenvolvimento
 */
module.exports = (grunt) => {
	"use strict";
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');

	grunt.initConfig({
		dist: "dist",
		filepath: "",
		sass: {
			dist: {
				options: { // Target options
					style: 'compressed'
				},
				files: {
					'<%=dist%>/css/style.min.css': [
						"src/css/main.scss"
					]
				}
			}
		},
		uglify: {
			my_target: {
				options: {
					preserveComments: false,
					mangle: false,
					beautify: false,
					report: 'gzip'
				},
				files: {
					'<%=dist%>/js/app.bundle.js': [
						'src/js/app/app.js',
						'src/js/app/routes.js',
						'src/js/app/run.js',
						'src/js/providers/*.js',
						'src/js/controllers/**/*-controller.js',
					]
				}
			}
		},
		concat: {
			basic_and_extras: {
				files: {
					'<%=dist%>/js/angular.min.js': [
						'bower_components/angular/angular.min.js',
						'bower_components/angular-ui-router/release/angular-ui-router.min.js',
						'bower_components/angular-sanitize/angular-sanitize.min.js',
					],
					'<%=dist%>/js/libs.bundle.js': [
						'bower_components/angular-ui-tree/dist/angular-ui-tree.min.js'
					]
				},
			},
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'<%=dist%>/index.html': 'src/views/template/index.html',
					'<%=dist%>/header.html': 'src/views/template/header.html',
					'<%=dist%>/footer.html': 'src/views/template/footer.html',
					'<%=dist%>/home.html': 'src/views/home/home.html',
					'<%=dist%>/error.html': 'src/views/error/error.html',
				}
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'<%=dist%>/css/layout.min.css': [
						'bower_components/angular-ui-tree/dist/angular-ui-tree.min.css',
					]
				}
			}
		},
		watch: {
			files: ['src/views/**/*.html', 'src/js/**/*', 'src/css/**/*'],
			options: {
				spawn: false
			}
		},
		clean: {
			build: {
				src: ['<%=dist%>']
			}
		},
		nodemon: {
			dev: {
				script: 'server.js'
			}
		},
		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			tasks: ['watch', 'nodemon']
		}
	});
	/**
	 * Atualizando apenas o que foi alterado
	 */
	grunt.event.on('watch', function (action, filepath) {
		var filename = filepath.replace(/^.*[\\\/]/, '');
		var dist_file = `<%=dist%>/${filename}`;
		var addfile = {};
		addfile[dist_file] = filepath;
		var extension = filename.split('.').pop();
		switch (extension) {
			case 'html':
				grunt.config('watch.tasks', ['clean', 'htmlmin']);
				grunt.config('clean.build.src', dist_file);
				grunt.config('htmlmin.dist.files', Object.assign(addfile));
				break;
			case 'js':
				grunt.config('watch.tasks', ['clean', 'uglify']);
				grunt.config('clean.build.src', `<%=dist%>/js/app.bundle.js`);
				break;
			case 'scss':
				grunt.config('watch.tasks', ['clean', 'sass', 'cssmin']);
				grunt.config('clean.build.src', `<%=dist%>/css/style.min.css`);
				break;
		}
	});
	/*
	 * Compilar todo o sistema: $ grunt
	 */
	grunt.registerTask('default', ['clean', 'uglify', 'sass', 'htmlmin', 'cssmin', 'concat', 'concurrent']);
};
