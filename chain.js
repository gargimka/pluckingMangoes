class Chain{
    constructor(bodyA,bodyB){
      //options for my constraint
     var options={
         bodyA:bodyA,
         bodyB:bodyB,
         length:10,
         stiffness:0.04
      }
     //create Constraint
         this.chain=Constraint.create(options);
         World.add(world,this.chain);
         
    }
 
    display(){
      var chain=this.chain;
      var pos1=chain.bodyA.position;
      var pos2=chain.bodyB.position;
 
 
 
     push(); 
     strokeWeight(6);
     line(pos1.x,pos1.y,pos2.x,pos2.y);
     pop();
 
    }
 }