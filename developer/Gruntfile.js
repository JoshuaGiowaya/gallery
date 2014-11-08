//grunt config settings

var gruntTasks = [
    "grunt-contrib-watch",
    "grunt-contrib-jshint",
];
/*******************************************************************************************************
 *
 * Begin the grunt module and task configuration 
 * 
 *******************************************************************************************************/ 
 
module.exports = function (grunt) {
    //Start the grunt config
    grunt.initConfig({

        watch : {
            devCode : {
                files : ['Gruntfile.js'],
                tasks: ['default']
            }
        },

        jshint: {
            all: ['Gruntfile.js']
        }

    });
    
    //Loop through and Load all tasks from the task array above
    (function loadTasks() {
      for(var i = 0; i < gruntTasks.length; i++) {
        grunt.loadNpmTasks(gruntTasks[i]);
      }
    })();

    //running 'grunt' will run both tools
    grunt.registerTask('default', ['jshint']);

};