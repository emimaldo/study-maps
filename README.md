# Maps

A map is a data structure that allows storing key-value pairs. It is similar to a dictionary, where each key is associated with a value. The key is unique, meaning there can be no duplicates. This structure is very useful when we need to quickly look up a value based on its key.

## Main Features of a Map:

* **Key-value:** Each element in the map has a key and a value. For example, in a map that stores people's names as keys and their ages as values, the name would be the key and the age would be the value.
    * **Example:** `{ "John": 28, "Ana": 32 }`
* **Quick search:** Maps allow for efficient searching, adding, and removing of values. Accessing a value based on its key is usually very fast, with an average complexity of O(1).
* **Unique keys:** Duplicate keys cannot exist, but the values associated with them can be repeated.

## Maps in TypeScript (or objects in general):

In TypeScript (and JavaScript), a map can be represented by using an object or the native `Map` class.

### Using an object:

An object is one of the most common ways to implement a map in JavaScript/TypeScript. Here, the keys are strings (or convertible to strings), and values can be of any type.

```typescript
const map: { [key: string]: number } = {}; // The map will have the string type on keys and the number type on values

map["Juan"] = 28;
map["Ana"] = 32;

console.log(map["Juan"]); // Output: 28
```

### Using the `Map` class:

Also, in TypeScript we can use the native `Map` class, which allows keys of any type (not only strings).

```typescript
const map = new Map<string, number>(); // Initialize a map where keys are strings and values are numbers

map.set("Juan", 28);
map.set("Ana", 32);
console.log(map.get("Juan")); // Output: 28
```

## Common operations in a map:

* **Add:** Allows adding a new key with its associated value.
    * **Example:** `map.set("Carlos", 40);`
* **Access:** Allows getting the value associated with a key.
    * **Example:** `map.get("Carlos"); // 40`
* **Remove:** Allows removing a key-value pair from the map.
    * **Example:** `map.delete("Carlos");`
* **Verify existence:** Allows verifying if a key exists in the map.
    * **Example:** `map.has("Carlos"); // true or false`
