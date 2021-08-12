var br = 0;

var car;

var bounds = [];

var rays = [];

var cars = [];

function setup(){
	createCanvas(800,600);
	for(var i = 0; i < 10;i++){
		cars.push(new Car(300, 200, 25, 50, 0,true));
	}

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

	var allDead = true;
	for(var i = 0; i < cars.length;i++){
		cars[i].update();
		cars[i].show(127);
		var res = cars[i].calcDirs(cars[i].raycast(bounds,true,true));
		if(!cars[i].dead){
			allDead = false;
		}
		cars[i].changeDirX(res.x);
		cars[i].changeDirY(res.y);
	}
	if(allDead){
		var highestDist=0;
		var highestDistIndex;
		for(var i = 0;i < cars.length;i++){
			if(highestDist<cars[i].totalDistMoved){
				highestDist=cars[i].totalDistMoved;
				highestDistIndex=i;
			}
		}
		alert(cars[i]);
		cars[i].show(255);
		
		cars = [];
		for(var i = 0;i < 10;i++){
			cars.push(new Car(300,200,25,50,0,true));
		}
	}

	for(var i = 0; i < bounds.length; i++){
		bounds[i].show();
	}

	//for(var i = 0; i < rays.length; i++){
		//rays[i].raycast(bounds,true);
		//rays[i].pos.x = mouseX;
		//rays[i].pos.y = mouseY;
	//}
	//if(keyIsDown(LEFT_ARROW)){
	//	car.changeDirX(-0.5);
	//}
	//if(keyIsDown(RIGHT_ARROW)){
	//	car.changeDirX(0.5);
	//}
	//if(keyIsDown(UP_ARROW)){
	//	car.changeDirY(-0.5);
	//}
	//if(keyIsDown(DOWN_ARROW)){
	//	car.changeDirY(0.5);
	//}
}
