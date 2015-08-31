GG.ScreenManager = class ScreenManager {

	constructor() {
		this._startScreen = "intro";
		
		this.initScreens();
		this.addScreens();
	}

	initScreens() {
		this._screens = {
			intro: GG.IntroScreen,
			login: GG.LoginScreen
			//menu: new MenuScreen()
		}
	} 
 
	get screens() {
		return this._screens;
	}

	addScreens() {
		let screens = this.screens;

		_.forEach(screens, function(screen, key){
			console.log(key, screen);
			game.state.add(key, screen);
		});
	}

	startFirstScreen() {
		game.state.start(this._startScreen);
	}
};