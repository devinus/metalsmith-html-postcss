'use strict';

var proxyquire = require('proxyquire').noCallThru();
var expect = require('chai').expect;

var name = require('../package.json').name;

var pluginDef = proxyquire('../lib/plugin', {
  'html-postcss': function() {
    this.process = function() {
      return 'PROCESSED';
    };
  }
});

describe(name, function() {
  var robotsTxt = 'User-agent: *\nDisallow:';
  var plugin;

  var files = {
    'favicon.ico': { contents: new Buffer([]) },
    'index.html': { contents: new Buffer('<html></html>') },
    'robots.txt': { contents: new Buffer(robotsTxt) }
  };

  beforeEach(function() {
    plugin = pluginDef();
  });

  it('#constructor', function() {
    expect(plugin).to.be.ok;
    expect(plugin).to.have.length(3);
  });

  it('processes only *.html files', function(done) {
    return plugin(files, {}, function() {
      expect(files['favicon.ico'].contents.toString()).to.equal('');
      expect(files['index.html'].contents.toString()).to.equal('PROCESSED');
      expect(files['robots.txt'].contents.toString()).to.equal(robotsTxt);
      return done();
    });
  });
});
