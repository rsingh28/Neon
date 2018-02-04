# mchacks2018
McHacks 2018

## Installing the Application

1. Clone the repo: `git clone https://github.com/kevenv/mchacks2018.git`

2. If you want the complete game expereince, you will need Myo arm. Install and set up [Myo Connect](https://www.myo.com/) and make sure it works on your machine, i.e. [diagnostics](http://diagnostics.myo.com/) show your device as connected and responding to forearm movements.

## Running the Application

There are two ways to run the application: complete game experience and demo mode.

### Complete game experience (needs Myo armband)

1. Make the following changes to `onAfterLoad()` in `src/main.js`:

```
function onAfterLoad() {
	//onRender(); // uncomment this if want to use without Myo; comment if want to use with Myo
	initMyo(); // comment this if want to use without Myo; uncomment if want to use with Myo
}
```
2. Start a HTTP server from the app's top directory. I.e. `python -m http.server` if using Python 3 or `python -m SimpleHTTPServer` if using Python 2.

3. Open `http://localhost:8000/main.html` in your browser.

4. Make sure Myo armband is connected connected and synced with your computer. Hold your hand perpendicularly to the screen.

5. To start the game, unlock the Myo armband and make Myo "finger spread" gesture. You are playing the game now if anything went smoothly!

#### Controls:

* Moving sideways: move the forearm wearing Myo armband in the corresponding direction horizontally.

* Shooting: move the forearm wearing Myo armband upwards and bring it back down. You can shoot only one bullet at a time.


### Demo mode (doesn't need Myo armband)

1. Make the following changes to `onAfterLoad()` in `src/main.js`:

```
function onAfterLoad() {
	onRender(); // uncomment this if want to use without Myo; comment if want to use with Myo
	//initMyo(); // comment this if want to use without Myo; uncomment if want to use with Myo
}
```

2. Start a HTTP server from the app's top directory. I.e. `python -m http.server` if using Python 3 or `python -m SimpleHTTPServer` if using Python 2.

3. Open `http://localhost:8000/main.html` in your browser. The game starts automatically.

#### Controls:

* Moving sideways: you can't control the movement in demo mode. The player's position is following the sine function.

* Shooting: press `Space`
