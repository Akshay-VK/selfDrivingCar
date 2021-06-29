class Car{
	constructor(x, y, width, height, angle){
		angleMode(DEGREES);
		this.pos = createVector(x,y);
		this.width = width;
		this.height = height;
		this.smallest = min(this.width,this.height);
		this.angle = angle;
		this.dir = createVector(0,0);
		//  \_|_/
		//__|   |__
		//  |___|
		//
		var head = this.dir.heading();
		this.rays = [];
		for(var i = -90; i <= 90;i+=45){
			this.rays.push(new Ray(this.pos.x,this.pos.y,0,0));
			this.rays[this.rays.length-1].setAngle(head+i);
		}
		this.l = new Ray(this.pos.x,this.pos.y,0,0);
		this.l.setAngle(head-90);

	}

	update(){
		angleMode(DEGREES);

		this.pos.x += this.dir.x;
		this.pos.y += this.dir.y;

		this.dir.x *= 0.9;
		this.dir.y *= 0.9;

		this.angle = this.dir.heading();
		//this.angleX = p5.Vector.fromAngle(this.angle).x;
		//this.angleY = p5.Vector.fromAngle(this.angle).y;
		for(var i = -90;i <= 90; i += 45){
			this.rays[(i+90)/45].setAngle(this.dir.heading()+i);
			this.rays[(i+90)/45].pos = this.pos;
		}
		this.l.setAngle(this.dir.heading()-90);
		this.l.pos = this.pos;
	}

	raycast(bounds,render){
		for(var i = 0; i < this.rays.length;i++){
			var res = this.rays[i].raycast(bounds,render,true);
			if(res <= this.smallest/2){
				console.log('collided');
			}
		}
		//this.l.raycast(bounds,render);
	}

	show(){
		angleMode(DEGREES);
		push();
		translate(this.pos.x,this.pos.y);
		rotate(this.angle+90);
		rectMode(CENTER);
		fill(127);
		rect(0,0,this.width,this.height);
		pop();

	}
}
