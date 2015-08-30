/*
	TODO: 
		- abiity to create a loading screen
		

 */

GG.Screen = class Screen {
	constructor() {
		console.log("New screen: ", this);
	}

	preload() {
		console.log("preload: ", this);
	}

	create() {
		console.log("create: ", this);
	}

	update() {
		
	}
};