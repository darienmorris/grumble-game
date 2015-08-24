var GG = GG || {},
	gg = gg || {};

GG.Game = class Game {
	constructor(msg) {
		console.log(msg);

		this.managers = {
			screen: new GG.ScreenManager()
		};
		
		this.start();
	}

	start() {
		let game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');


		this.addScreens(game);
	}

	addScreens() {
		let screens = this.managers.screen.screens;
	}
};