(function () {
    "use strict";
	const fs = require('fs');
	const copy = require('recursive-copy'); 
	const rimraf = require('rimraf');
	const path = require('path');
	const pluginBasePath = path.resolve(__dirname);
	var pluginPath = 'test/plugins/adaptation/';
    var jsxPath = '../' + pluginPath + 'jsx/';
	var masterPsdDetails;
	
    var PLUGIN_ID = 'adaptation',
        MENU_ID = "adaptation",
        MENU_LABEL = "$$$/JavaScripts/Generator/adaptation/Menu=adaptation";
    
    var generator;
    var adaptDimension = {
	"dimensions": [{
		"width": 300,
		"height": 600,
		"logo": {
			"x": 20,
			"y": 20
		},
		"btn": {
			"x": 50,
			"y": 500
		},
		"text": {
			"x": 50,
			"y": 250
		}
	}]
}

    function init(generator) {
        generator = generator;
        
        generator.addMenuItem(MENU_ID, MENU_LABEL, true, false).then(
            function () {
                console.log("Menu created", MENU_ID);
            }, function () {
                console.error("Menu creation failed", MENU_ID);
            }
        );
        generator.onPhotoshopEvent("generatorMenuChanged", handleGeneratorMenuClicked);
		generator.getDocumentInfo().then(
			function(document){
				masterPsdDetails = document;
			}
		).done();
		
    /*********** EVENTS ***********/
    function handleGeneratorMenuClicked(event) {
        // Ignore changes to other menus
        var menu = event.generatorMenuChanged;
        if (!menu || menu.name !== MENU_ID) {
            return;
        }

        
        console.log('menu clicked');
		
		console.log(adaptDimension.dimensions[0]);
		generator.evaluateJSXFile(jsxPath + 'updateLayerPosistion.jsx', {dimension : adaptDimension.dimensions[0] })
		.then(
			function(res){
			
			},
			function(err){} 
		).done();

		
    }
	
	
    }
	function stringify(object) {
        try {
            return JSON.stringify(object, null, "    ");
        } catch (e) {
            console.error(e);
        }
        return String(object);
    }


    exports.init = init;    
}());

