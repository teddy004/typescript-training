# typescript-training

## About TypeScript

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers static type checking at compile time which helps in identifying errors early in the development process.

## Installation

### Installing TypeScript via npm

To install TypeScript globally using npm, run the following command:

```sh
npm install -g typescript
```

### Installing TypeScript via yarn

To install TypeScript globally using yarn, run the following command:

```sh
yarn global add typescript
```

### Installing TypeScript on macOS

If you are using Homebrew, you can install TypeScript with the following command:

```sh
brew install typescript
```

## Usage

### Compiling TypeScript

To compile a TypeScript file (`example.ts`), use the `tsc` command:

```sh
tsc example.ts
```

This will generate a corresponding JavaScript file (`example.js`).

### Running TypeScript in the Terminal

First, compile your TypeScript file (`example.ts`) to JavaScript using the `tsc` command:

```sh
tsc example.ts
```

This will generate a corresponding JavaScript file (`example.js`). Then, run the compiled JavaScript file with:

```sh
node example.js
```

You can use the `ts-node` package to run TypeScript directly in the terminal without compiling it to JavaScript first. Install `ts-node` globally:

```sh
npm install -g ts-node
```

Then, run your TypeScript file with:

```sh
ts-node example.ts
```



### TypeScript Data Types

TypeScript provides several built-in data types that help in defining the type of variables. Here are some of the commonly used data types:

### Basic Types

- **Boolean**: Represents true or false values.
    ```typescript
    let isDone: boolean = false;
    ```

- **Number**: Represents both integer and floating-point numbers.
    ```typescript
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    ```

- **String**: Represents text data.
    ```typescript
    let color: string = "blue";
    ```

- **Array**: Represents a collection of values of the same type.
    ```typescript
    let list: number[] = [1, 2, 3];
    let list: Array<number> = [1, 2, 3];
    ```

- **Tuple**: Represents an array with a fixed number of elements of different types.
    ```typescript
    let x: [string, number];
    x = ["hello", 10];
    ```

- **Enum**: Represents a collection of related values that can be numeric or string-based.
    ```typescript
    enum Color {Red, Green, Blue}
    let c: Color = Color.Green;
    ```

- **Any**: Represents any type, useful when the type is not known at compile time.
    ```typescript
    let notSure: any = 4;
    notSure = "maybe a string instead";
    notSure = false;
    ```

- **Void**: Represents the absence of any type, commonly used as the return type of functions that do not return a value.
    ```typescript
    function warnUser(): void {
        console.log("This is my warning message");
    }
    ```

- **Null and Undefined**: Represents null and undefined values.
    ```typescript
    let u: undefined = undefined;
    let n: null = null;
    ```

  You can also use `null` and `undefined` in union types to represent variables that can have multiple types:
    ```typescript
    let name: string | null = "John";
    name = null; // valid

    let age: number | undefined;
    age = 25; // valid
    age = undefined; // valid
    ```

  They are often used in optional parameters and default values:
    ```typescript
    function greet(name: string | null = null): void {
        if (name === null) {
            console.log("Hello, stranger!");
        } else {
            console.log(`Hello, ${name}!`);
        }
    }

    greet(); // "Hello, stranger!"
    greet("Alice"); // "Hello, Alice!"
    ```

- **Never**: Represents the type of values that never occur, commonly used for functions that always throw an error or never return.
    ```typescript
    function error(message: string): never {
        throw new Error(message);
    }
    ```

- **Object**: Represents a non-primitive type.
    ```typescript
    let obj: object = { name: "John", age: 30 };
    ```

These data types help in writing robust and error-free code by providing static type checking at compile time.