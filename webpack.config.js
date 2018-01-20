var webpack = require("webpack");
var path = require("path");  //nodejs path
var DIST_DIR = path.resolve(__dirname, "dist"); //build everything to dir folder
var SRC_DIR = path.resolve(__dirname, "src"); 
var config = {
   entry: SRC_DIR + "/app/index.js", //what file to start from, entry file
   output: {
       path: DIST_DIR + "/app",
       filename: "bundle.js", //everything is bundled to it
       publicPath: "/app/"  //webpack dev server, public server on actual server where only is deployed dist
   },
   module: { //for transpile ES6 to ES5
       loaders: [
           {
               test: /\.js/, //which files should webpack look at/test look at all javascript files
               include: SRC_DIR, //where
               loader: "babel-loader", //babel-loader package is pulled by npm
               query: {
                   presets: ["react", "env", "stage-2"] //devDependencies from package.json (just the end name of it)
               }
           }
       ]
   }
};

module.exports = config;