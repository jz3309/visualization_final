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

var hours = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17",
    "18", "19", "20", "21", "22", "23"
];

function filterBy(hour) {
    var filters = ['==', 'Hour', hour];
    map.setFilter('nonrequestpoints', filters);
    document.getElementById('hour').textContent = hours[hour] + ":00";
}


//add each station as a circle
map.on('load', function() {
    //add source
    map.addSource('pointssource', {
        type: 'geojson',
        data: 'https://dl.dropbox.com/s/prjdzwlsbnbryaz/newform2.geojson?dl=0',
    });

    //add station's address as a label

    //load  all the itmes to console
    map.addLayer({
        id: 'nonrequestpoints',
        type: 'circle',
        source: 'pointssource',
        paint: {
            // make circles larger as the user zooms  num_nonrequested
            'circle-opacity': 0.7,
            'circle-stroke-color': 'white',
            "circle-color": {
                property: 'num_nonrequested',
                stops: [
                    [6, '#29928e'],
                    [12, '#7dcc57'],
                    [18, '#f0e340']
                ]
            },
            // [
            //     'interpolate', ['linear'],
            //     ['get', 'num_nonrequested'],
            //     6, '#f1f075',
            //     12, '#e55e5e'
            // ],


            "circle-radius": {
                property: 'num_nonrequested',
                stops: [
                    [6, 3],
                    [12, 6],
                    [18, 9]
                ]
            }
        }


        // [
        //     "step", ["number", "num_nonrequested"],
        //     "#51bbd6",
        //     10,
        //     "#f1f075",
        //     20,
        //     "#f28cb1"
        // ],
        // "circle-radius": [
        //     "step", ["number", "num_nonrequested"],
        //     2,
        //     10,
        //     3,
        //     20,
        //     5
        // ]


    });

    //add slider to filter the price
    document.getElementById('slider').addEventListener('input', function(e) {
        var inputvalue = e.target.value
        filterBy(inputvalue);
    })
});