/*
	TODO: 
		- abiity to create a loading screen
		

 */

GG.Screen = class Screen {
	constructor() {
		console.log("New screen: ", this);
		this._images = [];
		this._spritesheets = [];
		this._audio = [];
		this.sprite = {};
	}

	preload() {
		console.log("preload: ", this);
		this.loadImages();
		this.loadSpritesheets();
		this.loadAudio();
	}

	create() {
		console.log("create: ", this);
	}

	update() {
		
	}

	// TODO: DRY up the load methods?
	loadImages() {
		if(this._images.length){
			this._images.forEach(function(image){
				game.load.image(image.id, image.src);
			});	
		}
	}

	loadSpritesheets() {
		if(this._spritesheets.length){
			this._spritesheets.forEach(function(spritesheet){
				game.load.spritesheet(spritesheet.id, spritesheet.src, spritesheet.x, spritesheet.y);
			});	
		}
	}

	loadAudio() {
		if(this._audio.length){
			this._audio.forEach(function(audio){
				game.load.audio(audio.id, audio.src);
			});
		}
	}
};