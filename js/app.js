var apiKey    = "3wXiREz9ofDLRuEj2dogGZaqyRGYG0pkV00cYBZz"
var startDate = '2015-09-07'
var endDate   = '2015-09-10'
var hazardousAsteroids = []; 


$.ajax({
  url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + startDate +'&end_date=' + endDate + '&api_key=' + apiKey,
  method: 'GET',
  dataType: 'json',
}).then(function(data){
  var nearEarthObjects = data.near_earth_objects;
  // console.log(nearEarthObjects);
  for (var prop in nearEarthObjects){
    // console.table(nearEarthObjects[prop]);
    for (var i = 0; i < nearEarthObjects[prop].length; i += 1){
      // console.log(nearEarthObjects[prop][i]);
      var asteroid = nearEarthObjects[prop][i];
      if (asteroid.is_potentially_hazardous_asteroid === true){
        hazardousAsteroids.push(asteroid);
      }
    }
  }
  console.log(hazardousAsteroids);
})




// var person = {
//   name: 'Sarah'
// }


// var propetyName = "name"


// person.name
// person[propetyName]