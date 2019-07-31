mapboxgl.accessToken = 'pk.eyJ1IjoianozMzA5IiwiYSI6ImNqbGR4amJwMjBnODkza3V2ZzFxMHV0dW0ifQ.lQd9gMzBwlRC_TikwmZTbQ';

// instantiate the map
var map = new mapboxgl.Map({
    container: 'mapContainer',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-74.0059, 40.7177],
    zoom: 12,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

//add manhattan geogson
map.on('load', function() {

    map.addSource('manhattangeojson', {
        'type': 'vector',
        'url': 'https://raw.githubusercontent.com/jz3309/ADS/master/manhattan.geojson'
    });

    map.addLayer({
        'id': 'manhattan-geogson',
        'source': 'manhattangeojson',
        'type': 'fill',
        'fill-opacity': 0.75,
    });
});