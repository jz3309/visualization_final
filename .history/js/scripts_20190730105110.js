mapboxgl.accessToken = 'pk.eyJ1IjoianozMzA5IiwiYSI6ImNqbGR4amJwMjBnODkza3V2ZzFxMHV0dW0ifQ.lQd9gMzBwlRC_TikwmZTbQ';

// instantiate the map
var map = new mapboxgl.Map({
    container: 'mapContainer',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-74.0059, 40.7577],
    zoom: 12,
});

// // Add zoom and rotation controls to the map.
// map.addControl(new mapboxgl.NavigationControl());

// //add each station as a circle
// map.on('load', function() {
//     //add source
//     map.addSource('pointssource', {
//         type: 'geojson',
//         data: 'https://dl.dropbox.com/s/y2i1chx9ihybfyf/xy_non_requests.geojson?dl=0'
//     });

//     //load  all the itmes to console
// map.addLayer({
//     id: 'nonrequestpoints',
//     type: 'circle',
//     source: 'pointssource',
//     paint: {
//         // make circles larger as the user zooms

//         'circle-stroke-width': 2,
//         'circle-stroke-color': '#f7df26',
//         'circle-color': "#f7df26",
//         'circle-stroke-opacity': 0.1,
//         'circle-radius': {
//             'base': 0.8,
//             'stops': [
//                 [12.5, 2.5],
//                 [18, 10]
//             ]
//         }
//     },

// });
// });

function init() {
    map.addSource('pointssource', {
        type: 'geojson',
        data: 'https://dl.dropbox.com/s/y2i1chx9ihybfyf/xy_non_requests.geojson?dl=0'
    });
    map.addLayer({
        id: 'nonrequestpoints',
        type: 'circle',
        source: 'pointssource',
        paint: {
            // make circles larger as the user zooms

            'circle-stroke-width': 2,
            'circle-stroke-color': '#f7df26',
            'circle-color': "#f7df26",
            'circle-stroke-opacity': 0.1,
            'circle-radius': {
                'base': 0.8,
                'stops': [
                    [12.5, 2.5],
                    [18, 10]
                ]
            }
        },

    });

};


map.once('style.load', function(e) {
    init();
    map.addControl(new mapboxgl.NavigationControl());
    map.on('click', function(e) {
        var features = map.queryRenderedFeatures(e.point, {
            layers: 'nonrequestpoints'
        });
        if (!features.length) {
            return;
        }

    })
});