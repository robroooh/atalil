for(var MapModule=require("ti.map"),win=Ti.UI.currentWindow,annot=[],i=0;i<win.jData.co.length;i++)annot[i]=MapModule.createAnnotation({latitude:win.jData.co[i].latitude,longitude:win.jData.co[i].longitude,title:win.jData.co[i].title});var mapview=MapModule.createView({userLocation:!0,mapType:MapModule.NORMAL_TYPE,region:{latitude:-33.87365,longitude:151.20689,latitudeDelta:.1,longitudeDelta:.1},annotations:annot}),takePhotoButton=Ti.UI.createButton({title:"Do the Landmark",height:50,width:250,bottom:10,borderRadius:1,font:{fontSize:22,fontWeight:"bold",fontFamily:"Segoe UI Semibold"},color:"#ecf0f1",backgroundColor:"#e74c3c"}),globalLongitude,globalLatitude;takePhotoButton.addEventListener("click",function(){Titanium.Geolocation.getCurrentPosition(function(t){return!t.success||t.error?void alert("Could not find the device location"):(globalLongitude=t.coords.longitude,globalLatitude=t.coords.latitude,void alert("latitude: "+globalLatitude+"longitude: "+globalLongitude))});var t=Titanium.UI.createWindow({backgroundColor:"rgb(36,38,37)",title:"Shake it off",barColor:"black",url:"shake.js",longitude:globalLongitude,latitude:globalLatitude,xparent:win});t.open()}),win.addEventListener("reload",function(t){var e=MapModule.createAnnotation({latitude:t.data.latitude,longitude:t.data.longitude,image:t.data.imgpath,title:"JustTake",subtitle:"HoooRay"});mapview.addAnnotation(e)}),win.add(mapview),win.add(takePhotoButton),win.open();