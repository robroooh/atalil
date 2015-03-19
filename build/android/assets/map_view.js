var MapModule = require('ti.map');
var win = Ti.UI.currentWindow;

var annot = [];

for (var i = 0; i < win.jData.co.length; i++) {

	annot[i] = MapModule.createAnnotation({
		latitude : win.jData.co[i].latitude,
		longitude : win.jData.co[i].longitude,
		image : win.jData.co[i].imgpath,
		title : win.jData.co[i].title
	});

}

var globalLongitude,
    globalLatitude;

Titanium.Geolocation.getCurrentPosition(function(e) {

	if (!e.success || e.error) {
		alert('Could not find the device location');
		return;
	}
	globalLongitude = e.coords.longitude;
	globalLatitude = e.coords.latitude;

});

var mapview = MapModule.createView({
	userLocation : true,
	mapType : MapModule.NORMAL_TYPE,
	region : {
		latitude : globalLatitude,
		longitude : globalLongitude,
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
	backgroundColor : '#e74c3c',
});

// Listen for click events.
takePhotoButton.addEventListener('click', function() {

	var shakew = Titanium.UI.createWindow({
		backgroundColor : "rgb(36,38,37)",
		title : 'Shake it off',
		barColor : 'black',
		url : 'shake.js',
		longitude : globalLongitude,
		latitude : globalLatitude,
		xparent : win
	});

	shakew.open();
});

win.addEventListener('reload', function(e) {

	temp = MapModule.createAnnotation({
		latitude : e.data.latitude,
		longitude : e.data.longitude,
		image : e.data.imgpath,
		title : e.data.title
	});

	win.jData.co.push({
		"latitude" : e.data.latitude.toString(),
		"longitude" : e.data.longitude.toString(),
		"imgpath" : e.data.imgpath.toString(),
		"title" : e.data.title.toString()
	});
	
	alert(win.jData);
	
	for (var i = 0; i < win.jData.co.length; i++) {

		annot[i] = MapModule.createAnnotation({
			latitude : win.jData.co[i].latitude,
			longitude : win.jData.co[i].longitude,
			image : win.jData.co[i].imgpath,
			title : win.jData.co[i].title
		});

	}

	mapview.addAnnotations(annot);
	///write annot to json

	var fileName = 'r.json';
	var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, fileName);
	var json = JSON.stringify(win.jData);
	file.write(json);

});

// Add to the parent view.
win.add(mapview);
win.add(takePhotoButton);
win.open();
