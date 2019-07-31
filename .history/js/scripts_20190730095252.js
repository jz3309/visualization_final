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

//add popup when hover to show more information
var popup = new mapboxgl.Popup({});

map.on('mouseenter', 'nonrequestpoints', function(e) {
    map.getCanvas().style.cursor = 'pointer';

    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.StationName;
    var prices = e.features[0].properties.AvgTestFees;
    var phonenumber = e.features[0].properties.PhoneNumber
    var address = e.features[0].properties.Address
    var zip = e.features[0].properties.ZIP
    var city = e.features[0].properties.City



    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    popup.setLngLat(coordinates)
        .setHTML('<h4>' + description + '</h4>' + '</br>' + '<h7>' + 'Price: $' + prices + '</h7>' + '</br><h7>' + 'Phone Number: ' + phonenumber + '</h7>' +
            '</br><h7>' + 'Address: ' + address + '</h7>' + '</br><h7>' + 'ZipCode: ' + zip + '</h7>')
        .addTo(map);

});

map.on('mouseleave', 'nonrequestpoints', function() {
    map.getCanvas().style.cursor = '';
});


//add slider to filter the price
document.getElementById('slider').addEventListener('input', function(e) {
    var fee = parseInt(e.target.value);
    // update the map
    map.setFilter('stationpoints', ['<', ['number', ['get', 'AvgTestFees']], fee]);

    // update text when slide the bar
    document.getElementById('fee-filter').innerText = fee
});