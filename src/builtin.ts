// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let sales: number = 123_456_789;

// String
let color: string = "blue";
color = 'red';

// Array
let list: number[] = [1, 2, 3];
let listGeneric: Array<number> = [1, 2, 3];

list.forEach(n=>console.log(n));

// Tuple
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error

// Enum
//PascalCase const
const enum Color{Red,Green, Blue};
let c: Color = Color.Green;
console.log("c", c);

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// Void
function warnUser(): void {
    console.log("This is my warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
    throw new Error(message);
}

// // Object
// declare function create(o: object | null): void;
// create({ prop: 0 }); // OK
// create(null); // OK
// // create(42); // Error

// Type assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// Optional property access control '?'
type Customer = {
    birthDay: Date;
}
    
function getCustomer(id:number): Customer | null | undefined{
    return id===0 ? null: {birthDay: new Date()};
}

let customer = getCustomer(1);
if (customer !== null)
    console.log(customer?.birthDay);