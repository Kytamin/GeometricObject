import {Shape} from "./Shape";
export class Rectangle extends Shape {
    private width: number

    private length: number

    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this.width = width;
        this.length = length;
    }

    getWidth(): number {
        return this.width;
    }

    setWidth(value: number) {
        this.width = value;
    }

    getLeight(): number {
        return this.length;
    }

    setLeight(value: number) {
        this.length = value;
    }
    getArena(){
        return this.length*this.width
    }
    getPerimeter(){
        return (this.width+this.length)*2
    }
    toString(): string {
        return `A Rectangle with width=${this.width} and length=${this.length}, which is a subclass of ${super.toString()}`
    }

}
let rectangle1= new Rectangle("black",false,2,4)

console.log(rectangle1.toString())
