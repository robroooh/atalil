var win = Ti.UI.createWindow({
	backgroundColor : "#FFF"
});

var label = Ti.UI.createLabel({
	text : "Shake",
	width: "auto",
	height : "auto"
});

var count = 0;

Ti.Gesture.addEventListener("shake", function(e){
	count += 1;
	label.text = count;
});

win.add(label);

win.open();