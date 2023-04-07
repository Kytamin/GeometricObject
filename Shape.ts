export class Shape {
    protected color: string = "red"
    protected filled: boolean = true

    constructor(
        color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }

    getCorLor(): string {
        return this.color;
    }

    setCorLor(value: string) {
        this.color = value;
    }

    getFilled(): string {
        if (this.filled) {
            return `is filled`
        } else {
            return `is not filled`
        }
    }

    toString(): string {
        return `A Shape with color of ${this.getCorLor()} and ${this.getFilled()}`
    }

    setFilled(value: boolean) {
        this.filled = value;
    }
}

let shape1 = new Shape("blue", false)
shape1.setFilled(true)
console.log(shape1.toString())