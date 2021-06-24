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
		this.tl = new Ray(cos(angle-45),sin(angle-45));
		this.t = new Ray(cos(angle),sin(angle));
		this.tr = new Ray(cos(angle+45),sin(angle+45));
		this.l = new Ray(cos(angle-90),sin(angle-90));
		this.r = new Ray(cos(angle+90),sin(angle+90));
		this.dl = new Ray(cos(angle-135),sin(angle-135));
		this.d = new Ray(cos(angle+180),sin(angle+180));
		this.dr = new Ray(cos(angle+135),sin(angle+135));
	}

	update(){
		this.angle += 1;	

		this.tl = new Ray(cos(this.angle-45),sin(this.angle-45));
		this.t = new Ray(cos(this.angle),sin(this.angle));
		this.tr = new Ray(cos(this.angle+45),sin(this.angle+45));
		this.l = new Ray(cos(this.angle-90),sin(this.angle-90));
		this.r = new Ray(cos(this.angle+90),sin(this.angle+90));
		this.dl = new Ray(cos(this.angle-135),sin(this.angle-135));
		this.d = new Ray(cos(this.angle+180),sin(this.angle+180));
		this.dr = new Ray(cos(this.angle+135),sin(this.angle+135));
		console.log(this);
	}

	raycast(walls,render){
		this.tl.raycast(walls,render);
		this.t.raycast(walls,render);
		this.tr.raycast(walls,render);
		this.l.raycast(walls,render);
		this.r.raycast(walls,render);
		this.dl.raycast(walls,render);
		this.d.raycast(walls,render);
		this.dr.raycast(walls,render);
	}
	cast(wall,render){
		this.tl.cast(wall,render);
		this.t.cast(wall,render);
		this.tr.cast(wall,render);
		this.l.cast(wall,render);
		this.r.cast(wall,render);
		this.dl.cast(wall,render);
		this.d.cast(wall,render);
		this.dr.cast(wall,render);
	}

	show(){

		fill(255);
		strokeWeight(2);

		this.tl.show();
		this.t.show();
		this.tr.show();
		this.l.show();
		this.r.show();
		this.dl.show();
		this.d.show();
		this.dr.show();
		//console.log('reacing?');

		push();
		translate(this.pos.x, this.pos.y)
		rotate((PI/180)*this.angle);
		fill(255);
		strokeWeight(3);
		rectMode(CENTER);
		//rect(0,0,this.width, this.height);
		pop();
	}
}
