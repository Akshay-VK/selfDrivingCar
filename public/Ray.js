class Ray{
	constructor(x, y, angleX, angleY){
		this.pos = createVector(x,y);
		this.angle = createVector(angleX,angleY);
	}
	
	show(){
		fill(255)
		stroke(255);
		strokeWeight(3);
		line(this.pos.x, this.pos.y, this.pos.x+this.angle.x*100, this.pos.y+this.angle.y*100);
	}

	setAngle(angle){
		this.angle = p5.Vector.fromAngle(radians(angle));
	}

	cast(wall, render){
		const x1 = wall.a.x;
		const y1 = wall.a.y;
		const x2 = wall.b.x;
		const y2 = wall.b.y;

		const x3 = this.pos.x;
		const y3 = this.pos.y;
		const x4 = this.pos.x+this.angle.x;
		const y4 = this.pos.y+this.angle.y;

		const den = ((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));

		const t = ((x1-x3)*(y3-y4)-(y1-y3)*(x3-x4))/(den);

		const u = ((x2-x1)*(y1-y3)-(y2-y1)*(x1-x3))/(den);

		if(t >= 0 && t <= 1 && u >= 0){
			strokeWeight(5);
			var cp = createVector(x1+t*(x2-x1),y1+t*(y2-y1));
			if(render){
				line(this.pos.x, this.pos.y, cp.x, cp.y);
			}
			return cp;
		}else{
			return;
		}
	}

	raycast(walls, render, ret){
		var bPos = createVector(this.pos.x, this.pos.y);
		var d = Infinity;
		for(var i = 0; i < walls.length; i++){
			var cc = this.cast(walls[i], false);
			if(cc){
				var cd = dist(this.pos.x,this.pos.y,cc.x,cc.y);
				if(cd < d){
					d = cd;
					bPos = cc;
				}

			}
		}
		if(render){
			fill(255);
			stroke(255);
			strokeWeight(1);
			line(this.pos.x,this.pos.y,bPos.x,bPos.y);
		}
		if(ret){
			return d;
		}
	}
}
