### In TypeScript, objects are a fundamental part of the language and can be created and manipulated in various ways. Below are some examples of how to create and manipulate objects in TypeScript.

## Creating Objects

### Using Object Literal Syntax:

```typescript
const person = {
    name: "John",
    age: 30,
    isEmployed: true
};
```

### Using a Class:

```typescript
class Person {
    name: string;
    age: number;
    isEmployed: boolean;

    constructor(name: string, age: number, isEmployed: boolean) {
        this.name = name;
        this.age = age;
        this.isEmployed = isEmployed;
    }
}

const person = new Person("John", 30, true);
```

### Using an Interface:

```typescript
interface Person {
    name: string;
    age: number;
    isEmployed: boolean;
}

const person: Person = {
    name: "John",
    age: 30,
    isEmployed: true
};
```

## Manipulating Objects

### Accessing Properties:

```typescript
console.log(person.name); // Output: John
console.log(person['age']); // Output: 30
```

### Updating Properties:

```typescript
person.age = 31;
console.log(person.age); // Output: 31
```

### Adding New Properties:

```typescript
(person as any).email = "john@example.com"; // This will work if `person` is defined as `any` or if you are using a type that allows dynamic properties.
console.log((person as any).email); // Output: john@example.com
```

### Deleting Properties:

```typescript
delete person.isEmployed;
console.log(person.isEmployed); // Output: undefined
```

### Iterating Over Properties:

```typescript
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}
```

### Using Object Methods:

You can also define methods within your object or class.

```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person = new Person("John", 30);
person.greet(); // Output: Hello, my name is John
```

## Summary

- You can create objects using object literals, classes, or interfaces.
- You can manipulate objects by accessing, updating, adding, and deleting properties.
- You can iterate over properties and define methods within your objects or classes.