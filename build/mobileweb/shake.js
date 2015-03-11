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
	text : "SHAKE IT OFF!",
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
	count += 1;
	countLabel.text = count;
});

Ti.UI.currentWindow.add(label);
Ti.UI.currentWindow.add(countLabel);
Ti.UI.currentWindow.add(b);

