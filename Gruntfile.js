/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    stylus: {
      compile: {
        options: {
          urlfunc: 'embedurl',
          use: [
            require('nib') // use stylus plugin at compile time
          ]
        },
        files: {
          'style.css': 'stylus/index.styl'
        }
      }
    },

    watch: {
        options: {
            livereload: true
        },
        stylus: {
            files: 'stylus/**',
            tasks: 'stylus'
        }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  // Default task.
  grunt.registerTask('default', ['stylus', 'watch']);

};
