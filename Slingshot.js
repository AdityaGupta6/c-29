class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            image (this.sling1,200,20);
            image (this.sling2,170,15);
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
          
            strokeWeight(4);
            stroke(76, 67, 67)
            if(pointA.x<200){
            image(this.sling3,pointA.x-20,pointA.y)
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25,pointA.y,pointB.x+40,pointB.y)
        }
        else{
            image(this.sling3,pointA.x+25,pointA.y)
            line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20,pointA.y-10,pointB.x+40,pointB.y)
        }
    }
    }
    
}