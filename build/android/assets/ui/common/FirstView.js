function FirstView(){var t=Ti.UI.createView(),e=Ti.UI.createLabel({color:"#000000",text:String.format(L("welcome"),"Titanium"),height:"auto",width:"auto"});return t.add(e),e.addEventListener("click",function(t){alert(t.source.text)}),t}module.exports=FirstView;