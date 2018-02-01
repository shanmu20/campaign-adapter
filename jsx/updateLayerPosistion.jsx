#target photoshop
var dimension = params.dimension;

	var sourceDoc = app.activeDocument;
    preferences.rulerUnits = Units.PIXELS;  
    var mainDoc = app.documents.add (dimension.width, dimension.height, 300, dimension.width + 'x' + dimension.height, NewDocumentMode.RGB);  
	app.activeDocument = mainDoc; 
	var newLayer = app.activeDocument.artLayers.add();
    app.activeDocument = sourceDoc;   
	
	for(var i = 1; i<sourceDoc.layers.length; i++){
		app.activeDocument = sourceDoc; 
		sourceDoc.layers[i].duplicate (mainDoc, ElementPlacement.PLACEATEND);  
		app.activeDocument = mainDoc;
		if(dimension[mainDoc.layers[i].name].x != undefined && dimension[mainDoc.layers[i].name].x != ''){
			positionLayer(mainDoc.layers[i], dimension[mainDoc.layers[i].name].x, dimension[mainDoc.layers[i].name].y );
		}
	}
	app.activeDocument = mainDoc;
	try{
	 var Path = app.activeDocument.path; 
	 alert(Path);
	}catch(e){
		alert(e);
	}
	 var SaveFile = File(Path + "/" + dimension.width + 'x' + dimension.height +".psd"); 
    if(SaveFile.exists) SaveFile.remove(); 
    SavePSD(SaveFile);
	app.activeDocument.close();
	

function positionLayer( lyr, x, y ){
     if(lyr.iisBackgroundLayer||lyr.positionLocked) return  
     var layerBounds = lyr.bounds;  
     var layerX = layerBounds[0].value;  
     var layerY = layerBounds[1].value;  
     var deltaX = x-layerX;  
     var deltaY = y-layerY;  
     lyr.translate (deltaX, deltaY);  
} 

function SavePSD(saveFile)
{
  var psdFile = new File(saveFile);
  psdSaveOptions = new PhotoshopSaveOptions();
  psdSaveOptions.embedColorProfile = true;
  psdSaveOptions.alphaChannels = true;  
  activeDocument.saveAs(psdFile, psdSaveOptions, false, Extension.LOWERCASE);
}