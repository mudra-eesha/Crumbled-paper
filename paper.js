class Paper
{
	
	constructor(x,y,r)
	{
		
		var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:0.5
	}
		this.x=x;
		this.y=y;
		this.r=40
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
		
	}
		
	display()
	{
			
			var paperpos=this.body.position;
			

			push()
		
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill("white")
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}