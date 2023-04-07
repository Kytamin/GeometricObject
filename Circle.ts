import {Shape} from "./Shape";

class Circle extends Shape {
     private radius:number
    constructor(color: string, filled: boolean,radius:number) {
        super(color, filled);
        this.radius=radius
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(value: number) {
        this.radius = value;
    }
    getArea(){
         return this.radius*this.radius*Math.PI
    }
    getPerimeter(){
         return this.radius*2*Math.PI
    }
    toString(): string {
        return `A Circle with radius=${this.getRadius()}, which is a subclass of ${super.toString()}`;
    }
}
let Circle1= new Circle("green",true,10)

console.log(Circle1.toString())


