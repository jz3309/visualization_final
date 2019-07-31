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
                'circle-radius': {
                    property: 'CYC_INJ',
                    base: 3,
                    type: 'interval',
                    stops: [
                        [1, 3],
                        [2, 8],
                        [3, 12]
                    ]
                },
                'circle-opacity': 0.8,
                'circle-blur': 0.5
            },
            'filter': ['>=', 'CYC_INJ', 1]
        },
    },
    'filter': ['>', 'Number_Passengers', 4]
});
});