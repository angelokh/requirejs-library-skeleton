define(function(require) {
  var $ = require('jquery');
  var skeleton = require('skeleton/core');
  skeleton.feature = require('skeleton/feature');
  skeleton.module = require('skeleton/module');
  skeleton.coffeescript = require('cs!skeleton/coffeescript');
  return skeleton;
});
