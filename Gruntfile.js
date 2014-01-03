module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      files: ['src/p.js', 'test/spec.p.js']
    },

    uglify: {
      options: {
        preserveComments: 'all'
      },

      build: {
        files: {
          'src/p.min.js': ['src/p.js']
        }
      }
    },

    jasmine: {
      src: 'src/p.min.js',
      options: {
        specs: 'test/spec.p.js'
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  [
    'grunt-contrib-jshint',
    'grunt-contrib-uglify',
    'grunt-contrib-watch',
    'grunt-contrib-jasmine'
  ].forEach(grunt.loadNpmTasks);

  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('default', ['jshint', 'uglify']);

};