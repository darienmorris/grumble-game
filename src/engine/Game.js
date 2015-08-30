var GG = GG || {},
	gg = gg || {};

GG.Game = class Game {
	constructor() {
		console.log("New game: ", this);

		this.managers = {
			screen: new GG.ScreenManager()
		};
		
		this.start();
	}

	start() {
		window.game = new Phaser.Game(800, 600, Phaser.AUTO, "game");


		this.addScreens();
	} 

	// TODO: Move this method to the screen manager
	addScreens() {
		let startScreenName = this.managers.screen.startScreen;
		let screens = this.managers.screen.screens;

		_.forEach(screens, function(screen, key){
			console.log(key, screen);
			game.state.add(key, screen);
		});

		game.state.start(startScreenName);
	}
};