### TypeScript Arrays

In TypeScript, arrays are a fundamental data structure that allows you to store multiple values in a single variable. You can create and manipulate arrays in various ways. Below are some common operations for creating and manipulating arrays in TypeScript.

## Creating Arrays

### Using Array Literals

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ['apple', 'banana', 'cherry'];
```

### Using Array Constructors

```typescript
let numbers: Array<number> = new Array(1, 2, 3, 4, 5);
let fruits: Array<string> = new Array('apple', 'banana', 'cherry');
```

### Empty Array

```typescript
let emptyArray: number[] = [];
```

## Manipulating Arrays

### Adding Elements

Using `push()`: Adds one or more elements to the end of an array.

Using `unshift()`: Adds one or more elements to the beginning of an array.

```typescript
numbers.unshift(0); // numbers is now [0, 1, 2, 3, 4, 5, 6]
```

### Removing Elements

Using `pop()`: Removes the last element from an array and returns it.

```typescript
let lastNumber = numbers.pop(); // lastNumber is 6, numbers is now [0, 1, 2, 3, 4, 5]
```

Using `shift()`: Removes the first element from an array and returns it.

```typescript
let firstNumber = numbers.shift(); // firstNumber is 0, numbers is now [1, 2, 3, 4, 5]
```

Using `splice()`: Removes elements from a specific index.

```typescript
numbers.splice(2, 1); // Removes 1 element at index 2, numbers is now [1, 2, 4, 5]
```

### Accessing Elements

```typescript
let firstFruit = fruits[0]; // 'apple'
let secondFruit = fruits[1]; // 'banana'
```

### Iterating Over Arrays

Using `for` loop:

```typescript
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

Using `forEach()`:

```typescript
fruits.forEach((fruit) => {
    console.log(fruit);
});
```

Using `map()`: Creates a new array with the results of calling a provided function on every element.

```typescript
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase()); // ['APPLE', 'BANANA', 'CHERRY']
```

### Finding Elements

Using `find()`: Returns the first element that satisfies the provided testing function.

```typescript
let foundFruit = fruits.find(fruit => fruit === 'banana'); // 'banana'
```

Using `filter()`: Creates a new array with all elements that pass the test implemented by the provided function.

```typescript
let filteredFruits = fruits.filter(fruit => fruit.startsWith('b')); // ['banana']
```

### Sorting Arrays

```typescript
numbers.sort((a, b) => a - b); // Sorts numbers in ascending order
fruits.sort(); // Sorts fruits alphabetically
```

### Reversing Arrays

```typescript
numbers.reverse(); // Reverses the order of elements in the array
```

### Example

Here’s a complete example that demonstrates creating and manipulating an array:

```typescript
let numbers: number[] = [5, 3, 8, 1];

// Adding elements
numbers.push(2);
numbers.unshift(0);

// Removing elements
numbers.pop(); // Removes 2
numbers.splice(1, 1); // Removes the element at index 1

// Iterating over the array
numbers.forEach(num => {
    console.log(num); // Outputs: 0, 3, 1, 8
});

// Sorting the array
numbers.sort((a, b) => a - b); // Sorts in ascending order

console.log(numbers); // Outputs: [0, 1, 3, 8]
```
