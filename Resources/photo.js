var win = Ti.UI.currentWindow;

Titanium.Media.showCamera({
	success : function(event) {
		var img_view = Titanium.UI.createImageView({
			backgroundColor : 'pink',
			height : '100%',
			width : '100%',
		});

		img_view.setImage(event.media);

		win.xparent.fireEvent("img", {
			img : event.media
		});
		
		win.add(img_view);
		win.close();
	},
	cancel : function() {
	},
	error : function(error) {
		win.close();
	},
});
