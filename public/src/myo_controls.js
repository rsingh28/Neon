Myo.connect();

var playerXPos = null;

function initMyo(){
	console.log("test");

	Myo.on('fingers_spread', function(){
		Myo.setLockingPolicy("none");
		console.log('Hello Myo!');
		this.vibrate();
		this.zeroOrientation();
		requestAnimationFrame(onRender);
		onUpdate();
		renderer.render(scene, camera);

	});
	Myo.on('imu', function(data){
		playerXPos = data.orientation.y / 0.35;
		console.log(playerIsHit);
		if (playerHealth ) {
			console.log("player collide!");
			this.vibrate();
		}
		//console.log(playerXPos);
	});

	
	Myo.on('fist', function(){
			shootBullet();
	});

}