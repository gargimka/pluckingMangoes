class Circle {
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:1,
            //density:1.0,
            friction :1
           }
          //this.image=loadImage("dust.png");
       // this.width=width;
        this.r=radius; 
        this.body=Bodies.circle(x,y,(this.r)/2,options);
        World.add(world,this.body);
        this.image=loadImage("mango.png");
    }
    
    display(){
        var pos=this.body.position
        var angle=this.body.angle
    
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius);
        //fill("orange");
        //stroke("purple");
        //strokeWeight(5);
       ellipse(0,0,this.r,this.r)
        pop();
    
    }
    
    }