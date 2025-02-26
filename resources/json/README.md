# JSON (JavaScript Object Notation)

JSON is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is often used for transmitting data in web applications between a server and a client.

## Creating JSON

JSON is structured as key-value pairs, similar to a dictionary in Python or an object in JavaScript. Here’s how to create JSON:

### Basic Structure

- JSON data is represented as an object (enclosed in curly braces `{}`) or an array (enclosed in square brackets `[]`).
- Keys must be strings (enclosed in double quotes), and values can be strings, numbers, objects, arrays, booleans, or null.

### Example

```json
{
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "courses": ["Math", "Science"],
    "address": {
        "street": "123 Main St",
        "city": "Anytown"
    }
}
```

## Manipulating JSON

Manipulating JSON typically involves parsing it into a usable format in your programming language, modifying it, and then converting it back to a JSON string if needed.

### In JavaScript

#### Parsing JSON

To convert a JSON string into a JavaScript object, use `JSON.parse()`:

```javascript
const jsonString = '{"name": "John Doe", "age": 30}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Output: John Doe
```

#### Modifying JSON

You can modify the object just like any other JavaScript object:

```javascript
jsonObject.age = 31; // Update age
jsonObject.courses = ["Math", "Science", "History"]; // Add new property
```

#### Converting Back to JSON

To convert a JavaScript object back to a JSON string, use `JSON.stringify()`:

```javascript
const updatedJsonString = JSON.stringify(jsonObject);
console.log(updatedJsonString);
```

### In Python

#### Parsing JSON

Use the `json` module to parse JSON strings:

```python
import json

json_string = '{"name": "John Doe", "age": 30}'
json_object = json.loads(json_string)
print(json_object['name'])  # Output: John Doe
```

#### Modifying JSON

You can modify the dictionary just like any other Python dictionary:

```python
json_object['age'] = 31  # Update age
json_object['courses'] = ['Math', 'Science', 'History']  # Add new property
```

#### Converting Back to JSON

To convert a Python dictionary back to a JSON string, use `json.dumps()`:

```python
updated_json_string = json.dumps(json_object)
print(updated_json_string)
```

## Summary

- **Creating JSON**: Use key-value pairs, arrays, and nested objects.
- **Manipulating JSON**: Parse JSON strings to objects, modify them, and convert them back to strings using the appropriate methods in your programming language.

JSON is widely used in APIs and web services, making it an essential format for data interchange in modern applications.