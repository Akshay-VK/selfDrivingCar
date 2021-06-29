class Car{
	constructor(x, y, width, height, angle){
		this.pos = createVector(x,y);
		this.width = width;
		this.height = height;
		this.angle = angle;
		//  \_|_/
		//__|   |__
		//  |___|
		//
		this.t = new Ray(p5.Vector.fromAngle(radians(angle)).x,p5.Vector.fromAngle(radians(angle)).y);
	}

	update(){
		this.angle += 1;	
		this.t.angle.x = p5.Vector.fromAngle(radians(this.angle)).x;
		this.t.angle.y = p5.Vector.fromAngle(radians(this.angle)).y;
	}

	raycast(walls,render){
		this.t.raycast(walls,render,true);
	}
	cast(wall,render){
		this.t.cast(wall,render);
	}

	show(){

		//console.log('reacing?');

		push();
		translate(this.pos.x, this.pos.y)
		rotate((PI/180)*this.angle);
		fill(255,255,255,0);
		strokeWeight(3);
		this.t.raycast(true);
		rectMode(CENTER);
		rect(0,0,this.width, this.height);
		pop();
	}
}
