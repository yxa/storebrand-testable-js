module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    mocha_phantomjs: {
      all: [ 'test/unit/index.html' ]
    },

    watch: {
      files: [ 'version2/templates/*.tmpl' ],
      tasks: 'default'
    },
    jshint: {
      all: [ 'version2/js/**/*.js' ],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
          globals: {
          define: true,
          require: true,
          sinon: true
        }
      }
    }
  });


  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('fixtures', 'Build template fixture', function() {
    var obj = {};

    var addFile = function(filepath, contents) {
      obj[ filepath.replace('templates/', '') ] = contents;
    };

    var options = {cwd: 'version2/'};

    grunt.file.expand(options, 'templates/*.tmpl').forEach(function(filepath) {
      addFile(filepath, grunt.file.read('version2/' + filepath));
    });

    var src = 'define(function() { return ' + JSON.stringify(obj, null, 2) + '; });';

    grunt.file.write('test/unit/fixtures/templates.js', src);
  });

  grunt.registerTask('default', [ 'test' ]);
  grunt.registerTask('test', [ 'fixtures', 'jshint', 'mocha_phantomjs' ]);

};
