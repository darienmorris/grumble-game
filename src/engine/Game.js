var GG = GG || {},
	gg = gg || {};

GG.Game = function(){};

GG.Game.prototype = {
	start: function() {
		var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
	}
};

gg.game = new GG.Game();