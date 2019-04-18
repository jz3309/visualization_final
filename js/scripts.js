
mapboxgl.accessToken = 'pk.eyJ1IjoianozMzA5IiwiYSI6ImNqbGR4amJwMjBnODkza3V2ZzFxMHV0dW0ifQ.lQd9gMzBwlRC_TikwmZTbQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v9',
  center: [-73.952,40.739749],
  zoom: 13
});

map.addControl(new mapboxgl.NavigationControl());

const LandUseLookup = (code) => {
  switch (code) {
    case 1:
      return {
        color: '#f4f455',
        description: '1 & 2 Family',
      };
    case 2:
      return {
        color: '#f7d496',
        description: 'Multifamily Walk-up',
      };
    case 3:
      return {
        color: '#FF9900',
        description: 'Multifamily Elevator',
      };
    case 4:
      return {
        color: '#f7cabf',
        description: 'Mixed Res. & Commercial',
      };
    case 5:
      return {
        color: '#ea6661',
        description: 'Commercial & Office',
      };
    case 6:
      return {
        color: '#d36ff4',
        description: 'Industrial & Manufacturing',
      };
    case 7:
      return {
        color: '#dac0e8',
        description: 'Transportation & Utility',
      };
    case 8:
      return {
        color: '#5CA2D1',
        description: 'Public Facilities & Institutions',
      };
    case 9:
      return {
        color: '#8ece7c',
        description: 'Open Space & Outdoor Recreation',
      };
    case 10:
      return {
        color: '#bab8b6',
        description: 'Parking Facilities',
      };
    case 11:
      return {
        color: '#5f5f60',
        description: 'Vacant Land',
      };
    case 12:
      return {
        color: '#5f5f60',
        description: 'Other',
      };
    default:
      return {
        color: '#5f5f60',
        description: 'Other',
      };
  }
}; //copy from github


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
        LandUseLookup(1).color,
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
