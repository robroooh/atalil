var win = Ti.UI.createWindow({
	backgroundColor : "#000"
});

var image = Ti.UI.createImageView({
  image:'/images/pornhub-logo.png'
});


var label = Ti.UI.createLabel({
	text : "Landmark",
	width: "auto",
	height : "auto",
	color: "#FFF"
});


/*var count = 0;

Ti.Gesture.addEventListener("shake", function(e){
	count += 1;
	label.text = count;
});*/

win.add(image);

win.add(label);

win.open();