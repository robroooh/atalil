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
<<<<<<< HEAD
<<<<<<< HEAD
	image : '/images/shuck.png',
	bottom : 40,
	width : 300,
	height : 300
=======
=======
>>>>>>> parent of 1d28fc2... make the app more beautiful
	image : 'fap.jpg',
	bottom : "100",
	width : 'auto',
	height : 'auto'
<<<<<<< HEAD
>>>>>>> parent of 1d28fc2... make the app more beautiful
=======
>>>>>>> parent of 1d28fc2... make the app more beautiful
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

var count = 0;

Ti.Gesture.addEventListener("shake", function(e) {
	Titanium.Media.vibrate();
	count += 1;
	countLabel.text = count;

	if (count >= 1) {
<<<<<<< HEAD
<<<<<<< HEAD
		var alertView = Ti.UI.createView({
			width : 250,
			height : 150,
			borderWidth : 2,
			backgroundColor : "black",
		});

		var titleLabel = Ti.UI.createLabel({
			top : 10,
			height : 40,
			left : 10,
			color : "white",
			textAlign : 'center',
			font : {
				fontSize : 20,
				fontWeight : 'bold',
				fontFamily : 'Segoe UI Semibold'
			},
			text : "You Done already!!!"
		});

		alertView.add(titleLabel);

		var ok = Ti.UI.createButton({
			width : 100,
			height : 52,
			bottom : 10,
			left : 10,
			title : 'I can do more',
			font : {
				fontSize : 18,
				fontWeight : 'bold',
				fontFamily : 'Segoe UI Semibold'
			},
			color : '#ecf0f1',
			backgroundColor : '#3498db'

		});

		ok.addEventListener('click', function(e) {
			alertView.hide();
		});

		var b = Titanium.UI.createButton({
			title : 'give up',
			width : 100,
			height : 52,
			bottom : 10,
			right : 10,
			borderRadius : 1,
			font : {
				fontSize : 18,
				fontWeight : 'bold',
				fontFamily : 'Segoe UI Semibold'
			},
			color : '#ecf0f1',
			backgroundColor : '#9b59b6'
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

		alertView.add(ok);
		alertView.add(b);
=======
		alert("3 NOW");
>>>>>>> parent of 1d28fc2... make the app more beautiful
=======
		alert("3 NOW");
>>>>>>> parent of 1d28fc2... make the app more beautiful
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

	var appdata = Titanium.Filesystem.getApplicationDataDirectory();
	var f = Titanium.Filesystem.getFile(appdata, 'A.png');
	f.write(e.img);

	Ti.API.info(f.nativePath);
	// it will return the native path of image

	var d = {
		latitude : win.latitude,
		longitude : win.longitude,
		imgpath : f.nativePath
	};

	win.xparent.fireEvent("reload", {
		data: d
	});
	
	win.close();

});

win.add(label);
win.add(image);
win.add(countLabel);
