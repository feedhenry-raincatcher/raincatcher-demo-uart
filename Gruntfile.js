var _ = require('lodash');
var fs = require('fs');

const NW_SETTINGS_NAME = 'run_settings';

var mochaE2EOptions = {
  ui: 'bdd',
  reporter: 'spec',
  timeout: '60s',
  slow: '10s',
  // require: ['mocha-steps']
};

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      all: ["screenshots", "reports", "temp", "selenium-debug.log", "nightwatch-tmp.json"]
    },
    eslint: {
      options: {
        configFile: '.eslintrc'
      },
      all: ['Gruntfile.js','e2e/**/*.js', 'int/**/*.js']
    },
    nightwatch: {
      options: {
        config_path: './nightwatch-tmp.json',
        test_runner: {
          type: 'mocha',
          options: mochaE2EOptions
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-nightwatch');

  // Task to run tests with nightwatch.js test runner
  grunt.task.registerTask('uart', 'UART Test runner',function(env) {
    grunt.task.run('clean');
    grunt.task.run('eslint');
    grunt.task.run('setupRunConfig:' + env);
    grunt.task.run('nightwatch:' + NW_SETTINGS_NAME);
//    grunt.task.run('nightwatch:run_settings');
  });

  grunt.task.registerTask('setupRunConfig', 'Generates config file',function(env, mode) {
    var done = this.async();
    grunt.log.writeln("Assembling config file...");

    if (grunt.option('run_settings')) {
      return done(true); // configuration file already assembled
    }

    env = env || "local";
    var settingsArray = [];
    var nightwatch_json = require('./nightwatch.json');

    if (typeof mode !== 'undefined' && mode !== null) {
      settingsArray.push({
        mode: mode
      });
    }

    if (!nightwatch_json.test_settings[env]) {
      grunt.log.error('Specified environment ' + env + ' does not exist');
      done(false);
    }
    settingsArray.push(nightwatch_json.test_settings[env]);

    _.each(['platform', 'browser'],function(target) {
      if (grunt.option(target)) {
        var targetName = grunt.option(target);

        if (!nightwatch_json.test_settings[targetName]) {
          grunt.log.error('Specified environment ' + targetName + ' does not exist');
          done(false);
        }
        settingsArray.push(nightwatch_json.test_settings[targetName]);
      }
    });

    // merge settings
    var runSettings = _(_.union(settingsArray)).reduce(function(memo, object) {
      return _.merge(memo, object);
    });

    var prefix = grunt.option('prefix') || "fh-uart-";
    runSettings.globals.prefix = prefix;

    grunt.log.debug("Assembling nightwatch-run.json with the following settings:");
    grunt.log.debug(JSON.stringify(runSettings));

    nightwatch_json.test_settings[NW_SETTINGS_NAME] = runSettings;
    fs.writeFileSync('./nightwatch-tmp.json', JSON.stringify(nightwatch_json, undefined, 2));
    done();
  });
};