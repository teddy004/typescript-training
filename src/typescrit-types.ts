//Types


let age: number = 25 // number
let firstName: string = "John"; // string
let isActive: boolean = true; // boolean

let data: null =null;
let value: undefined;

let big: bigint = 100n; // it Represents whole numbers larger than (2*53-1)
let sym: symbol = Symbol(); // a unique and immutable value often used as object property keys.


const user: any = {
 name: "Asma",
 id: 2,
 isActive: true,
};

console.log(user.age);


let myAge: number = 20;
if(myAge<50)
    myAge+=10;
console.log(myAge);