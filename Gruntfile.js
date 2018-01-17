/**
 * Módulos GRUNT ambiente de desenvolvimento
 */
module.exports = grunt => {
	"use strict";
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-htmlmin");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-nodemon");
	grunt.loadNpmTasks("grunt-concurrent");
	grunt.loadNpmTasks("grunt-contrib-copy");
	/**
	 * Definições
	 * Bundle app: Códigos desenvolvidos
	 */
	var app_bundle = [
		"src/js/app/app.js",
		"src/js/app/routes.js",
		"src/js/app/run.js",
		"src/js/controllers/**/*-controller.js",
		"src/js/models/**/*-model.js",
		"src/js/resources/**/*-resource.js",
		"src/js/components/**/*-component.js"
	];
	/**
	 * Definições
	 * Bundle angular: Angular e componentes
	 */
	var angular_bundle = [
		"bower_components/angular/angular.min.js",
		"bower_components/angular-ui-router/release/angular-ui-router.min.js",
		"bower_components/angular-sanitize/angular-sanitize.min.js",
		"bower_components/angular-resource/angular-resource.min.js",
	];
	/**
	 * Definições
	 * Bundle libs
	 */
	var libs_bundle = [
		"bower_components/angular-ui-tree/dist/angular-ui-tree.min.js",
		'bower_components/angular-bootstrap/ui-bootstrap.min.js',
		'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
	];
	/**
	 * Objeto com as tasks
	 */
	var task = {
		sass: null,
		uglify: null,
		htmlmin: null,
		watch: null,
		concat: null,
		clean: null,
		nodemon: null,
		concurrent: null,
		copy: null
	};
	/**
	 * Sass Tasks
	 */
	task.sass = {
		dist: {
			options: {
				style: "compressed",
				sourcemap: "none"
			},
			files: {
				"dist/css/style.min.css": ["src/css/main.scss"]
			}
		}
	};
	/**
	 * Bundle tasks
	 */
	task.uglify = {
		dev: {
			options: {
				preserveComments: true,
				mangle: false,
				beautify: true,
				sourceMap: true,
				output:{
					comments: "all"
				}
			},
			files: {
				"dist/js/app.bundle.js": [...app_bundle]
			}
		},
		prod: {
			options: {
				mangle: false,
				sourceMap: false,
				report: "gzip"
			},
			files: {
				"dist/js/app.bundle.js": [...app_bundle]
			}
		}
	};
	/**
	 * Concat tasks
	 */
	task.concat = {
		basic_and_extras: {
			files: {
				"dist/js/angular.min.js": [...angular_bundle],
				"dist/js/libs.bundle.js": [...libs_bundle]
			}
		}
	};
	/**
	 * Html tasks
	 */
	task.htmlmin = {
		dist: {
			options: {
				removeComments: true,
				collapseWhitespace: true
			},
			files: {
				"dist/index.html": "src/views/template/index.html",
				"dist/header.html": "src/views/template/header.html",
				"dist/footer.html": "src/views/template/footer.html",
				"dist/home.html": "src/views/home/home.html",
				"dist/nodes.html": "src/views/home/nodes.html",
				"dist/tooltip.html": "src/views/home/tooltip.html",
				"dist/form.html": "src/views/home/form.html",
				"dist/about-button.html": "src/views/home/about-button.html",
				"dist/erro.html": "src/views/erro/erro.html",
				"dist/sobre.html": "src/views/sobre/sobre.html"
			}
		}
	};
	/**
	 * Task para desenvolvimento
	 * Observa para mudanças no código.
	 */
	task.watch = {
		files: ["src/views/**/*.html", "src/js/**/*", "src/css/**/*"],
		options: {
			spawn: false
		}
	};
	/**
	 * Apaga o diretório de distribuição a cada novo build
	 */
	task.clean = {
		build: {
			src: ["dist"]
		}
	};
	/**
	 * Task para desenvolvimento
	 * Deamon do server
	 */
	task.nodemon = {
		dev: {
			script: "server.js"
		}
	};
	/**
	 * Task para desenvolvimento
	 * Sobe tarefas em concorrência
	 */
	task.concurrent = {
		options: {
			logConcurrentOutput: true
		},
		tasks: ["watch", "nodemon"]
	};
	/**
	 * Copia os arquivos para o diretório de distribuição
	 */
	task.copy = {
		dev: {
			files: [
				{
					src: ["./data/nodes.json"],
					dest: "dist/"
				},
				{
					expand: true,
					flatten: true,
					src: [
						"bower_components/angular-ui-tree/dist/angular-ui-tree.min.css"
					],
					dest: "dist/css/"
				},
				{
					expand: true,
					flatten: true,
					src: [
						"bower_components/bootstrap-css/css/bootstrap-theme.min.css"
					],
					dest: "dist/css/"
				},
				{
					expand: true,
					flatten: true,
					src: [
						"bower_components/bootstrap-css/css/bootstrap.min.css"
					],
					dest: "dist/css/"
				},
				{
					expand: true,
					flatten: false,
					src: [
						"fonts/*"
					],
					dest: "dist/"
				},
				{
					expand: true,
					flatten: false,
					src: [
						"img/*"
					],
					dest: "dist/"
				},
				{
					expand: true,
					flatten: true,
					src: ["./maps/*.map"],
					dest: "dist/js/"
				}
			]
		},
		prod: {
			files: [
				{
					src: ["./data/nodes.json"],
					dest: "dist/"
				},
				{
					expand: true,
					flatten: true,
					src: [
						"bower_components/angular-ui-tree/dist/angular-ui-tree.min.css"
					],
					dest: "dist/css/"
				}
			]
		}
	};
	/**
	 * Inicializa as configurações
	 */
	grunt.initConfig({
		sass: Object.assign(task.sass),
		uglify: Object.assign(task.uglify),
		concat: Object.assign(task.concat),
		htmlmin: Object.assign(task.htmlmin),
		watch: Object.assign(task.watch),
		clean: Object.assign(task.clean),
		nodemon: Object.assign(task.nodemon),
		concurrent: Object.assign(task.concurrent),
		copy: Object.assign(task.copy)
	});
	/**
	 * Atualizando apenas o que foi alterado
	 */
	grunt.event.on("watch", function(action, filepath) {
		var filename = filepath.replace(/^.*[\\\/]/, "");
		var dist_file = `dist/${filename}`;
		var addfile = {};
		addfile[dist_file] = filepath;
		var extension = filename.split(".").pop();
		switch (extension) {
			case "html":
				grunt.config("watch.tasks", ["clean", "htmlmin"]);
				grunt.config("clean.build.src", dist_file);
				grunt.config("htmlmin.dist.files", Object.assign(addfile));
				break;
			case "js":
				grunt.config("watch.tasks", ["clean", "uglify"]);
				grunt.config("clean.build.src", `dist/js/app.bundle.js`);
				break;
			case "scss":
				grunt.config("watch.tasks", ["clean", "sass"]);
				grunt.config("clean.build.src", `dist/css/style.min.css`);
				break;
		}
	});
	/**
	 * Compilar todo o sistema: $ grunt para desenvolvimento
	 */
	grunt.registerTask("default", [
		"clean",
		"uglify:dev",
		"sass",
		"htmlmin",
		"concat",
		"copy:dev",
		"concurrent"
	]);
	/**
	 * Compilar todo o sistema: $ grunt:prod para produção
	 */
	grunt.registerTask("prod", [
		"clean",
		"uglify:prod",
		"sass",
		"htmlmin",
		"concat",
		"copy:prod"
	]);
};
