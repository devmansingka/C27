class Slingshot {
    constructor(body1, body2) {
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.04,
            length: 15
        }

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    } 

    display() {
        strokeWeight(4);
        var startPoint = this.sling.bodyA.position;
        var endPoint = this.sling.bodyB.position;
        line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
    }
}