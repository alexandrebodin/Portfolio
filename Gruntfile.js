module.exports = function(grunt) {

    var conf = {
        webDir      : "public/assets/",
        scssDir     : "scss/",
        cssDir      : "css/",
    };

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // Automatically run a task when a file changes
        watch: {
            css: {
                files: ["**/*.scss"],
                tasks: ['cssroutine'],
                options: {
                    cwd: conf.webDir+conf.scssDir,
                    livereload: true,
                },

            },
        },


        //Compile specified SASS files
        sass: {
            css: {
                files: [{
                    expand: true,
                    cwd: conf.webDir+conf.scssDir,
                    src: ['app.scss'],
                    dest: conf.webDir+conf.cssDir,
                    ext: '.css'
                }],
                options: {                   
                    includePaths: [
                        conf.webDir+conf.scssDir
                    ]
                },

            },
        },

        // Compress generated css files
        cssmin: {
            minify: {
                expand: true,
                cwd: conf.webDir+conf.cssDir,
                src: ['app.css', '!app.min.css'],
                dest: conf.webDir+conf.cssDir,
                ext: '.min.css'
            }
        },

        //Prefix CSS3 properties
        autoprefixer: {
            no_dest: {
              src: conf.webDir+conf.cssDir+'app.css' // globbing is also possible here
            },
        },

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-newer');

    // Default task(s).
    grunt.registerTask('cssroutine', ['sass:css', 'newer:autoprefixer', 'newer:cssmin']);
    grunt.registerTask('default', ['cssroutine']);

};