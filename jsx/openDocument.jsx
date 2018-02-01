#target photoshop
var filePath = '';
if (params.filePath) {
    filePath = new Folder(params.filePath);
}else{
    filePath = activeDocument.path;
}
var docLayers = app.activeDocument.layers;
var flowerDoc = app.open(File(filePath));