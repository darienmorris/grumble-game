GG.IntroScreen = class IntroScreen extends GG.Screen {

	constructor() {
		super();

		this.tick = 0;
		this._images = [
			{ id: "ness", src: "build/assets/ness.png" },
			{ id: "erik", src: "build/assets/cards/eck.png" }
		];

	}
	
	preload() {
		super.preload();
	}

	create() {
		super.create();

		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		this.msg = game.add.text(game.world.centerX, game.world.centerY, "Click Erik if you <3 backthrow boys", {
	    	font: "16px Arial",
	    	fill: "#ffffff",
	    	align: "center"
		});
		this.msg.anchor.setTo(0.5, 0.5);

		this.createButton();
	}

	update() {
		super.update();
	}


	// The following methods has been for testing.
	createButton() {
		let sprite = game.add.sprite(game.world.centerX, game.world.height, "erik");
		this.sprite.erik = sprite;
		sprite.scale.setTo(0.5);
		sprite.anchor.setTo(0.5, 1);

		sprite.inputEnabled = true;
		sprite.input.useHandCursor = true;
		sprite.events.onInputDown.add(this.clickErik, this);
	}

	clickErik() {
		this.createNess();
		this.sprite.erik.destroy();
		this.msg.setText("Click and drag Ness.");
	}

	createNess() {
		let sprite = game.add.sprite(50, 50, "ness");
		this.sprite.ness = sprite;
		sprite.scale.setTo(0.5);
		
		game.physics.arcade.enable(sprite);
		sprite.body.collideWorldBounds = true;
		sprite.body.bounce.set(0.9);

		sprite.inputEnabled = true;
		sprite.input.useHandCursor = true;
		sprite.input.enableDrag();

		sprite.events.onDragStart.add(this.startDrag, this);
		sprite.events.onDragStop.add(this.stopDrag, this);
	}

	startDrag(sprite) {
		this.sprite.ness.body.moves = false;
		this.msg.setText(":3");
	}

	 stopDrag(sprite) {
		this.sprite.ness.body.moves = true;
		this.msg.setText("Click and drag Ness.");		
	}
};