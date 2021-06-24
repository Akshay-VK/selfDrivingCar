class Car{
	constructor(x, y, width, height, angle){
		this.pos = createVector(x,y);
		this.width = width;
		this.height = height;
		this.angle = angle;
		//  \_|_/
		//__|   |__
		//  |___|
		// /  | \
		this.t = new Ray(cos(angle-22.5),sin(angle-22.5));
		console.log(this.t);
	}

	update(){
		this.angle += 1;	

		this.t.angle.x = cos(this.angle-22.5);
		this.t.angle.y = sin(this.angle-22.5);
	}

	raycast(walls,render){
		this.t.raycast(walls,render);
	}
	cast(wall,render){
		this.t.cast(wall,render);
	}

	show(){

		//console.log('reacing?');

		push();
		translate(this.pos.x, this.pos.y)
		rotate((PI/180)*this.angle);
		fill(255);
		strokeWeight(3);
		this.t.show(true);
		rectMode(CENTER);
		rect(0,0,this.width, this.height);
		pop();
	}
}
