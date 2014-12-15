module.exports = function(grunt) {

    var conf = {
        webDir      : "public/assets/",
        scssDir     : "scss/",
        cssDir      : "css/",
        jsDir       : "js/"
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
            js: {
                files: ["**/*.js", "!**/*.min.js"],
                tasks: ['jsroutine'],
                options: {
                    cwd: conf.webDir+conf.jsDir,
                    livereload: true,
                },
            }
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

        // Check js syntax
        jshint: {
            all: {
                src: conf.webDir+conf.jsDir+'app.js',
                options: {
                    jshintrc: true
                }
            }
        },

        // UglifyJS
        uglify: {
            minify: {
                files: [{
                    expand: true,
                    cwd: conf.webDir+conf.jsDir,
                    src: ['**/*.js', '!**/*.min.js', '!**/*.mix.js' , '!vendor/*'],
                    dest: conf.webDir+conf.jsDir,
                    ext: '.min.js'
                }],
            },
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
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-newer');

    // Default task(s).
    grunt.registerTask('cssroutine', ['sass:css', 'newer:autoprefixer', 'newer:cssmin']);
    grunt.registerTask('jsroutine', ['jshint', 'uglify']);
    grunt.registerTask('default', ['cssroutine' , 'jsroutine']);

};