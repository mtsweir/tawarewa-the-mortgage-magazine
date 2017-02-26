
module.exports = function(grunt) {

	// Configure task(s)

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// build and minify js

		uglify: {
			build: {
				src: 'src/js/*.js',
				dest: 'js/scripts.min.js'
			},
			dev: {
				options: {
					beautify: true,
					mangle: false,
					compress: false,
					preserveComments: 'all'
				},
				src: 'src/js/*.js',
				dest: 'js/scripts.js'
			}
		},

		// Run scss and minify css

		sass: {
			dev: {
				options: {
					outputStyle: 'expanded'
				},
				files: {
					'css/style.css' : 'src/scss/app.scss',
					'css/bootstrap.css' : 'src/scss/bootstrap.scss'
				}
			},
			build: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'css/style.css' : 'src/scss/app.scss',
					'css/bootstrap.min.css' : 'src/scss/bootstrap.scss'
				}
			}
		},

		// Watch for changes

		watch: {
			js: {
				files: ['src/js/*.js'],
				tasks: ['uglify:dev']
			},
			css: {
				files: ['src/scss/**/*.scss'],
				tasks: ['sass:dev']
			}
		},

		// Clean folders

		clean: {
		  css: ['css/*.css'],
			js: ['js/*.js']
		}

	});

	// Load the plugins

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-sass');

	// Register task(s)

	grunt.registerTask('default', ['watch', 'uglify:dev', 'sass:dev']);
	grunt.registerTask('build', ['clean', 'uglify:build', 'sass:build']);

};
