'use strict';

var HTMLPostCSS = require('html-postcss');
var minimatch = require('minimatch');

function plugin(postcssPlugins, cheerioOpts, postcssOpts) {
  var processor = new HTMLPostCSS(postcssPlugins);

  return function(files, metalsmith, done) {
    var filtered = Object.keys(files).filter(minimatch.filter('*.html', { matchBase: true }));

    filtered.forEach(function(file) {
      var htmlString = files[file].contents.toString();
      var contents = processor.process(htmlString, cheerioOpts, postcssOpts);
      files[file].contents = new Buffer(contents);
    });

    return done();
  };
}

module.exports = plugin;
