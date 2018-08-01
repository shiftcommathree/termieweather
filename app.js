'use strict';

var weather = require('./weather'),
    location = require('./location'),
    argv = require('yargs')
      .option('location', {
        alias: 'l',
        demand: false,
        describe: 'location to fetch weather for',
        type: 'string'
      })
      .help('help')
      .argv;

location().then(function(location) {
  if(typeof argv.l !== 'string' || argv.l.length <= 0) {
    return weather(location.region_name);
  }
  return weather(argv.l);
}, function(error) {
  console.log(error);
}).then(function(weather) {
  console.log(weather);
}, function(error) {
  console.log(error);
});
