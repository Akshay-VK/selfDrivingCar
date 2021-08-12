class Car{
	constructor(x, y, width, height, angle, fg){
		angleMode(DEGREES);
		this.startPos=createVector(x,y);
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
		this.dead = false;

		this.XWeights = [];
		this.YWeights = [];
	
		if(fg){
			for(var i = 0;i < this.rays.length;i++){
				this.XWeights.push(Math.random()*2-1);
				this.YWeights.push(Math.random()*2-1);
			}
		}
		this.distanceMoved = createVector(0,0);
		this.totalDistMoved=0;
	}

	changeDirX(dirx){
		if(!this.dead){
			this.dir.x += dirx;
		}
	}
	changeDirY(diry){
		if(!this.dead){
			this.dir.y += diry;
		}
	}


	update(){
		if(!this.dead){
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
		}else{
			this.distanceMoved = p5.createVector.sub(this.pos, this.startPos);
			this.totalDistMoved = this.distanceMoved.mag();
		}
	}

	calcDirs(dists){
		if(!this.dead){
			var a = dists[0]*this.XWeights[0];
			var b = dists[0]*this.YWeights[0];
			for(var i = 0; i < dists.length;i++){
				a = (a+dists[i]*this.XWeights[i])/2;
				b = (b+dists[i]*this.YWeights[i])/2;
			}
			var res =  createVector(a,b);
			res.x = constrain(res.x,-0.1,0.5);
			res.y = constrain(res.y,-0.1,0.5);
			res.normalize();
			return res;
		}else{
			return createVector(0.001,0.001);
		}
	}

	raycast(bounds,render, ret){
		if(!this.dead){
			var rets = [];
			for(var i = 0; i < this.rays.length;i++){
				var res = this.rays[i].raycast(bounds,render,true);
				if(res <= this.smallest/2){
					this.dead = true;
				}
				if(ret){
					rets.push(res);	
				}
			}
			if(ret){
				return rets;
			}
			//this.l.raycast(bounds,render);
		}
	}

	show(col){
		angleMode(DEGREES);
		push();
		translate(this.pos.x,this.pos.y);
		rotate(this.angle+90);
		rectMode(CENTER);
		fill(col);
		rect(0,0,this.width,this.height);
		pop();

	}
}
