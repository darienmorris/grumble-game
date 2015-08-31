var GG = GG || {},
	gg = gg || {};

GG.Game = class Game {
	constructor() {
		console.log("New game: ", this);

		this.start();
	}

	start() {
		window.game = new Phaser.Game(800, 600, Phaser.AUTO, "game");

		this.initManagers();
		this.managers.screen.startFirstScreen();
	} 

	/**
	 * Most managers rely on the global game object to be created.
     *
	 * @return {undefined} No return.
	 */
	initManagers() {
		this.managers = {
			screen: new GG.ScreenManager()
		};
	}
};