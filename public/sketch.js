var br = 0;
function setup(){
	createCanvas(600,400);
}
function draw(){
	background(0);
	fill(br);
	rect(50, 50, 50, 50);

	br = (br+1)%255;
}
