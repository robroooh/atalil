var win=Ti.UI.createWindow({backgroundColor:"#000"}),logo=Ti.UI.createImageView({image:"/images/pornhub-logo.jpg",width:600,height:353,top:30}),label=Ti.UI.createLabel({text:"Landmark",width:"auto",height:"auto",color:"#FFF",top:370,font:{fontFamily:"Arial",fontWeight:"bold",fontSize:40}}),jData,fileName="r.json",file=Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,fileName),preParseData=file.read().text;jData=JSON.parse(preParseData),Ti.App.Properties.setBool("firstTime",!1);var button=Ti.UI.createButton({title:"Help The World!",height:"auto",width:200,top:450});button.addEventListener("click",function(){var e=Titanium.UI.createWindow({backgroundColor:"#123",title:"Your Location",barColor:"black",url:"map_view.js",jData:jData});e.open()}),win.add(logo),win.add(label),win.add(button),win.open();