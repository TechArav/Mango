class Slingshot{
    constructor(bodyA,pointB){
        var options={
       bodyA:bodyA,
       pointB:pointB,
       stiffness:0.4,
       length:10
        }
        this.pointB=pointB
        this.sling=Constaraint.create(options)
        World.add(world,this.sling)
    }

    fly(){
        this.sling.bodyA=null;
    }
    display(){
        
        if(this.sling.bodyA){
    pointA=this.sling.bodyA.position;
    pointB=this.pointB;
    
    strokeWeight(4)
   
    line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
}
}