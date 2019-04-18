
mapboxgl.accessToken = 'pk.eyJ1IjoianozMzA5IiwiYSI6ImNqbGR4amJwMjBnODkza3V2ZzFxMHV0dW0ifQ.lQd9gMzBwlRC_TikwmZTbQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v9',
  center: [-73.952,40.739749],
  zoom: 13
});

map.addControl(new mapboxgl.NavigationControl());

// we canot add our own sources and layeres until the base style is finishing loading
map.on('style.load',function()){

//set up the geojson as a source in the map to add visual layers
map.addSource("greenpoint-pluto",{ //just an ID
  type:'geojson', //other:video;
  data:{'./data/greenpoint-pluto.geojson',
  }
});


map.addLayer({
  id:'greenpoint-lots-fill',
  type:'fill',  //check all the type
  source: 'greenpoint-pluto',
  paint:{'fill-color':{
    type:"catergorical",
    property:'landuse',
    stops:[
      [
        '01',
        'blue'
      ],
      [
        '02',
        'yellow'
      ],
      [
        '03',
        'purple'
      ]
    ]
  }
  'fill-opacity':0.7,//transparency
  }
})
})
