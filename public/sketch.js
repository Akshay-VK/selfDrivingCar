var br = 0;

var car;

var bounds = [];

var rays = [];

function setup(){
	createCanvas(600,400);
	car = new Car(100, 100, 50, 100, 0);

	bounds.push(new Bound(0,0,width,0));
	bounds.push(new Bound(0,0,0,height));
	bounds.push(new Bound(width,0,width,height));
	bounds.push(new Bound(0,height,width,height));
	bounds.push(new Bound(150, 150, 150, 250));
	bounds.push(new Bound(100, 150,100, 250));
	bounds.push(new Bound(250, 150, 250, 250));

	for(var i = 0; i < 180; i+=0.5){
		rays.push(new Ray(400, 200, cos(i*2), sin(i*2)));
	}
}
function draw(){
	background(0);

	car.update();
	car.show();
	car.raycast(bounds,true);


	for(var i = 0; i < bounds.length; i++){
		bounds[i].show();
	}

	for(var i = 0; i < rays.length; i++){
		rays[i].raycast(bounds,true);
		rays[i].pos.x = mouseX;
		rays[i].pos.y = mouseY;
	}
}
