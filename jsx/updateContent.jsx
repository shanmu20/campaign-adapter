#target photoshop
var layerContent = '';
if (params.layerContent) {
    layerContent = params.layerContent;
}else{
    layerContent = activeDocument.path;
}
alert(layerContent);
if(app.documents.length != 0){
    var doc = app.activeDocument;
	var group3 = app.activeDocument.layers[1];
	var group3layer = group3.layers[0];
		
        if(group3layer.kind == LayerKind.TEXT){
			alert('ok');
            group3layer.textItem.contents = layerContent;
        }
    
}