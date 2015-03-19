var win = Ti.UI.currentWindow;


var image = Ti.UI.createImageView({

	image : '/images/shuck.png',
	bottom : 40,
	width : 300,
	height : 300

});

var label = Ti.UI.createLabel({
	text : "Shake it",
	width : "auto",
	height : "auto",
	color : "#FFF",
	top : 150,
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
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
	top : 50,
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

	if (count >= 3) {


		var b = Titanium.UI.createButton({
			title : 'Take a photo',
			width : 200,
			height : 'auto',
			bottom : 20,
			borderRadius : 1,
			font : {
				fontSize : 22,
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

		label.setText("Congratulation!\nYou exercised today!");
		win.add(b);
	}
});

function getImg(result) {
	var img_view = Titanium.UI.createImageView({
		backgroundColor : 'pink',
		height : '100%',
		width : '100%',
		image : result,
	});

	win.add(img_view);

}

win.addEventListener('img', function(e) {
	var img_view = Titanium.UI.createImageView({
		backgroundColor : 'pink',
		height : '100%',
		width : '100%',
		image : e.img,
	});

	win.add(img_view);

	var appdata = Titanium.Filesystem.getApplicationDataDirectory();
	var f = Titanium.Filesystem.getFile(appdata, Math.round(+new Date()/1000));
	f.write(e.img);

	Ti.API.info(f.nativePath);
	// it will return the native path of image

	var d = {
		latitude : win.latitude,
		longitude : win.longitude,
		imgpath : f.nativePath,
		title: Math.round(+new Date()/1000)
	};

	win.xparent.fireEvent("reload", {
		data: d
	});
	
	win.close();

});

win.add(label);
win.add(image);
win.add(countLabel);
