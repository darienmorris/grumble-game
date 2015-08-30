GG.ScreenManager = class ScreenManager {

	constructor() {
		this.initScreens();
	}

	initScreens() {
		this._screens = {
			intro: GG.IntroScreen,
			login: GG.LoginScreen,
			//menu: new MenuScreen()
		}
	} 
 
	get screens() {
		return this._screens;
	}

	get startScreen() {
		return 'intro';
	}
};