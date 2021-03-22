class Thread{
    constructor(bodyA,bodyB){

        //all properties under Constraint 
        //bodyA and bodyB are the fixed syntax for constrain between two bodies
        //stiffness property decides obviosly, the stiffness of thread connecting two bodies
        //length property assigns the length of that thread  
        
        var x = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 1,
            length : 100
        }
    
        //this is synatx to creare a Constraint
        //x is variable storing all properties 

         this.thread = Constraint.create(x);
         World.add(world,this.thread);
    }

    display(){
    
        //namespacing
    var posA=this.thread.bodyA.position;
    var posB=this.thread.bodyB.position;

     //displaying this
    strokeWeight(5);
    stroke(0);
    line(posA.x,posA.y,posB.x,posB.y);
    }
}