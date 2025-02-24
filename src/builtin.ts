// Boolean: true or false value
let isDone: boolean = false;
// Example
isDone = true; // Change the value to true
console.log(isDone); // Output: true

// Practice Task: Create a boolean variable `isActive` and set it to true.

// Number: integer or floating-point number
let decimal: number = 6;
let hex: number = 0xf00d; // hexadecimal
let binary: number = 0b1010; // binary
let octal: number = 0o744; // octal
let sales: number = 123_456_789; // or you can use like let sales: number = 123456789;
// Example
let pi: number = 3.14;
console.log(pi); // Output: 3.14

// Practice Task: Create a variable `temperature` and set it to a floating-point number.

// String: text data
let color: string = "blue";
color = 'red';
// Example
let greeting: string = "Hello, world!";
console.log(greeting); // Output: Hello, world!

// Practice Task: Create a string variable `name` and set it to your name.

// Array: list of values of a specific type
let list: number[] = [1, 2, 3];
let listGeneric: Array<number> = [1, 2, 3];
list.forEach(n => console.log(n)); // Output: 1 2 3

// Practice Task: Create an array of strings called `fruits` and add three fruit names to it.

// Tuple: array with fixed number of elements of specific types
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error
// Example
let person: [string, number] = ["Alice", 25];
console.log(person); // Output: ["Alice", 25]

// Practice Task: Create a tuple `address` with a string and a number.

// Enum: named constants
const enum Color { Red, Green, Blue };
let c: Color = Color.Green;
console.log("c", c); // Output: 1

// Practice Task: Create an enum `Direction` with values `North`, `South`, `East`, `West`.

// Any: any type, can hold any value
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// Example
let randomValue: any = "Hello";
randomValue = 42;
console.log(randomValue); // Output: 42

// Practice Task: Create a variable `data` of type `any` and assign different types of values to it.

// Void: no type, usually for functions that do not return a value
function warnUser(): void {
    console.log("This is my warning message");
}
warnUser(); // Output: This is my warning message

// Practice Task: Create a function `logMessage` that takes a string message and logs it to the console.

// Null and Undefined: represent absence of value
let u: undefined = undefined;
let n: null = null;
// Example
let empty: null = null;
let notAssigned: undefined = undefined;
console.log(empty, notAssigned); // Output: null undefined

// Practice Task: Create a variable `unknown` and set it to `undefined`.

// Never: represents values that never occur (e.g., function that always throws an error)
function error(message: string): never {
    throw new Error(message);
}
// Example
function fail(): never {
    return error("Something went wrong");
}

// Practice Task: Create a function `infiniteLoop` that has a never-ending loop.

// Object: non-primitive type (not number, string, boolean, symbol, null, or undefined)
// declare function create(o: object | null): void;
// create({ prop: 0 }); // OK
// create(null); // OK
// // create(42); // Error

// Practice Task: Create an object `car` with properties `make` and `model`.

// Type assertions: override TypeScript's inferred type
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
// Example
let anotherValue: any = "TypeScript";
let valueLength: number = (anotherValue as string).length;
console.log(valueLength); // Output: 10

// Practice Task: Create a variable `input` of type `any` and assert it to be a number.

// Optional property access control '?': safely access properties that might not exist
type Customer = {
    birthDay: Date;
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthDay: new Date() };
}

let customer = getCustomer(1);
if (customer !== null)
    console.log(customer?.birthDay); // Output: current date

// Practice Task: Create a type `Employee` with an optional property `department` and a function `getEmployee` that returns an `Employee` or `null`.
