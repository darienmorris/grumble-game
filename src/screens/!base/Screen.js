/*
	TODO: 
		- abiity to create a loading screen
		

 */

GG.Screen = class Screen {
	constructor() {
		console.log("New screen: ", this);
		this._images = [];
		this.sprite = {};
	}

	preload() {
		console.log("preload: ", this);
		this.loadImages();
	}

	create() {
		console.log("create: ", this);
	}

	update() {
		
	}

	loadImages() {
		if(this._images.length){
			this._images.forEach(function(image){
				game.load.image(image.id, image.src);
			});	
		}
	}
};