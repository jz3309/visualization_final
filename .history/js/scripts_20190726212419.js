mapboxgl.accessToken = 'pk.eyJ1IjoianozMzA5IiwiYSI6ImNqbGR4amJwMjBnODkza3V2ZzFxMHV0dW0ifQ.lQd9gMzBwlRC_TikwmZTbQ';

// instantiate the map
var map = new mapboxgl.Map({
    container: 'mapContainer',
    style: 'mapbox://styles/mapbox/darks-v11',
    center: [40.7127, -74.0059],
    zoom: 14,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());