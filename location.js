var request = require('request');

function location() {
  
  return new Promise(function(resolve, reject) {
    request({
    url:  "http://freegeoip.net/json/",
    json: true
    }, function(err, response, body) {
      if(err) {
        reject('Unable to get the location');
      }
      else {
        resolve(body);
      }
    });
  });
}

module.exports = location;
