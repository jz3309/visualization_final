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
//datafields: Timestamp Vehicle_ID	Latitude	Longitude	Num_Passengers
//1380949200	83	40.73062	-73.99065	6

map.on('load', function() {

    map.addSource('passengers', {
        'type': 'geojson',
        'data': 'https://dl.dropbox.com/s/z4hajzr32e59kv4/nyc_pedcyc_collisions_1.geojson?dl=0'
    });

    map.addLayer({
        'id': 'passenger-points-overfour',
        'source': 'passengers',
        'type': 'circle',
        'paint': {
            'circle-color': {
                property: 'Num_Passengers',
                type: 'interval',
                stops: [
                    [8, 'orange'],
                    [15, 'red']
                ]
            },
            'circle-radius': {
                property: 'Num_Passengers',
                base: 3,
                type: 'interval',
                stops: [
                    [8, 3],
                    [15, 8],
                    [22, 12]
                ]
            },
            'circle-opacity': 0.8,
            'circle-blur': 0.5
        },
        'filter': ['>', 'Num_Passengers', 4]
    });

});