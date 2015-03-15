var win = Ti.UI.createWindow({
	backgroundColor : "#000"
});

var logo = Ti.UI.createImageView({
	image: '/images/pornhub-logo.jpg',
	width:300,
	height:300,
	top:30
});


var label = Ti.UI.createLabel({
	text : "Landmark",
	width: "auto",
	height : "auto",
	color: "#FFF",
	top:300,
	font:{
		fontFamily:'Arial',
		fontWeight:'bold',
		fontSize:40
		}
});

var button = Ti.UI.createButton({
	 title: "Help The World!",
	 height: 40,
	 width: 200,
	 top:450
});

button.addEventListener('click', function() {
	
 var w = Titanium.UI.createWindow({
 		backgroundColor : "#123",
        title:'New Window',
        barColor:'black',
        url:'shake.js'
    });

    w.open();
});
  

win.add(logo);
win.add(label);
win.add(button);

win.open();