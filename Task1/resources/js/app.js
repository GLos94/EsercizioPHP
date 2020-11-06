require('./bootstrap');


$(document).ready(init)


function searchCoordinates(){

  var target1 = $('#lat');
  var target2 = $('#long');

  var long;
  var lat;
  var city;

  var placesAutocomplete = places({
      appId: 'pl8W088Q8NFB',
      apiKey: '5f0867802489c340cd8ae9e3a2f0856b',
      container: document.querySelector('#address-input')
    });

    placesAutocomplete.on('change', function(e) {

        long = e.suggestion.latlng.lng
        lat = e.suggestion.latlng.lat
        city = e.suggestion.name


        target1.append(lat);
        target2.append(long);

      });

}


function searchCity(){


  var lat = $('#latitudine').val();
  var long = $('#longitudine').val();

  $.ajax({

    method: 'GET',
    url: 'https://api.opencagedata.com/geocode/v1/json?q='+lat+'+'+long+'&key=590e1f2c887c491490de1b4984b012ff',
    success: function(data) {

      var target = $('.città');
      target.html(data.results[0].formatted);

    },
    error: function(err) {
      console.log('err', err);
    }

  });


}


function map(){
  var long = $('#longitudine').val();
  var lat = $('#latitudine').val();
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2Ficmk4OCIsImEiOiJja2djd21wMGwwdjJiMnhxZmNpejZ3cTlxIn0.BMNLGIm4EjraujV6Y2ZbVQ';
    var map = new mapboxgl.Map({
    container: 'map',    //dove stampo la mappa nella show
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [long, lat],
    zoom: 15,
    });
    map.addControl(new mapboxgl.FullscreenControl());
    var marker = new mapboxgl.Marker()   // marker/puntatore sulla mappa.
    .setLngLat([long, lat])
    .addTo(map)
}




function init(){
  searchCoordinates();

  var target = $('#bottone');
  target.click(searchCity);
  target.click(map);

}
