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


//add each station as a circle
map.on('load', function() {
    //add source
    map.addSource('pointssource', {
        type: 'geojson',
        data: 'https://www.dropbox.com/s/ljn10me8dcf16gj/xy_non_requests.csv?dl=0'
    });

    //load  all the itmes to console
    map.addLayer({
        id: 'nonrequestpoints',
        type: 'circle',
        source: 'pointssource',
        paint: {
            // make circles larger as the user zooms

            'circle-stroke-width': 5,
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
});

var hour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0];

function filterBy(hour) {
    var filters = ['==', 'hour', Hour];
}

//add slider to filter the price
document.getElementById('slider').addEventListener('input', function(e) {
    var hour = parseInt(e.target.value, 10);
    filterBy(hour)
});