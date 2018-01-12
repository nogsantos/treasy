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
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		dist: "dist/<%=pkg.name%>-v<%=pkg.version%>",
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
					],
					'<%=dist%>/js/libs.bundle.js': [
						'bower_components/angular-ui-tree/dist/angular-ui-tree.min.js'
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
					'<%=dist%>/home.html': 'src/views/home/index.html',
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
		copy: {
			main: {
				files: [
					{
						src: ['./package.json'],
						dest: '<%=dist%>/'
					},
				],
			},
		},
		watch: {
			default: {
				files: ['src/views/**/*.html', 'src/js/**/*', 'src/css/**/*'],
				tasks: ['clean:js', 'uglify', 'sass', 'htmlmin', 'cssmin', 'concat'],
				options: {
					spawn: false,
				}
			},
			html: {
				files: ['src/views/**/*.html'],
				tasks: ['clean:html','htmlmin'],
				options: {
					spawn: false,
				}
			},
			js: {
				files: ['src/js/**/*'],
				tasks: ['clean:js','uglify', 'concat'],
				options: {
					spawn: false,
				}
			},
			css: {
				files: ['src/css/**/*'],
				tasks: ['clean:css','sass', 'cssmin'],
				options: {
					spawn: false,
				}
			}
		},
		clean: {
			build: {
				src: ['<%=dist%>']
			},
			js: ['<%=dist%>/js/app.bundle.js'],
			css: ['<%=dist%>/css/style.min.css'],
			html: ['<%=dist%>/*.html'],

		}
	});
	/*
	 * Compilar todo o sistema: $ grunt
	 */
	grunt.registerTask('default', ['clean', 'sass', 'uglify', 'htmlmin', 'cssmin', 'concat', 'copy', 'watch:default']);
	/*
	 * Compilar apenas o html: $ grunt html
	 */
	grunt.registerTask('html', ['htmlmin', 'watch:html']);
	/*
	 * Compilar apenas o css: $ grunt css
	 */
	grunt.registerTask('css', ['sass', 'cssmin', 'watch:css']);
	/*
	 *Compilar apenas o js: $ grunt js
	 */
	grunt.registerTask('js', ['uglify', 'watch:js']);

};
