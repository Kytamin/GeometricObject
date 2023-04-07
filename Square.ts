import {Rectangle} from "./Rectangle";

class Square extends Rectangle{

    constructor(color: string, filled: boolean, side:number) {
        super(color, filled, side,side);
    }
    setSide(side:number):void{
        super.setWidth(side)
        super.setLeight(side)
    }
    getSide():number{
        return super.getWidth()

    }
    toString(): string {
        return `A Square with side=${this.getSide()}, which is a subclass of ${super.toString()}`
    }
}



let square1 = new Square("brown",true,5)
console.log(square1.getSide())
console.log(square1)
square1.setSide(15)
console.log(square1.toString())


