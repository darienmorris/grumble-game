GG.LoginScreen = class IntroScreen extends GG.Screen {

	constructor() {
		super();
	}
	
	preload() {
		super.preload();
		console.log("Login screen");
	}

	create() {
		super.create();

		this.msg = game.add.text(game.world.centerX, game.world.centerY, "Login to this sick game.", {
	    	font: "16px Arial",
	    	fill: "#ffffff",
	    	align: "center"
		});
		this.msg.anchor.setTo(0.5, 0.5);
	}

	update() {
		super.update();
	}
};