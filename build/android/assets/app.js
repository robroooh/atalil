var win = Ti.UI.createWindow({
	backgroundColor : "#000"
});

var logo = Ti.UI.createImageView({
	image : '/images/pornhub-logo.jpg',
	width : 600,
	height : 353,
	top : 30
});

var label = Ti.UI.createLabel({
	text : "Landmark",
	width : "auto",
	height : "auto",
	color : "#FFF",
	top : 370,
	font : {
		fontFamily : 'Arial',
		fontWeight : 'bold',
		fontSize : 40
	}
});
var jData;

if (!Titanium.App.Properties.hasProperty('firstTime')) {//if it is first time
	var fileName = 'r.json';
	var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, fileName);
	var preParseData = file.read().text;
	// file.read() will return the blob. file.read().text is what you want
	jData = JSON.parse(preParseData);

	Ti.App.Properties.setBool('firstTime', false);
	// do something
} else {
	var fileName = 'r.json';
	var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, fileName);
	alert(file);
	var preParseData = file.read().text;
	// file.read() will return the blob. file.read().text is what you want
	jData = JSON.parse(preParseData);
	alert(JSON.stringify(jData));
}

var button = Ti.UI.createButton({
	title : "Get Started",
	height : 'auto',
	width : 200,
	top : 450,
	borderRadius : 1,
	font : {
		fontSize : 22,
		fontWeight : 'bold',
		fontFamily : 'Segoe UI Semibold'
	},
	color : '#ecf0f1',
	backgroundColor : '#34495e'
});

button.addEventListener('click', function() {

	var mapw = Titanium.UI.createWindow({
		backgroundColor : "#123",
		title : 'Your Location',
		barColor : 'black',
		url : 'map_view.js',
		jData : jData
	});

	mapw.open();
});

win.add(logo);
win.add(label);
win.add(button);

win.open();
