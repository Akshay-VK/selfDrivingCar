class Car{
	constructor(x, y, width, height, angle){
		this.pos = createVector(x,y);
		this.width = width;
		this.height = height;
		this.angle = angle;
	}

	update(){
		this.angle += 1;	
	}

	show(){
		push();
		translate(this.pos.x, this.pos.y)
		rotate((PI/180)*this.angle);
		fill(255);
		strokeWeight(3);
		rectMode(CENTER);
		rect(0,0,this.width, this.height);
		pop();
	}
}
