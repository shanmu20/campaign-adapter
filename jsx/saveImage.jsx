#target photoshop
var outputFolder = '';
if (params.outputPath) {
    outputFolder = new Folder(params.outputPath);
}else{
    outputFolder = activeDocument.path;
}
var docLayers = app.activeDocument.layers;
var len = docLayers.length;
for(var i = 0; i < len; i++)
{
	docLayers[i].visible = false;
}
for(var i = 0; i < len; i++) {
		var currentLayer = docLayers[i];
		currentLayer.visible = true;
		var saveFile =  File( outputFolder + "/" + currentLayer.name + ".png");
        SavePNG(saveFile);
		currentLayer.visible = false;
}
docLayers[len-1].visible = true;
docLayers[0].visible = true;
function SavePNG(saveFile){
    var pngOpts = new ExportOptionsSaveForWeb; 
    pngOpts.format = SaveDocumentType.PNG
    pngOpts.PNG8 = false; 
    pngOpts.transparency = true; 
    pngOpts.interlaced = false; 
    pngOpts.quality = 100;
    activeDocument.exportDocument(new File(saveFile),ExportType.SAVEFORWEB,pngOpts); 
}
String(len);