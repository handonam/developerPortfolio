'use strict';

var pkg = require('./package.json');

module.exports = function(grunt)
{
  var files = {};
  files.css = [
    'client/public/css/dist/**/*.css'
  ];

  grunt.initConfig({

    browserify: {
      js: {
        // A single entry point for our app
        src: 'src/js/app.js',
        // Compile to a single file to add a script tag for in your HTML
        dest: 'dist/js/app.js',
      },
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: '**/*.scss',
          dest: 'dist/css',
          ext: '.css'
        }]
      }
    },

    postcss: {
      options: {
        map: true, // inline sourcemaps
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
        ]
      },
      dist: {
        src: 'dist/css/index.css'
      }
    },

    cssmin: {
      options: {
        sourceMap: grunt.cli.tasks.indexOf('dev') !== -1,
      },
      target: {
        files: {
          'dist/css/index.min.css': ['dist/css/index.css']
        }
      }
    },

    watch: {
      css: {
        files: [
          'src/scss/**/*.scss',
        ],
        tasks: ['taskCss'],
        options: {
          spawn: false,
        },
      },
      js: {
        files: [
          'src/js/**/*.js',
        ],
        tasks: ['taskJs'],
        options: {
          spawn: false,
        },
      }
    },

    clean: {
      prod: {
        src: [
        'dist/css',
        'dist/css/*.css',
        'dist/css/*.map',
        '!dist/css/*.min.css'
        ]
      },
      dev: {
        src: [
        'dist/css'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('taskCss', ['sass', 'postcss', 'cssmin'])
  grunt.registerTask('taskJs', ['browserify'])
  grunt.registerTask('default', ['clean', 'taskCss', 'taskJs']);
  grunt.registerTask('prod', ['default']);
  grunt.registerTask('dev', ['default', 'watch']);
};
