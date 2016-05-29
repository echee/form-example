module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    uglify: {
        dev: {
            options: {
                sourceMap: 'dist/js/scripts.min.map.js',
                mangle: false,
                beautify: true
            },
            files: {
                'dist/js/scripts.min.js': ['src/js/*.js']
            }
        },
        dist: {
            options: {
                sourceMap: false,
                mangle: true
            },
            files: {
                'dist/js/scripts.min.js': ['src/js/*.js']
            }
        }
    },
    compass: {
      dist: {
        options: {
          outputStyle: 'compressed',
          sassDir: 'src/css',
          cssDir: 'dist/css'
        }
      },
      dev: {
        options: {
          sassDir: 'src/css',
          cssDir: 'dist/css'
        }
      }
    },
    clean: {
      dist: 'dist'
    },
    copy: {
      html: {
        cwd: 'src/html',
        src: '*.html',
        dest: 'dist/',
        expand: true
      }
    },
    watch: {
      scripts: {
        files: ['src/js/*.js', 'Gruntfile.js'],
        tasks: ['jshint', 'uglify:dev']
      },
      styles: {
        files: ['src/css/*.scss'],
        tasks: ['compass:dev']
      },
      static_html: {
        files: ['src/html/*.html', 'src/html/**/*.html'],
        tasks: ['copy:html']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'compass:dev',
    'copy',
    'watch'
  ]);
  grunt.registerTask('build', [
    'clean',
    'compass:dist',
    'copy'
  ]);

};
