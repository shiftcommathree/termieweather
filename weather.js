var request = require('request'),
    location = require('./location');

function weather(location) {
  
  return new Promise(function(resolve, reject) {
    
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+ location + "&units=imperial&appid=515bd3d09f899e7cfd8ba672ae1555a6";
  
    request({
      url: url,
      json: true
    }, function(err, response, body) {
      if(err) reject("sorry, unable to get the data");
      else resolve('It\'s ' + body.main.temp + ' in ' + body.name);
    });
  });
}
module.exports = weather;
