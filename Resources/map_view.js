var MapModule = require('ti.map');
var win = Ti.UI.currentWindow;

var opera = MapModule.createAnnotation({
	latitude : -33.8569,
	longitude : 151.2153,
	image : 'dog2.png',
	title : 'Sydney Opera House',
	subtitle : 'Sydney, New South Wales, Australia'
});

var mapview = MapModule.createView({
	userLocation : true,
	mapType : MapModule.NORMAL_TYPE,
	region : {
		latitude : -33.87365,
		longitude : 151.20689,
		latitudeDelta : 0.1,
		longitudeDelta : 0.1
	},
	annotations : [opera] //< add these annotations upon creation
});

// Create a Button.
var takePhotoButton = Ti.UI.createButton({
	title : 'takePhotoButton',
	height : 50,
	width : 300,
	bottom : 0
});
var globalLongitude, globalLatitude;
// Listen for click events.
takePhotoButton.addEventListener('click', function() {
	
	Titanium.Geolocation.getCurrentPosition(function(e) {

		if (!e.success || e.error) {
			alert('Could not find the device location');
			return;
		}
		globalLongitude = e.coords.longitude;
		globalLatitude = e.coords.latitude;

		alert("latitude: " + globalLatitude + "longitude: " + globalLongitude);

	});
	
	var shakew = Titanium.UI.createWindow({
		backgroundColor : "#123",
		title : 'New Window',
		barColor : 'black',
		url : 'shake.js',
		longitude : globalLongitude,
		latitude: globalLatitude
	});

	shakew.open();
});

// Add to the parent view.
win.add(mapview);
win.add(takePhotoButton);
win.open();
