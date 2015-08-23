var GG = GG || {},
	gg = gg || {};

/*GG.Game = function(){};

GG.Game.prototype = {
	start: function() {
		var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

		this.addStates(game);
	},

	addStates: function(game){
		
	}
};

*/

GG.Game = class Game {
	constructor(msg) {
		console.log(msg);

		
		this.start();
	}

	start() {
		let game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
		let testTemplate = "test testTemplate";

		console.log("start", this, `also ${testTemplate}`);

		this.addScreens(game);
	}

	addScreens() {
		let screens = gg.screenManager.getScreens();
	}
}

gg.game = new GG.Game("This is a test!");
