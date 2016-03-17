var testacular=require("testacular");module.exports=function(s){s.loadNpmTasks("grunt-recess"),s.initConfig({builddir:"build",pkg:"<json:package.json>",meta:{banner:'/**\n * <%= pkg.description %>\n * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n * @link <%= pkg.homepage %>\n * @license MIT License, http://www.opensource.org/licenses/MIT\n */'},concat:{build:{src:["<banner:meta.banner>","common/*.js"],dest:"<%= builddir %>/<%= pkg.name %>.js"},ieshiv:{src:["<banner:meta.banner>","common/ieshiv/*.js"],dest:"<%= builddir %>/<%= pkg.name %>-ieshiv.js"}},min:{build:{src:["<banner:meta.banner>","<config:concat.build.dest>"],dest:"<%= builddir %>/<%= pkg.name %>.min.js"},ieshiv:{src:["<banner:meta.banner>","<config:concat.ieshiv.dest>"],dest:"<%= builddir %>/<%= pkg.name %>-ieshiv.min.js"}},recess:{build:{src:["common/**/*.less"],dest:"<%= builddir %>/<%= pkg.name %>.css",options:{compile:!0}},min:{src:"<config:recess.build.dest>",dest:"<%= builddir %>/<%= pkg.name %>.min.css",options:{compress:!0}}},lint:{files:["grunt.js","common/**/*.js","modules/**/*.js"]},watch:{files:["modules/**/*.js","common/**/*.js","templates/**/*.js"],tasks:"build test"}}),s.registerTask("default","build test"),s.registerTask("build","build all or some of the angular-ui modules",function(){var e=s.config("concat.build.src"),t=[];this.args.length>0?(this.args.forEach(function(n){var r=s.file.expandFiles("modules/*/"+n+"/*.js"),i=s.file.expandFiles("modules/*/"+n+"/stylesheets/*.less","modules/*/"+n+"/*.less");e=e.concat(r),t=t.concat(i)}),s.config("concat.build.src",e),s.config("recess.build.src",t)):(s.config("concat.build.src",e.concat(["modules/*/*/*.js"])),s.config("recess.build.src",t.concat(s.config("recess.build.src")))),s.task.run("concat min recess:build recess:min")}),s.registerTask("dist","change dist location",function(){var e=this.args[0];e&&s.config("builddir",e)}),s.registerTask("server","start testacular server",function(){var s=this.async();testacular.server.start({configFile:"test/test-config.js"})}),s.registerTask("test","run tests (make sure server task is run first)",function(){var e=this.async();s.utils.spawn({cmd:"win32"===process.platform?"testacular.cmd":"testacular",args:process.env.TRAVIS?["start","test/test-config.js","--single-run","--no-auto-watch","--reporters=dots","--browsers=Firefox"]:["run"]},function(t,n,r){t?(s.warn("Make sure the testacular server is online: run `grunt server`.\nAlso make sure you have a browser open to http://localhost:8080/.\n"+t.stdout+t.stderr),setTimeout(e,1e3)):(s.log.write(n.stdout),e())})})};