module.exports = function(grunt){

	// Utilisation du plugin de création de serveur

	grunt.initConfig({
		clean:{
			dist: ['build']
		},
		copy: { // nom de la config
			dev:{
				files: [{
					expand: true,
					src: ['public/**/*.*'],
					dest: 'build/'
				},
				{
					expand: true,
					flatten: true,
					src: ['bower_components/**/angular.min.js',
					'bower_components/**/angular-route.min.js',
					'bower_components/**/ui-bootstrap.min.js'],
					dest: 'build/public/lib'
				}]
			}
		},
		connect: {
			dev: {
				options: {
					base: 'build/public', // dossier de départ
					hostname: 'localhost',
					port: 3000,
					open: true, // ouverture du browser au démarrage
					livereload: true // evite de charger le script livereload.js dans l'html
					// keepalive: true //-- à mettre si connect est lancé tout seul
				}
			}
		},
		watch: {
			dev: {
				files: ['public/**/*.*'],
				tasks: ['copy'],
				options: {
					livereload: true
				}
			}
		}//,
		// karma: {
		// 	unit: {
		// 		configFile: 'karma.conf.js'
		// 	}
		// }
	});

	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadNpmTasks('grunt-contrib-copy');

	//grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('server', ['copy', 'connect', 'watch']); // lancement de plusieurs tâches en meme temps

}