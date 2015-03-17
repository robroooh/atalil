var win = Ti.UI.currentWindow;

var b = Titanium.UI.createButton({
	title : 'Take a Photo',
	bottom : 20,
	width : "300",
	height : "auto"
});

b.addEventListener('click', function() {
	var photow = Titanium.UI.createWindow({
		backgroundColor : "#123",
		title : 'take a photo',
		barColor : 'black',
		url : 'photo.js',
		xparent : win
	});

	photow.open();
});

var image = Ti.UI.createImageView({
	image : 'fap.jpg',
	bottom : "100",
	width : 'auto',
	height : 'auto'
});

var label = Ti.UI.createLabel({
	text : "ชักว่าวสิ",
	width : "auto",
	height : "auto",
	color : "#FFF",
	top : 150,
	font : {
		fontFamily : 'Arial',
		fontWeight : 'bold',
		fontSize : 24
	}
});

var countLabel = Ti.UI.createLabel({
	text : "0",
	width : "auto",
	height : "auto",
	color : "#FFF",
	top : 10,
	font : {
		fontFamily : 'Arial',
		fontWeight : 'bold',
		fontSize : 30
	}
});

var count = 1;

Ti.Gesture.addEventListener("shake", function(e) {
	Titanium.Media.vibrate();
	count += 1;
	countLabel.text = count;

	if (count >= 1) {
		alert("3 NOW");
		label.setText("Congratulation!\nYou just save the world!");
		win.add(b);
	}
});

function getImg(result) {
	alert("getImg called");
	var img_view = Titanium.UI.createImageView({
		backgroundColor : 'pink',
		height : '100%',
		width : '100%',
		image : result,
	});

	win.add(img_view);

}

win.addEventListener('img', function(e) {
	alert("event img called");
	var img_view = Titanium.UI.createImageView({
		backgroundColor : 'pink',
		height : '100%',
		width : '100%',
		image : e.img,
	});

	win.add(img_view);

	var parent = Titanium.Filesystem.getApplicationDataDirectory();
	var f = Titanium.Filesystem.getFile(parent, 'A.png');
	f.write(e.img);
	
	Ti.API.info(f.nativePath);
	// it will return the native path of image
	
	
});

win.add(label);
win.add(image);
win.add(countLabel);
