mapboxgl.accessToken = 'pk.eyJ1IjoianozMzA5IiwiYSI6ImNqbGR4amJwMjBnODkza3V2ZzFxMHV0dW0ifQ.lQd9gMzBwlRC_TikwmZTbQ';

// instantiate the map
var map = new mapboxgl.Map({
    container: 'mapContainer',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-74.0059, 40.7577],
    zoom: 12,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

//add all vehicles 
map.on('load', function() {

    map.addSource('passengers', {
        'type': 'geojson',
        'data': ''
    });

    map.addLayer({
        'id': 'passenger-points-overfour',
        'source': 'passengers',
        'type': 'circle',
        'paint': {
            'circle-color': {
                property: 'CYC_INJ',
                type: 'interval',
                stops: [
                    [1, 'orange'],
                    [2, 'red']
                ]
            },
        },
        'filter': ['>=', 'CYC_INJ', 1]
    });
});