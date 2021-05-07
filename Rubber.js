class Rubber
{
	constructor(x,y,r)
	{
		var options={
		
			restitution:1,
			friction:5,
			density:1
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var rubberpos=this.body.position;
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(0,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}