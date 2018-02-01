#target photoshop
var originalUnits = preferences.rulerUnits;
preferences.rulerUnits = Units.PIXELS;
var width = app.activeDocument.width;
var height = app.activeDocument.height;
String(width.toString() + ' : ' + height.toString());