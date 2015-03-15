var MapModule = require('ti.map');
var win = Ti.UI.createWindow({backgroundColor: 'white'});

var opera = MapModule.createAnnotation({
    latitude: -33.8569,
    longitude: 151.2153,
    image: 'dog2.png',
    title: 'Sydney Opera House',
    subtitle: 'Sydney, New South Wales, Australia'
});

var mapview = MapModule.createView({
	userLocation: true,
    mapType: MapModule.NORMAL_TYPE,
    region: {latitude: -33.87365, longitude: 151.20689, latitudeDelta: 0.1, longitudeDelta: 0.1 },
    annotations: [opera] //< add these annotations upon creation
});

// Add this annotation after creation
win.add(mapview);
win.open();