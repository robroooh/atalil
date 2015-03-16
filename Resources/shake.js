var win = Ti.UI.currentWindow;

alert("latitude: " + win.latitude + "longitude: " + win.longitude);

var b = Titanium.UI.createButton({
	title:'Close',
	top:400,
	width:"auto",
	height:"auto"
});
    
b.addEventListener('click',function(){
	Ti.UI.currentWindow.close();
});



var label = Ti.UI.createLabel({
	text : win.longitude,
	width: "auto",
	height : "auto",
	color: "#FFF",
	top:150,
	font:{
		fontFamily:'Arial',
		fontWeight:'bold',
		fontSize:40
	}
});

var countLabel  = Ti.UI.createLabel({
	text : "0",
	width: "auto",
	height : "auto",
	color: "#FFF",
	top:300,
	font:{
		fontFamily:'Arial',
		fontWeight:'bold',
		fontSize:30
	}
});

var count = 0;

Ti.Gesture.addEventListener("shake", function(e){
	Titanium.Media.vibrate();
	count += 1;
	countLabel.text = count;
});

win.add(label);
win.add(countLabel);
win.add(b);

