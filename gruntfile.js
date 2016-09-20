module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imageoptim: {
          myTask: {
            src: ['src']
          }
      }
    });

    grunt.loadNpmTasks('grunt-imageoptim');

    grunt.registerTask('default', ['imageoptim']);
};