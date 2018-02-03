
'use strict';

// Constants
var WINDOW_WIDTH = 800;
var WINDOW_HEIGHT = 600;

// Globals
var scene = null;
var camera = null;
var renderer = null;
var controls = null;
var cube2 = null;
var sphere = null;

// Events & callbacks
document.addEventListener("load", onLoad());

function onLoad() {
	initRenderer();
}

function onRender() {
	requestAnimationFrame(onRender);
	onUpdate();
	renderer.render(scene, camera);
}

// Renderer
function initRenderer() {
	// viewport
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(WINDOW_WIDTH, WINDOW_HEIGHT);
	var viewport = document.getElementById("viewport");
	viewport.appendChild(renderer.domElement);

	scene = new THREE.Scene();

	// camera
	camera = new THREE.PerspectiveCamera(37, WINDOW_WIDTH/WINDOW_HEIGHT, 0.1, 1000);
	camera.up.set(0,0,1);
	camera.position.set(0,-4,1);
	camera.lookAt(new THREE.Vector3(0,0,1));

	// controls
	//controls = new THREE.OrbitControls(camera, renderer.domElement);
	//controls.target.set(0,0,1);

	var geometry = new THREE.BoxGeometry( 10, 1000, 0.001 );
	var material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.set(0,1000/2,0);
	scene.add( cube );

	var geometry2 = new THREE.BoxGeometry( 1, 1, 1 );
	var material2 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
	cube2 = new THREE.Mesh( geometry2, material2 );
	cube2.position.set(0,80,0);
	scene.add( cube2 );

	var geoS = new THREE.SphereGeometry( 0.5, 32, 32 );
	var matS = new THREE.MeshBasicMaterial( {color: 0xffff00} );
	sphere = new THREE.Mesh( geoS, matS );
	sphere.position.set(0,1,0);
	scene.add( sphere );

	add3DAxis();
	onRender(); // start update loop
}

function onUpdate() {
	//controls.update();
	camera.position.y += 0.5;
	sphere.position.y += 0.5;

	var time = performance.now() * 0.005;
	sphere.position.x = Math.sin( time * 0.7 ) * 1 + 0;
	//cube2.position.y += 0.05;
}

function add3DAxis() {
	var K = 10;
	var matX = new THREE.LineBasicMaterial({color:0xff0000});
	var matY = new THREE.LineBasicMaterial({color:0x00ff00});
	var matZ = new THREE.LineBasicMaterial({color:0x0000ff});
	var geometryX = new THREE.Geometry();
	geometryX.vertices.push(new THREE.Vector3(0, 0, 0));
	geometryX.vertices.push(new THREE.Vector3(K, 0, 0));
	var lineX = new THREE.Line(geometryX, matX);
	scene.add(lineX);
	var geometryY = new THREE.Geometry();
	geometryY.vertices.push(new THREE.Vector3(0, 0, 0));
	geometryY.vertices.push(new THREE.Vector3(0, K, 0));
	var lineY = new THREE.Line(geometryY, matY);
	scene.add(lineY);
	var geometryZ = new THREE.Geometry();
	geometryZ.vertices.push(new THREE.Vector3(0, 0, 0));
	geometryZ.vertices.push(new THREE.Vector3(0, 0, K));
	var lineZ = new THREE.Line(geometryZ, matZ);
	scene.add(lineZ);
}
