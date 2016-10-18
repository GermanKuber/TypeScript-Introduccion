//Playground
class Point {
    x: number;
    y: number;
    constructor(x: number = 2, y: number = 9) {
        this.x = x;
        this.y = y;
    }
    get suma() {
        return this.x + this.y;
    }
    static InPoint = new Point(1, 34);
}

class Point3D extends Point {

    constructor(public x: number = 2,public   y: number = 9,public  z: number = 2) {
        super(x, y);        
    }
}


var point = new Point(25, 76);

var result = point.suma;

Point.InPoint.x = 9;