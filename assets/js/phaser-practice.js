
// Game
function Game() {}

Game.prototype = {
	start: function() {
		var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

		game.state.add("boot", States.Boot);
		game.state.add("preload", States.Preload);
		//game.state.add("login");
		game.state.add("main-intro", States.MainIntro);
		//game.state.add("main-menu");
		//game.state.add("battle");
		game.state.start("boot");
	}
}




// States
var States = {
	Boot: function(){},
	Preload: function(){},
	MainIntro: function(){}
};

States.Boot.prototype = {
	preload: function() {
		// load preloader assets
		console.log("preload", this);		
	},
	create: function() {
		// setup game environment
		// scale, input etc..
		console.log("create", this);
		this.game.state.start('preload');
	}
};

States.Preload.prototype = {
	preload: function() {
		// load all game assets
		// images, spritesheets, atlases, audio etc..
		console.log("preload", this);
	},
	create: function() {
		console.log("create", this);
		this.game.state.start('main-intro');
	}
};

States.MainIntro.prototype = {
	create: function() {
		// add main intro assets into the world
		console.log("create", this);
	}
};


var game = new Game();
game.start();