var win=Ti.UI.createWindow({backgroundColor:"#000"}),logo=Ti.UI.createImageView({image:"/images/pornhub-logo.jpg",width:300,height:300,top:30}),label=Ti.UI.createLabel({text:"Landmark",width:"auto",height:"auto",color:"#FFF",top:300,font:{fontFamily:"Arial",fontWeight:"bold",fontSize:40}}),button=Ti.UI.createButton({title:"Help The World!",height:40,width:200,top:450});button.addEventListener("click",function(){var t=Titanium.UI.createWindow({backgroundColor:"#123",title:"New Window",barColor:"black",url:"shake.js"});t.open()}),win.add(logo),win.add(label),win.add(button),win.open();