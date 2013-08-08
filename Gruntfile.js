module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    mocha_phantomjs: {
      all: ['js/test/process-admin/mocha-runner.html']
    }

  });


  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['mocha_phantomjs']);

};
