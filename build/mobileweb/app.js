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

if (!Titanium.App.Properties.hasProperty('firstTime')) { //if it is first time

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
	var preParseData = file.read().text;
	// file.read() will return the blob. file.read().text is what you want
	jData = JSON.parse(preParseData);

}

var button = Ti.UI.createButton({
	title : "Help The World!",
	height : 'auto',
	width : 200,
	top : 450
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

//TAE WAS HERE
win.add(logo);
win.add(label);
win.add(button);

win.open();
