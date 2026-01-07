# Placement

## What is JavaScript and its common uses? 
 A high-level programming language used to create interactive effects in web browsers.
Commonly used for developing both web and mobile applications

## What are template literals in JavaScript? 
A way to embed variables and expressions directly into a string using backticks () and${}` for readability and flexibility .

## What is hoisting? Provide an example. 
A JavaScript phenomenon where variable and function declarations are "hoisted" (moved) to the top of their scope before execution.
var variables are hoisted and initialized with undefined, while let and const are hoisted but not initialized, leading to reference errors if accessed before declaration .

## Difference between let, var, and const.
let and const have block scope, meaning they are only accessible within the block (e.g., if block, for loop) they are declared in .
var has function scope and can be accessed globally if not declared within a function .
const prevents reassignment, making it the most prioritized for preventing unexpected data leaks .

## Data types in JavaScript. 
Categorized into primitive (immutable) and non-primitive (mutable) .
Primitive: number (integers, floats, Infinity, NaN), string (sequence of characters), boolean (true/false), undefined (default for undeclared variables), null (intentional absence of value), symbol (unique identifiers), bigint (for very large integers) .

Non-primitive: object (collection of key-value pairs), array (ordered list of values), function (reusable code blocks, treated as objects) .

## What is an array, and how to access its elements? 
An ordered collection of values (elements) that can be of any data type .
Can be created using array literal syntax or Array constructor.
Elements are accessed using their zero-based indexes, or iterated using for or forEach loops.

## Difference between == and ===. 
== (equality operator) performs type coercion (converts types before comparison), which can lead to unexpected results .
=== (strict equality operator) does not perform type coercion, comparing both value and type strictly .

## Purpose of the isNaN function. 
Checks if a given value is "Not a Number." Returns true if the output cannot be coerced into a number .

## What is null vs undefined?
Both indicate the absence of a value .
undefined: A default value for declared but unassigned variables .
null: Intentional absence of any value, assigned explicitly .
Use of the typeof operator. Determines the data type of a given value or variable and returns a string representation of its type .

 ## Intermediate Level JavaScript Interview Questions (JavaScript Interview Preparation Guide)

## Purpose of the map method in JavaScript. 
Used to create a new array by applying a specified function to each element of an existing array .
Crucially, it does not modify the original array . 

## Explain event bubbling and event capturing. 
Event Bubbling: Events are handled from the innermost element to the outermost element (bottom-up propagation) .
Event Capturing: Events are handled from the outermost element to the innermost element (top-down propagation). This is typically turned off by default and needs to be explicitly enabled in addEventListener by setting the third argument to true.

## What are higher-order functions? Provide an example. 
Functions that can either take another function as an argument or return a function as a result .
Example: The map method is a higher-order function because it accepts a callback function as an argument .

## What is an IIFE (Immediately Invoked Function Expression)? 
A JavaScript function that is defined and executed immediately after it's created .
Useful for creating private scope and avoiding global variable pollution  .

## Explain closures in JavaScript. 
A closure is when an inner function has access to the outer (enclosing) function's variables, even after the outer function has finished executing .
They are often used to create private variables in JavaScript, as there's no official way to declare private variables within objects .

## How do setTimeout and setInterval work? 
Both are part of Web APIs (provided by browser/Node.js) and are used to schedule tasks to run after a specific amount of time .
setTimeout: Executes a function once after a specified delay .
setInterval: Executes a function repeatedly at specified intervals .
clearInterval can be used to stop setInterval from running, and setTimeout can be combined with setInterval to clear intervals after a certain duration .

## Describe promises in JavaScript. 
Promises handle asynchronous tasks in JavaScript, providing a more readable and structured approach than callbacks .
They ensure that code can handle success or failure outcomes gracefully, preventing crashes .
Have three states:
Pending: Initial state, neither fulfilled nor rejected .
Fulfilled: The asynchronous operation completed successfully .
Rejected: The asynchronous operation failed .
then() is used for successful outcomes, and catch() for handling errors .

## Use of async and await in JavaScript. 
async is used to declare an asynchronous function, which implicitly returns a Promise .
await is used inside an async function to pause the execution of the function until a Promise is resolved .
They make asynchronous code look and behave more like synchronous code, improving readability and maintainability .
Difference between call, apply, and bind. 
These methods are used to explicitly control the this context of a function and pass arguments.
call: Invokes the function immediately. Arguments are passed one by one .
apply: Invokes the function immediately. Arguments are passed as an array .
bind: Returns a new function with the this context and arguments pre-set, but does not invoke it immediately. The new function must be called explicitly later .

##  What is event delegation? 
A technique for managing events efficiently by placing a single event listener on a common parent element instead of on each individual child element  .
It utilizes the event bubbling capability, where events from child elements propagate up to their parent.

## Explain the Event Loop in JavaScript 

The event loop is a fundamental concept that enables JavaScript to perform non-blocking I/O operations despite being single-threaded.
It continuously checks if the call stack is empty. If it is, it moves functions from the message queue (or task queue) to the call stack for execution.
This mechanism allows asynchronous operations (like setTimeout, setInterval, Promises, network requests) to be handled without freezing the main thread.
Difference between Promises and Async/Await 

## Both are used for handling asynchronous operations in JavaScript.
Promises :-  Provide a more structured way to handle asynchronous results (success or failure) compared to traditional callbacks. They have states: pending, fulfilled, and rejected.
Async/Await :-  Built on top of Promises, async functions always return a Promise. The await keyword pauses the execution of an async function until the Promise it's waiting for is resolved or rejected, making asynchronous code look and behave more like synchronous code, improving readability and maintainability.
Purpose of the reduce Method in Arrays

The reduce method executes a reducer function (provided by you) on each element of the array, resulting in a single output value.
It's used to aggregate or condense array elements into a single value, such as summing all numbers, flattening an array of arrays, or counting occurrences of items.
The reducer function takes an accumulator and the current value as arguments, and optionally the current index and the array itself.

## Explain Currying in JavaScript 

Currying is a technique where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument.
It allows for partial application of arguments, creating new functions with some arguments already filled in.
This can make functions more reusable and composable.

## What is a Generator Function and its Usage? 

A generator function is a special type of function that can be paused and resumed, allowing it to produce a sequence of values over time.
They are defined using function* syntax and use the yield keyword to pause execution and return a value. When called again, they resume from where they left off.
Usage: Useful for iterating over large datasets, implementing custom iterators, handling asynchronous operations, and managing state in a more memory-efficient way.

##  What are Weak Maps and Weak Sets in JavaScript?

WeakMap : A collection of key/value pairs where keys are weakly referenced objects. If there are no other references to the key object, it can be garbage-collected, and the entry is removed from the WeakMap.
WeakSet : A collection of weakly referenced objects. Similar to WeakMap, if an object in a WeakSet is no longer referenced anywhere else, it can be garbage-collected.
Key difference from Map/Set: They don't prevent garbage collection of their keys/values, making them suitable for scenarios where you want to associate data with objects without preventing those objects from being collected when they are no longer in use.

## How does JavaScript Handle Memory Management?
JavaScript uses automatic memory management, primarily through a process called garbage collection.
When an object is created, memory is allocated. When an object is no longer "reachable" (meaning no active references point to it), the garbage collector automatically reclaims the memory.
This relieves developers from manual memory allocation and deallocation, reducing memory-related bugs.

## Difference between Shallow and Deep Copying.
Shallow Copy : Creates a new object/array, but it only copies the references to the nested objects or arrays. Changes to nested elements in the copy will affect the original, and vice versa.
Deep Copy : Creates a completely independent copy of the original object/array, including all nested objects and arrays. Changes in the deep copy will not affect the original, and vice versa.
Common methods for shallow copy include Object.assign(), spread syntax (...), and Array.prototype.slice(). Deep copying often requires JSON methods (JSON.parse(JSON.stringify(obj))) or external libraries for complex objects.

## What is Strict Mode in JavaScript and how is it Enabled? 

Strict Mode is a way to opt into a restricted variant of JavaScript, which fixes some of JavaScript's problematic "bad parts" and provides more robust error-checking.
It helps write safer and more reliable code by:
Converting common coding mistakes into errors (e.g., assigning to undeclared variables).
Disallowing "unsafe" actions (e.g., gaining access to the global object).
Throwing errors for features that are problematic or poorly designed.
Enabled by: Placing the string "use strict"; at the beginning of a script or a function.

## Observer Pattern and its Relation to JavaScript 

The Observer pattern is a behavioral design pattern where an object (the "subject" or "observable") maintains a list of its dependents (the "observers") and notifies them automatically of any state changes, usually by calling one of their methods.
Relation to JavaScript: It's widely used in JavaScript, especially in event handling, reactive programming (e.g., RxJS), and UI frameworks. The DOM event system itself is an example of the observer pattern, where elements are subjects and event listeners are observers.
