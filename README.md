# campaign-adapter
This repository contains a plug-in for Adobe Photoshop CC's Generator extensibility layer, which automatically creates .psd in various dimensions from the master design file.

# Usage

1. First clone [Generator Core repo](https://github.com/adobe-photoshop/generator-core). And run **npm install**. For more configuration details of 'Generator Core' checkout the [documentation here](https://github.com/adobe-photoshop/generator-core/wiki/Generator-Development-Environment-Setup)
2. Clone this repo files under  /PATH TO GENERATOR CORE FILES/test/plugins/ and navigate to 'campaign-adapter' folder and run **npm install** After this go the root directory (Generator Core) and run **node app -f test/plugins/**. This is will create you a menu called 'adaptation' under **File->Generate**. 
3. Open any master .psd file and click the menu 'adaptation' it will create other dimensions .psd file.
