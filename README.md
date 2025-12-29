# Placement

What is JavaScript and its common uses? 
A high-level programming language used to create interactive effects in web browsers.
Commonly used for developing both web and mobile applications

What are template literals in JavaScript? 
A way to embed variables and expressions directly into a string using backticks () and${}` for readability and flexibility .

What is hoisting? Provide an example. 
A JavaScript phenomenon where variable and function declarations are "hoisted" (moved) to the top of their scope before execution.
var variables are hoisted and initialized with undefined, while let and const are hoisted but not initialized, leading to reference errors if accessed before declaration .

Difference between let, var, and const.
let and const have block scope, meaning they are only accessible within the block (e.g., if block, for loop) they are declared in .
var has function scope and can be accessed globally if not declared within a function .
const prevents reassignment, making it the most prioritized for preventing unexpected data leaks .

Data types in JavaScript. 
Categorized into primitive (immutable) and non-primitive (mutable) .
Primitive: number (integers, floats, Infinity, NaN), string (sequence of characters), boolean (true/false), undefined (default for undeclared variables), null (intentional absence of value), symbol (unique identifiers), bigint (for very large integers) .

Non-primitive: object (collection of key-value pairs), array (ordered list of values), function (reusable code blocks, treated as objects) .

What is an array, and how to access its elements? 
An ordered collection of values (elements) that can be of any data type .
Can be created using array literal syntax or Array constructor.
Elements are accessed using their zero-based indexes, or iterated using for or forEach loops.

Difference between == and ===. 
== (equality operator) performs type coercion (converts types before comparison), which can lead to unexpected results .
=== (strict equality operator) does not perform type coercion, comparing both value and type strictly .

Purpose of the isNaN function. 
Checks if a given value is "Not a Number." Returns true if the output cannot be coerced into a number .

What is null vs undefined?
Both indicate the absence of a value .
undefined: A default value for declared but unassigned variables .
null: Intentional absence of any value, assigned explicitly .
Use of the typeof operator. 
Determines the data type of a given value or variable and returns a string representation of its type .

 ## Intermediate Level JavaScript Interview Questions (JavaScript Interview Preparation Guide)

Purpose of the map method in JavaScript. 
Used to create a new array by applying a specified function to each element of an existing array .
Crucially, it does not modify the original array .

Explain event bubbling and event capturing. 
Event Bubbling: Events are handled from the innermost element to the outermost element (bottom-up propagation) .
Event Capturing: Events are handled from the outermost element to the innermost element (top-down propagation). This is typically turned off by default and needs to be explicitly enabled in addEventListener by setting the third argument to true.

What are higher-order functions? Provide an example. 
Functions that can either take another function as an argument or return a function as a result .
Example: The map method is a higher-order function because it accepts a callback function as an argument .

What is an IIFE (Immediately Invoked Function Expression)? 
A JavaScript function that is defined and executed immediately after it's created .
Useful for creating private scope and avoiding global variable pollution  .

Explain closures in JavaScript. 
A closure is when an inner function has access to the outer (enclosing) function's variables, even after the outer function has finished executing .
They are often used to create private variables in JavaScript, as there's no official way to declare private variables within objects .

How do setTimeout and setInterval work? 
Both are part of Web APIs (provided by browser/Node.js) and are used to schedule tasks to run after a specific amount of time (30:21:00-30:39:00).
setTimeout: Executes a function once after a specified delay (30:42:00-31:53:00).
setInterval: Executes a function repeatedly at specified intervals (30:59:00-31:10:00, 32:34:00-33:20:00).
clearInterval can be used to stop setInterval from running, and setTimeout can be combined with setInterval to clear intervals after a certain duration (31:57:00-32:31:00, 34:10:00-35:17:00).
Describe promises in JavaScript. (0:35:25)
Promises handle asynchronous tasks in JavaScript, providing a more readable and structured approach than callbacks (35:25:00-35:42:00).
They ensure that code can handle success or failure outcomes gracefully, preventing crashes (35:50:00-36:19:00).
Have three states:
Pending: Initial state, neither fulfilled nor rejected (36:21:00-36:30:00).
Fulfilled: The asynchronous operation completed successfully (36:30:00-36:37:00).
Rejected: The asynchronous operation failed (36:37:00-36:41:00).
then() is used for successful outcomes, and catch() for handling errors (37:53:00-38:41:00).
Use of async and await in JavaScript. (0:39:05)
async is used to declare an asynchronous function, which implicitly returns a Promise (39:19:00-39:31:00).
await is used inside an async function to pause the execution of the function until a Promise is resolved (39:31:00-39:38:00).
They make asynchronous code look and behave more like synchronous code, improving readability and maintainability (39:40:00-40:14:00).
Difference between call, apply, and bind. (0:42:57)
These methods are used to explicitly control the this context of a function and pass arguments (43:01:00-43:10:00, 49:30:00-49:55:00).
call: Invokes the function immediately. Arguments are passed one by one (43:11:00-45:56:00, 46:05:00-46:11:00).
apply: Invokes the function immediately. Arguments are passed as an array (46:14:00-47:00:00, 47:03:00-47:13:00).
bind: Returns a new function with the this context and arguments pre-set, but does not invoke it immediately. The new function must be called explicitly later (47:21:00-49:08:00).
What is event delegation? (0:50:01)
A technique for managing events efficiently by placing a single event listener on a common parent element instead of on each individual child element (50:04:00-50:17:00).
It utilizes the event bubbling capability, where events from child elements propagate up to their parent.