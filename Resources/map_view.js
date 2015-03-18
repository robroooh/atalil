var MapModule = require('ti.map');
var win = Ti.UI.currentWindow;

// var opera = MapModule.createAnnotation({
// latitude : -33.8569,
// longitude : 151.2153,
// image : 'dog2.png',
// title : 'Sydney Opera House',
// subtitle : 'Sydney, New South Wales, Australia'
// });

var annot = [];

for (var i = 0; i < win.jData.co.length; i++) {

	annot[i] = MapModule.createAnnotation({
		latitude : win.jData.co[i].latitude,
		longitude : win.jData.co[i].longitude,
		title : win.jData.co[i].title
	});

}

var mapview = MapModule.createView({
	userLocation : true,
	mapType : MapModule.NORMAL_TYPE,
	region : {
		latitude : -33.87365,
		longitude : 151.20689,
		latitudeDelta : 0.1,
		longitudeDelta : 0.1
	},
	annotations : annot
});

// Create a Button.
var takePhotoButton = Ti.UI.createButton({
	title : 'Do the Landmark',
	height : 50,
	width : 250,
	bottom : 10,
	borderRadius : 1,
	font : {
		fontSize : 22,
		fontWeight : 'bold',
		fontFamily : 'Segoe UI Semibold'
	},
	color : '#ecf0f1',
	backgroundColor : '#e74c3c'
});

var globalLongitude,
    globalLatitude;
// Listen for click events.

takePhotoButton.addEventListener('click', function() {

	Titanium.Geolocation.getCurrentPosition(function(e) {

		if (!e.success || e.error) {
			alert('Could not find the device location');
			return;
		}
		globalLongitude = e.coords.longitude;
		globalLatitude = e.coords.latitude;

		//////////////////// ALERT //////////////////

		alert("latitude: " + globalLatitude + "longitude: " + globalLongitude);

	});

	var shakew = Titanium.UI.createWindow({
		backgroundColor : "rgb(36,38,37)",
		title : 'Shake the fuck off',
		barColor : 'black',
		url : 'shake.js',
		longitude : globalLongitude,
		latitude : globalLatitude,
		xparent : win
	});

	shakew.open();
});

win.addEventListener('reload', function(e) {
	var justTake = MapModule.createAnnotation({
		latitude : e.data.latitude,
		longitude : e.data.longitude,
		image : e.data.imgpath,
		title : 'JustTake',
		subtitle : 'HoooRay'
	});

	mapview.addAnnotation(justTake);

});

// Add to the parent view.
win.add(mapview);
win.add(takePhotoButton);

win.open();
